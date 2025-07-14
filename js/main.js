
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
    palabrasClave: ["semolin","semolín","trigo","sémola","trigo duro", "pastas", "energía", "harina gruesa", "vitaminas B"],
  },

  {
  id: 10,  
  nombre: "harina de centeno",
  categoria: "harinas",
  descripcion: "Harina obtenida del grano entero del centeno, con sabor característico y alto contenido en fibra.",
  beneficios: "Ayuda a la digestión, aporta energía sostenida y contribuye a regular el colesterol.",
  usos: "Ideal para panes oscuros, masas fermentadas, galletas y recetas tradicionales europeas.",
  palabrasClave: ["centeno", "fibra", "pan oscuro", "digestión", "energía"]
  },

  {
  id: 11,  
  nombre: "harina de arvejas",
  categoria: "harinas",
  descripcion: "Harina obtenida a partir de arvejas secas molidas, rica en proteínas y fibra.",
  beneficios: "Alta en proteínas vegetales, ayuda a la digestión y es baja en grasas.",
  usos: "Ideal para panes, tortas, galletas y para enriquecer masas saladas.",
  palabrasClave: ["arvejas", "proteínas", "fibra", "masa salada", "harina vegetal"]
  },

  {
  id: 12,  
  nombre: "harina de coco",
  categoria: "harinas",
  descripcion: "Harina obtenida de la pulpa seca del coco, molida finamente y sin gluten.",
  beneficios: "Alta en fibra, baja en carbohidratos y rica en grasas saludables.",
  usos: "Ideal para repostería, panes, tortas y productos keto o sin gluten.",
  palabrasClave: ["coco", "fibra", "baja en carbohidratos", "keto", "sin gluten"]
  },

  {
  id: 13, 
  nombre: "harina de maní",
  categoria: "harinas",
  descripcion: "Harina obtenida al moler maní tostado y pelado, con alto contenido proteico.",
  beneficios: "Rica en proteínas, grasas saludables y fibra. Ayuda a la saciedad y aporta energía.",
  usos: "Ideal para repostería, panes, barras energéticas y productos sin gluten.",
  palabrasClave: ["maní","mani","proteinas","proteínas", "proteínas", "grasas saludables", "fibra", "energía", "sin gluten"]
  },

  {
  id: 14, 
  nombre: "harina de nuez",
  categoria: "harinas",
  descripcion: "Harina elaborada al moler nueces tostadas, con un sabor intenso y textura fina.",
  beneficios: "Alta en grasas saludables, antioxidantes y vitamina E. Promueve la salud cardiovascular.",
  usos: "Perfecta para repostería, panes, galletas y recetas gourmet.",
  palabrasClave: ["nuez", "grasas saludables", "antioxidantes", "vitamina E", "repostería", "salud cardiovascular"]
  },

  {
  id: 15, 
  nombre: "harina para fainá",
  categoria: "harinas",
  descripcion: "Harina de garbanzos especialmente seleccionada para preparar fainá, con textura fina y sabor suave.",
  beneficios: "Alta en proteínas vegetales, fibra y minerales. Ideal para dietas sin gluten y veganas.",
  usos: "Perfecta para preparar fainá, tortillas y otras recetas saladas sin TACC.",
  palabrasClave: ["fainá", "garbanzo", "sin gluten", "vegano", "proteína vegetal", "sin TACC"]
  },

  {
  id: 16, 
  nombre: "harina paraguaya",
  categoria: "harinas",
  descripcion: "Harina especial para preparar la tradicional harina paraguaya, con textura adecuada para bizcochos y panes dulces.",
  beneficios: "Fuente de carbohidratos que aportan energía, fácil de digerir y versátil en la cocina.",
  usos: "Ideal para tortas paraguayas, bizcochos, panes dulces y preparaciones similares.",
  palabrasClave: ["harina paraguaya", "bizcocho", "torta paraguaya", "pan dulce", "carbohidratos", "energía"]
  },

  {
  id: 10,
  nombre: "lino molido",
  categoria: "semillas",
  descripcion: "Semillas de lino molidas finamente, ideales para mejorar la digestión y aportar fibra y omega-3.",
  beneficios: "Rico en fibra soluble e insoluble, omega-3 vegetal, lignanos y antioxidantes. Ayuda a regular el tránsito intestinal y la salud cardiovascular.",
  usos: "Se agrega en yogures, batidos, panes, galletas o como suplemento nutricional en la dieta diaria.",
  palabrasClave: ["lino","lino molido", "linaza", "fibra", "omega 3", "digestión", "salud cardiovascular"]
  },

  {
  id: 11, 
  nombre: "salvado de trigo fino",
  categoria: "semillas",
  descripcion: "Capa externa fina y crujiente del grano de trigo, rica en fibra insoluble y nutrientes esenciales.",
  beneficios: "Alto contenido de fibra, ayuda a mejorar el tránsito intestinal, reduce el colesterol y aporta saciedad.",
  usos: "Ideal para agregar en yogures, batidos, panes, galletas o ensaladas para aumentar el aporte de fibra.",
  palabrasClave: ["salvado", "trigo", "fibra", "tránsito intestinal", "colesterol", "saciedad"]
  },

  {
  id: 13,
  nombre: "sésamo triturado",
  categoria: "semillas",
  descripcion: "Semillas de sésamo ligeramente trituradas para facilitar su uso en recetas y mejorar su absorción.",
  beneficios: "Ricas en calcio, hierro, magnesio y grasas saludables. Ayuda a fortalecer huesos y mejorar la digestión.",
  usos: "Se usa en ensaladas, panes, galletas, aderezos y como topping en platos variados.",
  palabrasClave: ["sésamo", "sesamo", "calcio", "magnesio", "grasas saludables", "digestión", "semillas trituradas"]
  },

  {
  id: 14, 
  nombre: "soja texturizada",
  categoria: "proteínas",
  descripcion: "Producto derivado de la soja desgrasada, con textura similar a la carne, muy usada como sustituto vegetal.",
  beneficios: "Alta en proteínas, baja en grasas, sin colesterol. Ideal para dietas veganas y vegetarianas.",
  usos: "Se utiliza en guisos, estofados, hamburguesas vegetales, albóndigas y recetas que reemplazan la carne.",
  palabrasClave: ["soja", "texturizada", "proteína vegetal", "vegano", "sustituto de carne", "baja en grasas"]
  },

  {
  id: 15, 
  nombre: "soja texturizada gruesa",
  categoria: "proteínas",
  descripcion: "Soja texturizada con trozos más grandes y consistentes, ideal para platos donde se quiere una textura más firme.",
  beneficios: "Alta en proteínas, baja en grasas, sin colesterol. Aporta saciedad y es apta para dietas veganas y vegetarianas.",
  usos: "Perfecta para guisos, estofados, rellenos y preparaciones que requieren una textura más marcada.",
  palabrasClave: ["soja", "texturizada", "gruesa", "proteína vegetal", "vegano", "sustituto de carne", "textura firme"]
  },

  {
  id: 16, 
  nombre: "trigo burgol fino",
  categoria: "cereales",
  descripcion: "Trigo partido y precocido, molido en partículas finas, ideal para ensaladas y preparaciones rápidas.",
  beneficios: "Fuente de fibra, vitaminas y minerales. Favorece la digestión y aporta energía sostenida.",
  usos: "Usado en tabulé, ensaladas, rellenos, sopas y guisos.",
  palabrasClave: ["trigo burgol", "burgol", "trigo partido", "fino", "fibra", "tabulé", "cereales"]
  },

  {
  id: 17, 
  nombre: "trigo burgol grueso",
  categoria: "cereales",
  descripcion: "Trigo partido y precocido en trozos más grandes, con textura más gruesa y consistente.",
  beneficios: "Fuente de fibra, vitaminas y minerales. Ayuda a la digestión y proporciona energía sostenida.",
  usos: "Ideal para guisos, sopas, rellenos y platos tradicionales del Medio Oriente.",
  palabrasClave: ["trigo burgol", "burgol", "trigo partido", "grueso", "fibra", "guisos", "cereales"]
  },

  {
  id: 18, 
  nombre: "gluten puro",
  categoria: "proteínas",
  descripcion: "Proteína del trigo altamente concentrada, obtenida tras eliminar el almidón y otros componentes.",
  beneficios: "Alto contenido proteico, ideal para aumentar la elasticidad y estructura en productos horneados.",
  usos: "Se usa en panes, productos de panadería, y para mejorar la textura en masas y productos veganos o vegetarianos.",
  palabrasClave: ["gluten", "proteína de trigo", "elasticidad", "panadería", "proteína vegetal"]
  },

  {
  id: 19, 
  nombre: "fariña de mandioca",
  categoria: "harinas",
  descripcion: "Harina tradicional obtenida del secado y molido de la mandioca (yuca), con textura granulada y sabor característico.",
  beneficios: "Fuente de carbohidratos, libre de gluten y fácil digestión. Aporta energía rápida y es versátil en la cocina.",
  usos: "Ideal para acompañamientos, espesar guisos, preparar panes típicos, tortas y como base para recetas sin gluten.",
  palabrasClave: ["mandioca", "yuca", "harina sin gluten", "carbohidratos", "cocina tradicional"]
  },

  {
  id: 20, 
  nombre: "germen de trigo",
  categoria: "harinas",
  descripcion: "Parte nutritiva del trigo que se separa durante el proceso de molienda. Rico en vitaminas y minerales.",
  beneficios: "Alto contenido en vitamina E, antioxidantes, ácido fólico y fibra. Ayuda a la salud cardiovascular y digestiva.",
  usos: "Se puede agregar a yogures, batidos, cereales, panes y productos de repostería para enriquecer su valor nutricional.",
  palabrasClave: ["germen","trigo","vitamina E", "antioxidantes", "fibra", "ácido fólico", "nutrición", "salud cardiovascular"]
  },

  {
  id: 21, // ajustá el ID según corresponda
  nombre: "arvejas texturizadas",
  categoria: "semillas",
  descripcion: "Proteína vegetal deshidratada obtenida a partir de arvejas, ideal como sustituto de carne en dietas veganas y vegetarianas.",
  beneficios: "Alta en proteínas, baja en grasas, buena fuente de fibra y libre de gluten.",
  usos: "Se usa en guisos, hamburguesas vegetales, albóndigas, rellenos y otras preparaciones similares a la carne.",
  palabrasClave: ["texturizada","arvejas","arveja texturizada","proteína vegetal", "vegano", "sin gluten", "sustituto de carne", "arvejas", "alta proteína"]
  },


];


//*******************SEMILLAS**************** */
const productosSemillas = [
  {
    id: 100,
    nombre: "semillas de chía",
    categoria: "semillas",
    descripcion: "Las semillas de chía provienen de la planta Salvia hispanica. Son pequeñas, oscuras y muy nutritivas.",
    beneficios: "Ricas en omega-3, fibra, antioxidantes, calcio, magnesio y proteínas vegetales.",
    usos: "Se consumen en puddings, yogures, licuados, jugos, ensaladas o panificados.",
    palabrasClave: ["semillas de chia","chia", "omega 3", "fibra", "saciedad", "antioxidantes", "veganos", "superalimento"]
  },
  {
    id: 101,
    nombre: "semillas de lino",
    categoria: "semillas",
    descripcion: "Las semillas de lino (linaza) provienen de la planta Linum usitatissimum. Son pequeñas, marrones o doradas.",
    beneficios: "Muy ricas en omega-3 vegetal, fibra soluble e insoluble, antioxidantes y lignanos.",
    usos: "Molidas en yogures, panes, galletas, batidos o como reemplazo del huevo en recetas veganas.",
    palabrasClave: ["lino", "linaza", "omega 3", "fibra", "digestión", "estrés oxidativo", "hormonas"]
  },
  {
    id: 102, // ID único, sigue la numeración que estés usando
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
    id:200 ,
    nombre: "té verde matcha",
    categoria: "especias",
    descripcion: "Polvo fino de hojas de té verde molidas, con sabor intenso y un color verde vibrante.",
    beneficios: "Alto en antioxidantes, mejora el metabolismo, ayuda a la concentración y a la energía sostenida.",
    usos: "Se consume en infusiones, smoothies, postres y como ingrediente en recetas saludables.",
    palabrasClave: ["té","te","matcha", "antioxidantes", "metabolismo", "energía", "infusión"]
  },
  {
    id:201 ,
    nombre: "té negro earl grey",
    categoria: "especias",
    descripcion: "Té negro aromatizado con aceite de bergamota, de sabor cítrico y refrescante.",
    beneficios: "Ayuda a la digestión, es antioxidante y aporta un sabor único y refrescante.",
    usos: "Se consume solo o con leche, ideal para la tarde y momentos de relax.",
    palabrasClave: ["té","te","earl grey", "bergamota", "digestión", "antioxidantes", "infusión"]
  },
  {
    id: 202, // actualizá este ID según el último que tengas
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

  // Insertamos el texto con los botones (si los tiene)
  mensaje.innerHTML = `<span class="${remitente}">${remitente === "usuario" ? "👤 Vos" : "🦝 Mapachito"}:</span> ${texto}`;
  chat.appendChild(mensaje);
  chat.scrollTop = chat.scrollHeight; // Para hacer scroll hacia abajo

  // Guardar en localStorage si corresponde
  if (guardar) {
    guardarMensajeEnLocalStorage(remitente, texto);
  }

  // Si hay botones de categoría, les agregamos el evento click
  mensaje.querySelectorAll(".categoria-boton").forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");
      mostrarProductosPorCategoria(categoria);
    });
  });
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








