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
