// *****************************************************
//                ARRAYS GLOBALES
// *****************************************************
let productosHarinas = [];
let productosSemillas = [];
let productosEspecias = [];
let productosCondimentos = [];

let cargaCompleta = false;

// *****************************************************
//        FUNCIONES PARA CARGAR JSON DE PRODUCTOS
// *****************************************************
async function cargarProductos(ruta, destino) {
  try {
    const respuesta = await fetch(ruta);
    destino.splice(0, destino.length, ...(await respuesta.json()));
  } catch (error) {
    console.error(`Error al cargar ${ruta}:`, error);
    Swal.fire("Error", `No se pudieron cargar los productos de ${ruta}`, "error");
  }
}

async function inicializarProductos() {
  await Promise.all([
    cargarProductos('./data/harinas.json', productosHarinas),
    cargarProductos('./data/semillas.json', productosSemillas),
    cargarProductos('./data/especias.json', productosEspecias),
    cargarProductos('./data/condimentos.json', productosCondimentos)
  ]);
  cargaCompleta = true;
  entradaUsuario.disabled = false;
}
inicializarProductos();

// *****************************************************
//              VARIABLES DEL DOM
// *****************************************************
const formulario = document.getElementById("formulario");
const entradaUsuario = document.getElementById("entradaUsuario");
const chat = document.getElementById("chat");

// *****************************************************
//    CARGAR HISTORIAL GUARDADO EN LOCALSTORAGE
// *****************************************************
const historialGuardado = localStorage.getItem("chatHistorial");
if (historialGuardado) {
  JSON.parse(historialGuardado).forEach(({ remitente, texto }) => {
    mostrarMensaje(remitente, texto, false);
  });
} else {
  mensajeBienvenida();
}

function mensajeBienvenida() {
  mostrarMensaje(
    "Mapachito",
    `Hola, soy Mapachito y estoy acá para ayudarte. 
     Ingresá el nombre del producto o elegí una categoría:
     <div class="contenedor-categorias">
       <button class="categoria-boton" data-categoria="harinas">Harinas</button>
       <button class="categoria-boton" data-categoria="semillas">Semillas</button>
       <button class="categoria-boton" data-categoria="especias">Especias</button>
       <button class="categoria-boton" data-categoria="condimentos">Condimentos</button>
     </div>`,
    false
  );
}

// *****************************************************
//    FUNCIONES AUXILIARES
// *****************************************************
function normalizarTexto(texto) {
  return texto.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// Distancia Levenshtein simplificada
function distanciaLevenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => []);
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const costo = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + costo
      );
    }
  }
  return dp[a.length][b.length];
}

// Búsqueda difusa simple
function coincidenciaDifusa(palabra, lista) {
  const maxDistancia = 2; // tolerancia de errores
  let resultados = [];
  lista.forEach(prod => {
    const nombreNorm = normalizarTexto(prod.nombre);
    if (distanciaLevenshtein(palabra, nombreNorm) <= maxDistancia) {
      resultados.push(prod);
    }
  });
  return resultados;
}

// *****************************************************
//    FUNCIÓN PARA RENDERIZAR PRODUCTOS
// *****************************************************
function renderizarProductos(productos, mensajeIntro) {
  if (!productos.length) {
    mostrarMensaje("Mapachito", "No encontré resultados para tu búsqueda.");
    return;
  }
  mostrarEscribiendo();
  setTimeout(() => {
    eliminarEscribiendo();
    if (mensajeIntro) mostrarMensaje("Mapachito", mensajeIntro);
    productos.forEach((p, i) => setTimeout(() => mostrarProducto(p), 700 * (i + 1)));
  }, 1000);
}

function mostrarProducto(prod) {
  const precio = Number(prod.precio);
  const precioFormateado = isNaN(precio) ? "No disponible" : `$${precio.toFixed(2)}`;
  const respuesta = `
    <strong>${prod.nombre.toUpperCase()}</strong><br>
    📝 ${prod.descripcion}<br>
    ✅ Beneficios: ${prod.beneficios}<br>
    🍽️ Usos: ${prod.usos}<br>
    💲 Precio: ${precioFormateado}<br>
    🆔 ID: ${prod.id}
  `;
  mostrarMensaje("Mapachito", respuesta);
}

// *****************************************************
//          EVENTO PRINCIPAL DEL FORM
// *****************************************************
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const consulta = normalizarTexto(entradaUsuario.value);
  if (!consulta) return;

  const saludos = ["hola", "holaa", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey", "ola", "hello"];
  if (saludos.includes(consulta)) {
    mensajeBienvenida();
    entradaUsuario.value = "";
    return;
  }

  if (!cargaCompleta) {
    mostrarEscribiendo();
    setTimeout(() => {
      eliminarEscribiendo();
      mostrarMensaje("Mapachito", "⏳ Cargando productos, por favor esperá...");
    }, 800);
    return;
  }

  mostrarMensaje("usuario", consulta);

  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias, ...productosCondimentos];
  const partesConsulta = consulta.split(/,| y | e /i).map(normalizarTexto).filter(Boolean);

  let productosEncontrados = [];

  // 1️⃣ Coincidencias normales (filter + includes)
  partesConsulta.forEach(parte => {
    const coincidencias = baseDeDatos.filter(p =>
      normalizarTexto(p.nombre).includes(parte) ||
      (p.palabrasClave && p.palabrasClave.some(palabra => normalizarTexto(palabra).includes(parte)))
    );
    coincidencias.forEach(c => {
      if (!productosEncontrados.includes(c)) productosEncontrados.push(c);
    });
  });

  // 2️⃣ Si no encontró nada, buscar con coincidencia difusa
  if (!productosEncontrados.length) {
    partesConsulta.forEach(parte => {
      const difusos = coincidenciaDifusa(parte, baseDeDatos);
      difusos.forEach(d => {
        if (!productosEncontrados.includes(d)) productosEncontrados.push(d);
      });
    });
  }

  // Mostrar resultados
  if (productosEncontrados.length) {
    renderizarProductos(productosEncontrados, productosEncontrados.length > 1 ? "🔎 Encontré los siguientes productos:" : "");
  } else {
    mostrarMensaje("Mapachito", "No encontré productos relacionados, probá con otra palabra.");
  }

  entradaUsuario.value = "";
});

// *****************************************************
//          FUNCIÓN PARA MOSTRAR CATEGORÍAS
// *****************************************************
document.addEventListener("click", e => {
  if (e.target.classList.contains("categoria-boton")) {
    const categoria = e.target.dataset.categoria;
    const productos = {
      harinas: productosHarinas,
      semillas: productosSemillas,
      especias: productosEspecias,
      condimentos: productosCondimentos
    }[categoria] || [];
    renderizarProductos(productos, `Estos son los productos en la categoría "${categoria}":`);
  }
});

// *****************************************************
//      LOCALSTORAGE - HISTORIAL DEL CHAT
// *****************************************************
function mostrarMensaje(remitente, texto, guardar = true) {
  const mensaje = document.createElement("p");
  mensaje.classList.add(remitente);
  mensaje.innerHTML = `<span class="${remitente}">${remitente === "usuario" ? "👤 Vos" : "🦝 Mapachito"}:</span> ${texto}`;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight;

  if (guardar) guardarMensaje(remitente, texto);

  // Escuchar clicks en botones de categoría
  mensaje.querySelectorAll(".categoria-boton").forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");
      const productos = {
        harinas: productosHarinas,
        semillas: productosSemillas,
        especias: productosEspecias,
        condimentos: productosCondimentos
      }[categoria] || [];
      renderizarProductos(productos, `Estos son los productos en la categoría "${categoria}":`);
    });
  });
}

function guardarMensaje(remitente, texto) {
  let historial = JSON.parse(localStorage.getItem("chatHistorial")) || [];
  historial.push({ remitente, texto });
  localStorage.setItem("chatHistorial", JSON.stringify(historial));
}

// *****************************************************
//      BORRAR HISTORIAL
// *****************************************************
document.getElementById("borrarHistorial").addEventListener("click", () => {
  Swal.fire({
    title: '🗑️ ¿Borrar todo?',
    html: '<strong>Se eliminará el historial del chat.</strong><br>Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, borrar',
    cancelButtonText: 'Cancelar',
    background: '#fffbe6',   // Fondo amarillo claro
    color: '#1f1f1f',        // Texto oscuro
    iconColor: '#e6b800',    // Icono amarillo
    confirmButtonColor: '#e6b800', // Botón confirmar amarillo
    cancelButtonColor: '#999',     // Botón cancelar gris
    customClass: {
      popup: 'swal2-rounded',
      confirmButton: 'swal2-confirm-custom',
      cancelButton: 'swal2-cancel-custom'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("chatHistorial");
      chat.innerHTML = "";

      Swal.fire({
        title: '✅ ¡Listo!',
        text: 'El historial fue eliminado.',
        icon: 'success',
        background: '#fffbe6',   // Fondo amarillo claro
        color: '#1f1f1f',        // Texto oscuro
        confirmButtonColor: '#e6b800', // Botón confirmar amarillo
        iconColor: '#70c070'     // Icono verde
      }).then(() => {
        mensajeBienvenida();
      });
    }
  });
});

// *****************************************************
//      FUNCIONES PARA "MAPACHITO ESCRIBIENDO"
// *****************************************************
function mostrarEscribiendo() {
  if (!document.getElementById("mapachito-escribiendo")) {
    const escribiendo = document.createElement("p");
    escribiendo.classList.add("mapachito", "mensaje-escribiendo");
    escribiendo.id = "mapachito-escribiendo";
    escribiendo.innerHTML = `<span class="mapachito">🦝 Mapachito:</span> escribiendo...`;
    chat.appendChild(escribiendo);
    chat.scrollTop = chat.scrollHeight;
  }
}
function eliminarEscribiendo() {
  const escribiendo = document.getElementById("mapachito-escribiendo");
  if (escribiendo) escribiendo.remove();
}


// Botón hamburguesa
const btnMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
  });

  // Cerrar menú al hacer clic en un enlace
  menu.querySelectorAll("a").forEach(enlace => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("mostrar");
    });
  });
}


