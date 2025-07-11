
const productosHarinas = [
  {
    nombre: "harina integral",
    descripcion: "Harina obtenida del grano entero del trigo, sin refinar, que conserva el germen y el salvado.",
    beneficios: "Alta en fibra, ayuda a regular la digestión, controlar el azúcar en sangre y mejorar el tránsito intestinal.",
    usos: "Ideal para panes, bizcochuelos, pizzas, tartas y masas saludables.",
    palabrasClave: ["fibra", "tránsito intestinal", "pan integral", "digestión", "harina saludable"]
  },
  {
    nombre: "harina de avena",
    descripcion: "Harina que se obtiene al moler los granos de avena. Natural, versátil y sin refinar si es integral.",
    beneficios: "Bajo índice glucémico, reduce colesterol, mejora la digestión, aporta saciedad y energía sostenida.",
    usos: "Ideal para pancakes, muffins, galletas, tortas, porridges y como espesante en sopas o licuados.",
    palabrasClave: ["colesterol", "saciedad", "fibra", "avena", "desayuno saludable"]
  },
  {
    nombre: "harina de chía",
    descripcion: "Harina obtenida a partir de semillas de chía molidas, muy rica en nutrientes esenciales.",
    beneficios: "Fuente de omega-3, antioxidantes, fibra y proteínas. Mejora la salud cardiovascular y digestiva.",
    usos: "Se usa en panes, muffins, barritas energéticas, batidos y como sustituto parcial de otras harinas.",
    palabrasClave: ["omega 3", "fibra", "corazón", "harina de semillas", "digestión"]
  },
  {
    nombre: "harina de castañas de cajú",
    descripcion: "Harina elaborada a partir del molido fino de castañas de cajú. Dulce, suave y sin gluten.",
    beneficios: "Aporta grasas saludables, proteínas, magnesio y zinc. Buen sustituto de harinas refinadas.",
    usos: "Ideal para repostería, galletas, budines y como base de tartas saludables.",
    palabrasClave: ["sin gluten", "reposteria saludable", "grasas buenas", "magnesio", "cajú"]
  },
  {
    nombre: "harina de garbanzos",
    descripcion: "Harina rica en proteínas vegetales, elaborada a partir de garbanzos secos molidos.",
    beneficios: "Alto contenido de fibra, proteínas y minerales. Ideal para dietas veganas y sin gluten.",
    usos: "Se usa en fainá, tortillas, croquetas, masas saladas y empanizados sin TACC.",
    palabrasClave: ["sin TACC", "vegano", "proteína vegetal", "fainá", "sin gluten"]
  },
  {
    nombre: "harina de soja",
    descripcion: "Harina proteica y densa hecha de granos de soja molidos. Alta en nutrientes.",
    beneficios: "Rica en proteínas, isoflavonas y calcio. Ayuda a mantener la masa muscular y hormonal.",
    usos: "Se emplea en panes, galletitas, mezclas proteicas o para enriquecer masas tradicionales.",
    palabrasClave: ["proteína", "soja", "hormonas", "calcio", "harina proteica"]
  },
  {
    nombre: "harina de maiz",
    descripcion: "Harina sin gluten derivada del grano seco de maíz. Muy usada en la cocina latinoamericana.",
    beneficios: "Aporta energía, es rica en carbohidratos complejos y no contiene gluten.",
    usos: "Ideal para polenta, arepas, panes de maíz, tortillas y repostería sin gluten.",
    palabrasClave: ["maíz", "polenta", "sin gluten", "energía", "tortillas"]
  },
  {
    nombre: "harina de almendras con piel",
    descripcion: "Harina hecha con almendras molidas sin pelar. Más oscura, con más fibra y sabor intenso.",
    beneficios: "Rica en grasas saludables, proteínas, vitamina E y fibra. Ayuda a la saciedad.",
    usos: "Repostería saludable, panificados keto, tortas y galletitas sin gluten.",
    palabrasClave: ["almendras", "vitamina E", "fibra", "sin gluten", "keto"]
  },
  {
    nombre: "harina de almendras sin piel",
    descripcion: "Harina obtenida de almendras blanqueadas (sin piel), de textura más fina y suave.",
    beneficios: "Menor contenido de fibra que la versión con piel, pero más neutra en sabor. Rica en grasas buenas.",
    usos: "Se usa en macarons, tortas finas, bizcochos, panificados bajos en carbohidratos.",
    palabrasClave: ["macarons", "harina suave", "sin gluten", "almendras sin piel", "low carb"]
  }
];

// Array vacío si no tenés semillas aún
const productosSemillas = [
    {
    nombre: "semillas de chía",
    descripcion: "Las semillas de chía provienen de la planta Salvia hispanica. Son pequeñas, oscuras y muy nutritivas. Al absorber agua, forman un gel que las vuelve ideales para preparaciones saludables.",
    beneficios: "Ricas en omega-3, fibra, antioxidantes, calcio, magnesio y proteínas vegetales. Ayudan a mejorar la digestión, controlar el colesterol y brindar saciedad.",
    usos: "Se consumen en puddings, yogures, licuados, jugos, ensaladas, panificados o como reemplazo del huevo en recetas veganas.",
    palabrasClave: ["chia", "omega 3", "fibra", "saciedad", "antioxidantes","antioxidante", "veganos", "superalimento", "digestión"]
  },

  {
    nombre: "semillas de lino",
    descripcion: "Las semillas de lino, también conocidas como linaza, provienen de la planta Linum usitatissimum. Son pequeñas, de color marrón o dorado, y poseen una alta concentración de nutrientes.",
    beneficios: "Muy ricas en omega-3 vegetal, fibra soluble e insoluble, antioxidantes y lignanos. Mejoran la digestión, reducen el colesterol, regulan el tránsito intestinal y ayudan a equilibrar las hormonas.",
    usos: "Pueden consumirse molidas en yogures, licuados, panes, galletas o espolvoreadas en ensaladas. Al mezclarse con agua, sirven como reemplazo del huevo en recetas veganas.",
    palabrasClave: ["lino", "linaza", "omega 3", "fibra", "digestión", "estrés oxidativo", "regulación hormonal", "semillas saludables"]
  }
];



const formulario = document.getElementById("formulario");
const entradaUsuario = document.getElementById("entradaUsuario");
const chat = document.getElementById("chat");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  const consulta = entradaUsuario.value.toLowerCase().trim();
  mostrarMensaje("usuario", consulta);

  // Unificamos la base de datos
  const baseDeDatos = [...productosHarinas, ...productosSemillas];

  // Buscar producto por nombre
  const productoExacto = baseDeDatos.find(p => consulta.includes(p.nombre.toLowerCase()));

  if (productoExacto) {
    const respuesta = `
      <strong>${productoExacto.nombre.toUpperCase()}</strong><br>
      📝 ${productoExacto.descripcion}<br>
      ✅ Beneficios: ${productoExacto.beneficios}<br>
      🍽️ Usos: ${productoExacto.usos}
    `;
    mostrarMensaje("bot", respuesta);
  } else {
    // Buscar productos relacionados por palabras clave
    const productosRelacionados = baseDeDatos.filter(p =>
      p.palabrasClave.some(palabra => consulta.includes(palabra.toLowerCase()))
    );

    if (productosRelacionados.length > 0) {
      mostrarMensaje("bot", "Te recomiendo estos productos:");
      productosRelacionados.forEach(prod => {
        const info = `
          <strong>${prod.nombre.toUpperCase()}</strong><br>
          📝 ${prod.descripcion}<br>
          ✅ Beneficios: ${prod.beneficios}<br>
          🍽️ Usos: ${prod.usos}
        `;
        mostrarMensaje("bot", info);
      });
    } else {
      mostrarMensaje("bot", "Lo siento, no encontré ningún producto relacionado con tu consulta.");
    }
  }

  entradaUsuario.value = "";
});

function mostrarMensaje(remitente, texto) {
  const mensaje = document.createElement("p");
  mensaje.classList.add(remitente);
  mensaje.innerHTML = `<span class="${remitente}">${remitente === "usuario" ? "👤 Vos" : "🤖 Bot"}:</span> ${texto}`;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight;
}

// Botón hamburguesa para menú responsive
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("mostrar");
});
