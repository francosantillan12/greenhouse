const contenedorSemillas = document.querySelector(".contenedor-semillas");

// Función para crear cada card de producto
function crearCardSemilla(producto) {
  const card = document.createElement("article");
  card.classList.add("card-semilla");

  card.innerHTML = `
    <img src="${producto.imagen || 'img/default-semilla.png'}" alt="${producto.nombre}" class="img-semilla" />
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
    <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
  `;

  return card;
}

// Fetch para cargar semillas desde JSON
async function cargarSemillas() {
  try {
    const respuesta = await fetch("../data/semillas.json");
    if (!respuesta.ok) throw new Error("No se pudo cargar semillas.json");

    const semillas = await respuesta.json();

    if (!Array.isArray(semillas)) throw new Error("Formato JSON inválido");

    semillas.forEach((producto) => {
      const card = crearCardSemilla(producto);
      contenedorSemillas.appendChild(card);
    });

    // Agregar evento a todos los botones después de renderizar
    document.querySelectorAll(".btn-agregar").forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const idProducto = parseInt(e.target.dataset.id);
        agregarAlCarrito(idProducto);
      });
    });
  } catch (error) {
    console.error("Error al cargar semillas:", error);
    if (typeof Swal !== "undefined") {
      Swal.fire("Error", "No se pudieron cargar las semillas", "error");
    } else {
      alert("No se pudieron cargar las semillas");
    }
  }
}

// Función básica para agregar al carrito (por ahora solo console.log)
function agregarAlCarrito(idProducto) {
  console.log("Agregar al carrito producto con ID:", idProducto);
  // Acá puedo agregar lógica para guardar en localStorage o actualizar carrito visual
}

cargarSemillas();


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
