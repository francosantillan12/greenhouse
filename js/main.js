
//*******************HARINAS**************** */
const productosHarinas = [
  {
    id: 0,
    nombre: "harina integral",
    categoria: "harinas",
    descripcion: "Harina obtenida del grano entero del trigo, sin refinar, que conserva el germen y el salvado.",
    beneficios: "Alta en fibra, ayuda a regular la digestión, controlar el azúcar en sangre y mejorar el tránsito intestinal.",
    usos: "Ideal para panes, bizcochuelos, pizzas, tartas y masas saludables.",
    palabrasClave: ["fibra", "tránsito intestinal", "pan integral", "digestión", "harina saludable"]
  },
  {
    id: 1,
    nombre: "harina de avena",
    categoria: "harinas",
    descripcion: "Harina que se obtiene al moler los granos de avena. Natural, versátil y sin refinar si es integral.",
    beneficios: "Bajo índice glucémico, reduce colesterol, mejora la digestión, aporta saciedad y energía sostenida.",
    usos: "Ideal para pancakes, muffins, galletas, tortas, porridges y como espesante en sopas o licuados.",
    palabrasClave: ["colesterol", "saciedad", "fibra", "avena", "desayuno saludable"]
  },
  {
    id: 2,
    nombre: "harina de chía",
    categoria: "harinas",
    descripcion: "Harina obtenida a partir de semillas de chía molidas, muy rica en nutrientes esenciales.",
    beneficios: "Fuente de omega-3, antioxidantes, fibra y proteínas. Mejora la salud cardiovascular y digestiva.",
    usos: "Se usa en panes, muffins, barritas energéticas, batidos y como sustituto parcial de otras harinas.",
    palabrasClave: ["chia" , "omega 3", "fibra", "corazón", "harina de semillas", "digestión"]
  },
  {
    id: 3,
    nombre: "harina de almendras con piel",
    categoria: "harinas",
    descripcion: "Harina hecha con almendras molidas sin pelar. Más oscura, con más fibra y sabor intenso.",
    beneficios: "Rica en grasas saludables, proteínas, vitamina E y fibra. Ayuda a la saciedad.",
    usos: "Repostería saludable, panificados keto, tortas y galletitas sin gluten.",
    palabrasClave: ["almendras", "vitamina E", "fibra", "sin gluten", "keto"]
  },
  {
    id: 4,
    nombre: "harina de almendras sin piel",
    categoria: "harinas",
    descripcion: "Harina obtenida de almendras blanqueadas (sin piel), de textura más fina y suave.",
    beneficios: "Menor contenido de fibra que la versión con piel, pero más neutra en sabor. Rica en grasas buenas.",
    usos: "Se usa en macarons, tortas finas, bizcochos, panificados bajos en carbohidratos.",
    palabrasClave: ["macarons", "harina suave", "sin gluten", "almendras sin piel", "low carb"]
  },
  {
    id: 5,
    nombre: "harina de garbanzos",
    categoria: "harinas",
    descripcion: "Harina rica en proteínas vegetales, elaborada a partir de garbanzos secos molidos.",
    beneficios: "Alto contenido de fibra, proteínas y minerales. Ideal para dietas veganas y sin gluten.",
    usos: "Se usa en fainá, tortillas, croquetas, masas saladas y empanizados sin TACC.",
    palabrasClave: ["sin TACC", "vegano", "proteína vegetal", "fainá", "sin gluten"]
  },
  {
    id: 6,
    nombre: "harina de castañas de cajú",
    categoria: "harinas",
    descripcion: "Harina elaborada a partir del molido fino de castañas de cajú. Dulce, suave y sin gluten.",
    beneficios: "Aporta grasas saludables, proteínas, magnesio y zinc. Buen sustituto de harinas refinadas.",
    usos: "Ideal para repostería, galletas, budines y como base de tartas saludables.",
    palabrasClave: ["sin gluten", "reposteria saludable", "grasas buenas", "magnesio", "cajú"]
  },
  {
    id: 7,
    nombre: "harina de maiz",
    categoria: "harinas",
    descripcion: "Harina sin gluten derivada del grano seco de maíz. Muy usada en la cocina latinoamericana.",
    beneficios: "Aporta energía, es rica en carbohidratos complejos y no contiene gluten.",
    usos: "Ideal para polenta, arepas, panes de maíz, tortillas y repostería sin gluten.",
    palabrasClave: ["maiz","maíz", "polenta", "sin gluten", "energía", "tortillas"]
  },
  {
    id: 8,
    nombre: "harina de soja",
    categoria: "harinas",
    descripcion: "Harina proteica y densa hecha de granos de soja molidos. Alta en nutrientes.",
    beneficios: "Rica en proteínas, isoflavonas y calcio. Ayuda a mantener la masa muscular y hormonal.",
    usos: "Se emplea en panes, galletitas, mezclas proteicas o para enriquecer masas tradicionales.",
    palabrasClave: ["proteína", "soja", "hormonas", "calcio", "harina proteica"]
  },

    {
    id: 9,
    nombre: "semolin de trigo",
    categoria: "harinas",
    descripcion: "Harina gruesa hecha a partir del endospermo del trigo duro, con textura arenosa y color amarillento.",
    beneficios: "Buena fuente de proteínas, hierro y vitaminas del grupo B. Aporta energía sostenida.",
    usos: "Ideal para preparar pastas caseras, ñoquis, sopas, postres como la polenta dulce o como base para panes rústicos.",
    palabrasClave: ["semolin","semolín","trigo","sémola","trigo duro", "pastas", "energía", "harina gruesa", "vitaminas B"]}
];


//*******************SEMILLAS**************** */
const productosSemillas = [
  {
    id: 10,
    nombre: "semillas de chía",
    categoria: "semillas",
    descripcion: "Las semillas de chía provienen de la planta Salvia hispanica. Son pequeñas, oscuras y muy nutritivas.",
    beneficios: "Ricas en omega-3, fibra, antioxidantes, calcio, magnesio y proteínas vegetales.",
    usos: "Se consumen en puddings, yogures, licuados, jugos, ensaladas o panificados.",
    palabrasClave: ["semillas de chia","chia", "omega 3", "fibra", "saciedad", "antioxidantes", "veganos", "superalimento"]
  },
  {
    id: 11,
    nombre: "semillas de lino",
    categoria: "semillas",
    descripcion: "Las semillas de lino (linaza) provienen de la planta Linum usitatissimum. Son pequeñas, marrones o doradas.",
    beneficios: "Muy ricas en omega-3 vegetal, fibra soluble e insoluble, antioxidantes y lignanos.",
    usos: "Molidas en yogures, panes, galletas, batidos o como reemplazo del huevo en recetas veganas.",
    palabrasClave: ["lino", "linaza", "omega 3", "fibra", "digestión", "estrés oxidativo", "hormonas"]
  },
  {
    id: 12, // ID único, sigue la numeración que estés usando
    nombre: "semillas de amapola",
    categoria: "semillas",
    descripcion: "Pequeñas semillas negras obtenidas de la planta de amapola, con sabor suave y textura crujiente.",
    beneficios: "Ricas en calcio, hierro, magnesio y fibra. Ayudan a mejorar la digestión y fortalecen los huesos.",
    usos: "Se usan en panes, galletas, ensaladas, y como topping en yogures y postres.",
    palabrasClave: ["amapola", "calcio", "hierro", "magnesio", "fibra", "digestión", "huesos"]
  }



];


//*******************ESPECIAS**************** */
const productosEspecias = [
    {
    id: 13,
    nombre: "té verde matcha",
    categoria: "especias",
    descripcion: "Polvo fino de hojas de té verde molidas, con sabor intenso y un color verde vibrante.",
    beneficios: "Alto en antioxidantes, mejora el metabolismo, ayuda a la concentración y a la energía sostenida.",
    usos: "Se consume en infusiones, smoothies, postres y como ingrediente en recetas saludables.",
    palabrasClave: ["matcha", "antioxidantes", "metabolismo", "energía", "infusión"]
  },
  {
    id: 14,
    nombre: "té negro earl grey",
    categoria: "especias",
    descripcion: "Té negro aromatizado con aceite de bergamota, de sabor cítrico y refrescante.",
    beneficios: "Ayuda a la digestión, es antioxidante y aporta un sabor único y refrescante.",
    usos: "Se consume solo o con leche, ideal para la tarde y momentos de relax.",
    palabrasClave: ["earl grey", "bergamota", "digestión", "antioxidantes", "infusión"]
  },
  {
    id: 15, // actualizá este ID según el último que tengas
    nombre: "hibiscus en flor",
    categoria: "especias",
    descripcion: "Flores secas de hibiscus sabdariffa, conocidas por su sabor ácido y color rojo intenso. Se usan comúnmente en infusiones naturales.",
    beneficios: "Rico en antioxidantes, ayuda a reducir la presión arterial, mejora la salud hepática y apoya la digestión.",
    usos: "Se prepara como infusión caliente o fría, sola o mezclada con otras hierbas. También se puede usar en mermeladas, repostería o bebidas fermentadas como kombucha.",
    palabrasClave: ["hibiscus", "jamaica", "flor de hibisco", "antioxidantes", "presión arterial", "digestión", "infusión", "hierbas"]
}  
]


// Función para obtener el próximo ID único global
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

// Cargar mensajes previos desde localStorage al iniciar
const historialGuardado = localStorage.getItem("chatHistorial");
if (historialGuardado) {
  const mensajes = JSON.parse(historialGuardado);
  mensajes.forEach(({ remitente, texto }) => {
    mostrarMensaje(remitente, texto, false);
  });
}

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  const consulta = entradaUsuario.value.toLowerCase().trim();
  if (!consulta) return;

  mostrarMensaje("usuario", consulta);

  const baseDeDatos = [...productosHarinas, ...productosSemillas, ...productosEspecias];

  // Buscar producto con nombre exacto
  const productoExacto = baseDeDatos.find(p => consulta === p.nombre.toLowerCase());

  if (productoExacto) {
    // Si encontró nombre exacto, mostrar solo ese
    mostrarProducto(productoExacto);
  } else {
    // Si no hay nombre exacto, buscar categoría o productos relacionados (por palabra clave)
    const categoriaBuscada = baseDeDatos.filter(p => p.categoria === consulta);

    if (categoriaBuscada.length > 0) {
      mostrarMensaje("Mapachito", `Productos en la categoría "${consulta}":`);
      categoriaBuscada.forEach(p => mostrarProducto(p));
    } else {
      // Buscar productos relacionados por palabra clave, usando includes pero sobre palabras individuales
      const productosRelacionados = baseDeDatos.filter(p =>
        p.palabrasClave.some(palabra => palabra.toLowerCase() === consulta)
      );

      if (productosRelacionados.length > 0) {
        mostrarMensaje("Mapachito", "Te recomiendo estos productos relacionados:");
        productosRelacionados.forEach(p => mostrarProducto(p));
      } else {
        mostrarMensaje("Mapachito", "Lo siento, no encontré ningún producto relacionado con tu consulta.");
      }
    }
  }

  entradaUsuario.value = "";
});


// Función que muestra un producto
function mostrarProducto(prod) {
  const respuesta = `
    <strong>${prod.nombre.toUpperCase()}</strong><br>
    📝 ${prod.descripcion}<br>
    ✅ Beneficios: ${prod.beneficios}<br>
    🍽️ Usos: ${prod.usos}<br>
    🆔 ID: ${prod.id}
  `;
  mostrarMensaje("Mapachito", respuesta);
}

// Mostrar mensaje y guardar en localStorage
function mostrarMensaje(remitente, texto, guardar = true) {
  const mensaje = document.createElement("p");
  mensaje.classList.add(remitente);
  mensaje.innerHTML = `<span class="${remitente}">${remitente === "usuario" ? "👤 Vos" : "🦝 Mapachito"}:</span> ${texto}`;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight; // PARA QUE HAGA SCROLL HACIA ABAJO**/

  // Guardar en localStorage si corresponde
  if (guardar) {
    guardarMensajeEnLocalStorage(remitente, texto);
  }
}

// Guardar mensaje en localStorage
function guardarMensajeEnLocalStorage(remitente, texto) {
  let historial = localStorage.getItem("chatHistorial");
  historial = historial ? JSON.parse(historial) : [];
  historial.push({ remitente, texto });
  localStorage.setItem("chatHistorial", JSON.stringify(historial));
}






