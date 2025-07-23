// *****************************************************
//                ARRAYS GLOBALES
// *****************************************************
let productosHarinas = [];
let productosSemillas = [];
let productosEspecias = [];
let productosCondimentos = [];

let cargaCompleta = false; // Controla la carga de productos

// *****************************************************
//        FUNCIONES PARA CARGAR JSON DE PRODUCTOS
// *****************************************************
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

async function cargarCondimentos() {
  try {
    const respuesta = await fetch('./data/condimentos.json'); 
    productosCondimentos = await respuesta.json();
  } catch (error) {
    console.error("Error al cargar los condimentos:", error);
    Swal.fire("Error", "No se pudieron cargar los condimentos", "error");
  }
}


// *****************************************************
//          INICIALIZAR TODOS LOS PRODUCTOS
// *****************************************************
async function inicializarProductos() {
  await Promise.all([cargarHarinas(), cargarSemillas(), cargarEspecias(), cargarCondimentos()]);
  cargaCompleta = true;
  entradaUsuario.disabled = false;
}

inicializarProductos();

// *****************************************************
//   FUNCIONES AUXILIARES PARA GESTIONAR PRODUCTOS
// *****************************************************
function obtenerProximoId() {
  const todosProductos = [...productosHarinas, ...productosSemillas, ...productosEspecias, ...productosCondimentos];
  if (todosProductos.length === 0) return 0;
  return Math.max(...todosProductos.map(p => p.id)) + 1;
}

function agregarProducto(nuevoProducto, categoriaArray) {
  const nuevoId = obtenerProximoId();
  nuevoProducto.id = nuevoId;
  categoriaArray.push(nuevoProducto);
  return nuevoProducto;
}

// *****************************************************
//              VARIABLES DEL DOM
// *****************************************************
const formulario = document.getElementById("formulario");
const entradaUsuario = document.getElementById("entradaUsuario");
const chat = document.getElementById("chat");

const basePorCategoria = {
  harinas: productosHarinas,
  semillas: productosSemillas,
  especias: productosEspecias,
  condimentos: productosCondimentos,
};

// *****************************************************
//    CARGAR HISTORIAL GUARDADO EN LOCALSTORAGE
// *****************************************************
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

// *****************************************************
//    FUNCIONES PARA NORMALIZAR Y DETECTAR ERRORES
// *****************************************************
// NUEVO: Esta función elimina acentos y pasa todo a minúsculas
function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// NUEVO: Calcula la distancia de Levenshtein (para detectar palabras parecidas)
function calcularDistancia(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + costo
      );
    }
  }
  return matrix[a.length][b.length];
}

// NUEVO: Busca un producto con un nombre parecido
function buscarProductoSimilar(consulta, baseDeDatos) {
  const consultaNorm = normalizarTexto(consulta);
  let mejorCoincidencia = null;
  let menorDistancia = Infinity;

  baseDeDatos.forEach((producto) => {
    const nombreNorm = normalizarTexto(producto.nombre);
    const distancia = calcularDistancia(consultaNorm, nombreNorm);
    if (distancia < menorDistancia && distancia <= 3) { // hasta 3 cambios
      menorDistancia = distancia;
      mejorCoincidencia = producto;
    }
  });

  return mejorCoincidencia;
}

// *****************************************************
//             EVENTO PRINCIPAL DEL FORM
// *****************************************************
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

  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias, ...productosCondimentos];

  // --- NUEVO: Dividir en partes por coma o 'y'
  const partesConsulta = consulta
    .split(/,| y | e /i)
    .map(t => normalizarTexto(t))
    .filter(Boolean);

  let productosEncontrados = [];

  // Buscar cada parte por coincidencia exacta o parecida
  partesConsulta.forEach(parte => {
    let producto = baseDeDatos.find(p => normalizarTexto(p.nombre) === parte);
    if (!producto) {
      producto = buscarProductoSimilar(parte, baseDeDatos);
    }
    if (producto && !productosEncontrados.includes(producto)) {
      productosEncontrados.push(producto);
    }
  });

  if (productosEncontrados.length > 0) {
    mostrarEscribiendo();
    setTimeout(() => {
      eliminarEscribiendo();
      if (productosEncontrados.length > 1) {
        mostrarMensaje("Mapachito", "🔎 Encontré los siguientes productos relacionados:", true);
      }
      productosEncontrados.forEach((p, i) => {
        setTimeout(() => mostrarProducto(p), 700 * (i + 1));
      });
    }, 1000);
  } else {
    // Si no se encontraron productos, buscar por palabras clave
    const relacionados = baseDeDatos.filter(p =>
      p.palabrasClave.some(palabra =>
        normalizarTexto(palabra).includes(normalizarTexto(consulta))
      )
    );

    if (relacionados.length > 0) {
      mostrarEscribiendo();
      setTimeout(() => {
        eliminarEscribiendo();
        mostrarMensaje("Mapachito", "Te recomiendo estos productos relacionados:", true);
        relacionados.forEach((p, i) => {
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

  entradaUsuario.value = "";
});


// *****************************************************
//          FUNCIONES DE INTERFAZ DEL CHAT
// *****************************************************
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
  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias, ...productosCondimentos];
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

// *****************************************************
//      LOCALSTORAGE - GUARDAR HISTORIAL DEL CHAT
// *****************************************************
function guardarMensajeEnLocalStorage(remitente, texto) {
  let historial = localStorage.getItem("chatHistorial");
  historial = historial ? JSON.parse(historial) : [];
  historial.push({ remitente, texto });
  localStorage.setItem("chatHistorial", JSON.stringify(historial));
}

// *****************************************************
//        BORRAR HISTORIAL CON SWEETALERT
// *****************************************************
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
        mostrarMensaje(
          "Mapachito",
          `¡Hola de nuevo! Soy Mapachito y estoy acá para ayudarte. 
           Ingresá el nombre del producto que estás buscando o clickea la categoría que te interese:
           <div class="contenedor-categorias">
             <button class="categoria-boton" data-categoria="harinas">Harinas</button>
             <button class="categoria-boton" data-categoria="semillas">Semillas</button>
             <button class="categoria-boton" data-categoria="especias">Especias</button>
             <button class="categoria-boton" data-categoria="condimentos">Condimentos</button>
             </div>`,
          false
        );
      });
    }
  });
});

// *****************************************************
//       FUNCIONES PARA "MAPACHITO ESCRIBIENDO"
// *****************************************************
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
