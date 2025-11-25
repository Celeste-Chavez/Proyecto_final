//Funcionalidades


// Inicio 
const URL_INICIO = '../datos/informacion.json'; 

async function cargarInicio() {
  try {
    const respuesta = await fetch(URL_INICIO);
    const data = await respuesta.json();

    const inicio = data['primera-parte']; 
    const contenedor = document.getElementById('hero');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<img src='" + inicio['img-hero'] + "' alt='Ilustración'>" +
      "<h1>" + inicio.titular + "</h1>" +
      "<h4>" + inicio.categoria + "</h4>" +
      "<p>" + inicio['frase-descriptiva'] + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarInicio);



//Leyendas

const URL_LeyendaMito = '../datos/leyendas-mitos.json'; 

async function cargarLeyenMito() {
  try {
    const respuesta = await fetch(URL_LeyendaMito);
    const data = await respuesta.json();

    // Leyendas Místicas
    const primer = data["leyendas-misticas"][0];
    document.getElementsByClassName('titulo-mistica')[0].textContent = primer.titulo;
    document.getElementsByClassName('masa-texto-mistica')[0].textContent = primer["masa-texto"];
    document.getElementsByClassName('imagenLM-mistica')[0].src = primer["img-leyenda"];

    // Leyendas Sagradas
    const segundo = data["leyendas-sagradas"][0]; // índice 0
    document.getElementsByClassName('titulo-sagrada')[0].textContent = segundo.titulo;
    document.getElementsByClassName('masa-texto-sagrada')[0].textContent = segundo["masa-texto"];
    document.getElementsByClassName('imagenLM-sagrada')[0].src = segundo["img-leyenda"];

    // Leyendas Historicas
    const tercer = data["leyendas-historicas"][0]; 
    document.getElementsByClassName('titulo-historicas')[0].textContent = tercer.titulo;
    document.getElementsByClassName('masa-texto-historicas')[0].textContent = tercer["masa-texto"];
    document.getElementsByClassName('imagenLM-historicas')[0].src = tercer["img-leyenda"];

  } catch (error) {
    console.error("Error al cargar la información:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarLeyenMito);


//MITOS

async function cargarMitos() {
  try {
    const respuesta = await fetch(URL_LeyendaMito);
    const data = await respuesta.json();

    // MITOS Místicos
    const mm1 = data["mitos-misticos"][0];
    const seccion1 = document.querySelectorAll(".m_mistica")[0];
    seccion1.querySelector("h2").textContent = mm1.titulo;
    seccion1.querySelector("p").textContent = mm1["masa-texto"];
    seccion1.querySelector("img").src = mm1["img-leyenda"];

    // MITOS Sagrados
    const mm2 = data["mitos-sagrados"][0];
    const seccion2 = document.querySelectorAll(".m_mistica")[1];
    seccion2.querySelector("h2").textContent = mm2.titulo;
    seccion2.querySelector("p").textContent = mm2["masa-texto"];
    seccion2.querySelector("img").src = mm2["img-leyenda"];

    // MITOS Históricos
    const mm3 = data["mitos-historicos"][0];
    const seccion3 = document.querySelector(".m_historica");
    seccion3.querySelector("h2").textContent = mm3.titulo;
    seccion3.querySelector("p").textContent = mm3["masa-texto"];
    seccion3.querySelector("img").src = mm3["img-leyenda"];

  } catch (error) {
    console.error("Error al cargar Mitos:", error);
  }
}




// PERFIL 

// Aqui se esta cargando el archivo json
fetch('../datos/perfil.json')
  .then(res => res.json())
  .then(datos => {
    const botones = document.querySelectorAll('.filtro');
    const lista = document.getElementById('lista');

    botones.forEach(btn => {
      btn.addEventListener('click', () => {
        const tipo = btn.dataset.tipo;
        lista.innerHTML = '';
        datos[tipo].forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          lista.appendChild(li);
        });
      });
    });
  });

// Para editar el nombre y la descripcion 
document.getElementById('editarTexto').addEventListener('click', () => {
  const nuevoNombre = prompt('Nuevo nombre:', document.getElementById('nombreUsuario').textContent);
  const nuevaDesc = prompt('Nueva descripción:', document.getElementById('descripcion').textContent);

  if (nuevoNombre) document.getElementById('nombreUsuario').textContent = nuevoNombre;
  if (nuevaDesc) document.getElementById('descripcion').textContent = nuevaDesc;
});

// Para cambiar imagen desde archivos del escritorio
const inputImagen = document.getElementById('inputImagen');
document.getElementById('editarImagen').addEventListener('click', () => {
  inputImagen.click();
});

inputImagen.addEventListener('change', () => {
  const archivo = inputImagen.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function(e) {
      document.getElementById('avatar').src = e.target.result;
    };
    lector.readAsDataURL(archivo);
  }
});




// Sobre proyecto
const URL_PROY = '../datos/sobre-proyecto.json'; 

async function cargarProyecto() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    const proy = data.sobreProyecto;
    const contenedor = document.getElementById('sobre-proyecto');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<h1>" + proy.titulo + "</h1>" +
      "<h2>" + proy.nombre + "</h2>" +
      "<p>" + proy.descripcion + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarProyecto);



// Creditos
//const URL_PROY = '../datos/sobre-proyecto.json'; 

async function cargarCreditos() {
  try {
    const respuesta = await fetch(URL_PROY);
    const data = await respuesta.json();

    const proy = data.creditos;
    const contenedor = document.getElementById('creditos');

    const articulo = document.createElement('article');

    articulo.innerHTML =
      "<h1>" + proy.titulo + "</h1>" +
      "<p>" + proy.descripcion + "</p>";

    contenedor.appendChild(articulo);

  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarCreditos);
