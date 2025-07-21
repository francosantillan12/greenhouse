
// arrays globales 
let productosHarinas = [];
let productosSemillas = [];
let productosEspecias = [];

let cargaCompleta = false; // <-- variable para controlar carga

//  para cargar cada archivo JSON
async function cargarHarinas() {
  try {
    const respuesta = await fetch('./data/harinas.json');
    productosHarinas = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar harinas:", error);
    Swal.fire("Error", "No se pudieron cargar las harinas", "error");
  }
}

async function cargarSemillas() {
  try {
    const respuesta = await fetch('./data/semillas.json');
    productosSemillas = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar semillas:", error);
    Swal.fire("Error", "No se pudieron cargar las semillas", "error");
  }
}

async function cargarEspecias() {
  try {
    const respuesta = await fetch('./data/especias.json');
    productosEspecias = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar especias:", error);
    Swal.fire("Error", "No se pudieron cargar las especias", "error");
  }
}

// Carga todos los productos al inicio
async function inicializarProductos() {
  await Promise.all([cargarHarinas(), cargarSemillas(), cargarEspecias()]);
  cargaCompleta = true;
  entradaUsuario.disabled = false;
}

inicializarProductos();

// Función para obtener el próximo ID unico global
function obtenerProximoId() {
  const todosProductos = [...productosHarinas, ...productosSemillas, ...productosEspecias];
  if (todosProductos.length === 0) return 0;
  return Math.max(...todosProductos.map(p => p.id)) + 1;
}

function agregarProducto(nuevoProducto, categoriaArray) {
  const nuevoId = obtenerProximoId();
  nuevoProducto.id = nuevoId;
  categoriaArray.push(nuevoProducto);
  return nuevoProducto;
}

//************LOGICA*******************/
const formulario = document.getElementById("formulario");
const entradaUsuario = document.getElementById("entradaUsuario");
const chat = document.getElementById("chat");

const basePorCategoria = {
  harinas: productosHarinas,
  semillas: productosSemillas,
  especias: productosEspecias,
};

const historialGuardado = localStorage.getItem("chatHistorial");
if (historialGuardado) {
  const mensajes = JSON.parse(historialGuardado);
  mensajes.forEach(({ remitente, texto }) => {
    mostrarMensaje(remitente, texto, false);
  });
} else {
  mostrarMensaje(
    "Mapachito",
    `Hola, soy Mapachito y estoy acá para ayudarte. 
     Ingresá el nombre del producto que estás buscando o clickea la categoría que estás buscando:
     <div class="contenedor-categorias">
       <button class="categoria-boton" data-categoria="harinas">Harinas</button>
       <button class="categoria-boton" data-categoria="semillas">Semillas</button>
       <button class="categoria-boton" data-categoria="especias">Especias</button>
     </div>`,
    false
  );
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const consulta = entradaUsuario.value.toLowerCase().trim();
  if (!consulta) return;

  if (!cargaCompleta) {
    mostrarEscribiendo();
    setTimeout(() => {
      eliminarEscribiendo();
      mostrarMensaje("Mapachito", "⏳ Estoy cargando los productos, por favor esperá un momento...", true);
    }, 1000);
    return;
  }

  mostrarMensaje("usuario", consulta);

  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias];
  const productoExacto = baseDeDatos.find(p => consulta === p.nombre.toLowerCase());

  if (productoExacto) {
    mostrarEscribiendo();
    setTimeout(() => {
      eliminarEscribiendo();
      mostrarProducto(productoExacto);
    }, 1000);
  } else {
    const categoriaBuscada = baseDeDatos.filter(p => p.categoria === consulta);

    if (categoriaBuscada.length > 0) {
      mostrarEscribiendo();
      setTimeout(() => {
        eliminarEscribiendo();
        mostrarMensaje("Mapachito", `Productos en la categoría "${consulta}":`, true);
        categoriaBuscada.forEach((p, i) => {
          setTimeout(() => mostrarProducto(p), 700 * (i + 1));
        });
      }, 1000);
    } else {
      const productosRelacionados = baseDeDatos.filter(p =>
        p.palabrasClave.some(palabra => palabra.toLowerCase().includes(consulta))

      );

      if (productosRelacionados.length > 0) {
        mostrarEscribiendo();
        setTimeout(() => {
          eliminarEscribiendo();
          mostrarMensaje("Mapachito", "Te recomiendo estos productos relacionados:", true);
          productosRelacionados.forEach((p, i) => {
            setTimeout(() => mostrarProducto(p), 700 * (i + 1));
          });
        }, 1000);
      } else {
        mostrarEscribiendo();
        setTimeout(() => {
          eliminarEscribiendo();
          mostrarMensaje("Mapachito", "Lo siento, no encontré ningún producto relacionado con tu consulta.", true);
        }, 1000);
      }
    }
  }

  entradaUsuario.value = "";
});

//Funcion donde debo agregar las "categorias" para que se vean en el chat
function mostrarProducto(prod) {
  const respuesta = `
    <strong>${prod.nombre.toUpperCase()}</strong><br>
    📝 ${prod.descripcion}<br>
    ✅ Beneficios: ${prod.beneficios}<br>
    🍽️ Usos: ${prod.usos}<br>
    💲 Precio: $${Number(prod.precio).toFixed(2)}<br>
    🆔 ID: ${prod.id}
  `;

  setTimeout(() => {
    mostrarMensaje("Mapachito", respuesta);
  }, 700);
}

function mostrarMensaje(remitente, texto, guardar = true, delay = 0) {
  setTimeout(() => {
    const mensaje = document.createElement("p");
    mensaje.classList.add(remitente);
    mensaje.innerHTML = `<span class="${remitente}">${remitente === "usuario" ? "👤 Vos" : "🦝 Mapachito"}:</span> ${texto}`;
    chat.appendChild(mensaje);
    chat.scrollTop = chat.scrollHeight;

    if (guardar) {
      guardarMensajeEnLocalStorage(remitente, texto);
    }

    mensaje.querySelectorAll(".categoria-boton").forEach(boton => {
      boton.addEventListener("click", () => {
        const categoria = boton.getAttribute("data-categoria");
        mostrarProductosPorCategoria(categoria);
      });
    });
  }, delay || 200);
}

function mostrarProductosPorCategoria(categoria) {
  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias];
  const productos = baseDeDatos.filter(p => p.categoria === categoria);

  if (productos.length > 0) {
    mostrarEscribiendo();
    setTimeout(() => {
      eliminarEscribiendo();
      mostrarMensaje("Mapachito", `Estos son los productos en la categoría "${categoria}":`);
      productos.forEach(p => mostrarProducto(p));
    }, 1000);
  } else {
    mostrarMensaje("Mapachito", `No encontré productos para la categoría "${categoria}".`);
  }
}

function guardarMensajeEnLocalStorage(remitente, texto) {
  let historial = localStorage.getItem("chatHistorial");
  historial = historial ? JSON.parse(historial) : [];
  historial.push({ remitente, texto });
  localStorage.setItem("chatHistorial", JSON.stringify(historial));
}

const botonBorrarHistorial = document.getElementById("borrarHistorial");

botonBorrarHistorial.addEventListener("click", function () {
  Swal.fire({
    title: '🗑️ ¿Borrar todo?',
    html: '<strong>Se eliminará el historial del chat.</strong><br>Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: 'Cancelar',
    background: '#fffbe6',
    color: '#1f1f1f',
    iconColor: '#e6b800',
    confirmButtonColor: '#e6b800',
    cancelButtonColor: '#999',
    customClass: {
      popup: 'swal2-rounded',
      confirmButton: 'swal2-confirm-custom',
      cancelButton: 'swal2-cancel-custom'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("chatHistorial");
      chat.innerHTML = "";
      console.clear();

      Swal.fire({
        title: '✅ ¡Listo!',
        text: 'El historial fue eliminado.',
        icon: 'success',
        background: '#fffbe6',
        color: '#1f1f1f',
        confirmButtonColor: '#e6b800',
        iconColor: '#70c070'
      }).then(() => {
        // Mensaje de bienvenida con categorías
        mostrarMensaje(
          "Mapachito",
          `¡Hola de nuevo! Soy Mapachito y estoy acá para ayudarte. 
           Ingresá el nombre del producto que estás buscando o clickea la categoría que te interese:
           <div class="contenedor-categorias">
             <button class="categoria-boton" data-categoria="harinas">Harinas</button>
             <button class="categoria-boton" data-categoria="semillas">Semillas</button>
             <button class="categoria-boton" data-categoria="especias">Especias</button>
           </div>`,
          false
        );
      });
    }
  });
});


// FUNCIONES AGREGADAS para “escribiendo...”
function mostrarEscribiendo() {
  const escribiendo = document.createElement("p");
  escribiendo.classList.add("mapachito", "mensaje-escribiendo");
  escribiendo.id = "mapachito-escribiendo";
  escribiendo.innerHTML = `<span class="mapachito">🦝 Mapachito:</span> escribiendo...`;
  chat.appendChild(escribiendo);
  chat.scrollTop = chat.scrollHeight;
}

function eliminarEscribiendo() {
  const escribiendo = document.getElementById("mapachito-escribiendo");
  if (escribiendo) {
    escribiendo.remove();
  }
}
