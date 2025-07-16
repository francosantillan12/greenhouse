// arrays globales 
let productosHarinas = [];
let productosSemillas = [];
let productosEspecias = [];

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
}

// Ejecutamos la carga al principio, sin bloquear la carga visual
inicializarProductos();


// Función para obtener el próximo ID unico global
function obtenerProximoId() {
  const todosProductos = [...productosHarinas, ...productosSemillas, ...productosEspecias];
  if (todosProductos.length === 0) return 0;
  return Math.max(...todosProductos.map(p => p.id)) + 1;
}

// Ejemplo: función para agregar nuevo producto automáticamente asignando ID único global
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

// Objeto para acceder a cada array según su categoría
const basePorCategoria = {
  harinas: productosHarinas,
  semillas: productosSemillas,
  especias: productosEspecias,
};

// Cargar mensajes previos desde localStorage al iniciar
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

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  const consulta = entradaUsuario.value.toLowerCase().trim();
  if (!consulta) return;

  mostrarMensaje("usuario", consulta);

  // IMPORTANTE: Si los arrays están vacíos (porque la carga no terminó), no bloqueamos ni mostramos nada raro.
  // Simplemente usamos los arrays (que se llenarán luego si no están aún).

  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias];
  const productoExacto = baseDeDatos.find(p => consulta === p.nombre.toLowerCase());

  if (productoExacto) {
    // Mostrar producto con delay para simular "pensamiento"
    mostrarProducto(productoExacto);
  } else {
    const categoriaBuscada = baseDeDatos.filter(p => p.categoria === consulta);

    if (categoriaBuscada.length > 0) {
      mostrarMensaje("Mapachito", `Productos en la categoría "${consulta}":`, true, 500);
      categoriaBuscada.forEach((p, i) => {
        // Muestra cada producto con un pequeño delay escalonado para mejor efecto
        setTimeout(() => mostrarProducto(p), 700 * (i + 1));
      });
    } else {
      const productosRelacionados = baseDeDatos.filter(p =>
        p.palabrasClave.some(palabra => palabra.toLowerCase() === consulta)
      );

      if (productosRelacionados.length > 0) {
        mostrarMensaje("Mapachito", "Te recomiendo estos productos relacionados:", true, 500);
        productosRelacionados.forEach((p, i) => {
          setTimeout(() => mostrarProducto(p), 700 * (i + 1));
        });
      } else {
        mostrarMensaje("Mapachito", "Lo siento, no encontré ningún producto relacionado con tu consulta.", true, 500);
      }
    }
  }

  entradaUsuario.value = "";
});


function mostrarProducto(prod) {
  const respuesta = `
    <strong>${prod.nombre.toUpperCase()}</strong><br>
    📝 ${prod.descripcion}<br>
    ✅ Beneficios: ${prod.beneficios}<br>
    🍽️ Usos: ${prod.usos}<br>
    🆔 ID: ${prod.id}
  `;

  // Simula asincronismo con setTimeout
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

// Mostrar todos los productos de una categoría
function mostrarProductosPorCategoria(categoria) {
  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias];
  const productos = baseDeDatos.filter(p => p.categoria === categoria);

  if (productos.length > 0) {
    mostrarMensaje("Mapachito", `Estos son los productos en la categoría "${categoria}":`);
    productos.forEach(p => mostrarProducto(p));
  } else {
    mostrarMensaje("Mapachito", `No encontré productos para la categoría "${categoria}".`);
  }
}

// Guardar mensaje en localStorage
function guardarMensajeEnLocalStorage(remitente, texto) {
  let historial = localStorage.getItem("chatHistorial");
  historial = historial ? JSON.parse(historial) : [];
  historial.push({ remitente, texto });
  localStorage.setItem("chatHistorial", JSON.stringify(historial));
}

// Botón borrar historial
const botonBorrarHistorial = document.getElementById("borrarHistorial");

botonBorrarHistorial.addEventListener("click", function () {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¡Esto borrará todo el historial del chat!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("chatHistorial");
      chat.innerHTML = "";
      console.clear();

      Swal.fire(
        '¡Borrado!',
        'El historial del chat fue eliminado.',
        'success'
      );
    }
  });
});
