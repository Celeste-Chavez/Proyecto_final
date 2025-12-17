async function loadContent() {
    try {
        // 1. Obtener ID desde la URL
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (!id) {
            console.error('No se recibió ningún id');
            return;
        }

        // 2. Cargar JSON
        const response = await fetch('../datos/leyendasmitos.json');
        if (!response.ok) {
            throw new Error('Error al cargar el JSON');
        }

        const data = await response.json();

        // 3. Buscar la leyenda correspondiente
        const item = data.find(el => el.id == id);

        if (!item) {
            console.error('Leyenda no encontrada');
            return;
        }


        //coso datos curiosos

        function renderDatosCuriosos(htmlString, container) {
            container.innerHTML = ''; // Limpiar contenedor

            // Crear un contenedor temporal para parsear el HTML
            const temp = document.createElement('div');
            temp.innerHTML = htmlString;

            const items = temp.querySelectorAll('li'); // Tomar cada <li> del JSON

            items.forEach((li, index) => {
                // 1️ Título principal de sección (solo una vez, antes de la primera card)
                if (index === 0) {
                    const tituloSeccion = document.createElement('div');
                    tituloSeccion.classList.add('datos_leyenda_1_titulo');
                    tituloSeccion.innerHTML = `<h2 class="datos_leyenda_1_card_1_titulo_principal">Datos curiosos</h2>`;
                    container.appendChild(tituloSeccion);
                }

                // 2️ Crear la card principal
                const card = document.createElement('div');
                card.classList.add('datos_leyenda_1_card_1');

                  let imagenes = [];
                if(item.imagenes_apoyo) {
                imagenes = item.imagenes_apoyo
                .replace(/[\[\]]/g, '') 
                .split(',')             
                .map(img => img.trim()); 
                }


                // Imagen de apoyo
                const img = document.createElement('img');
                img.classList.add('datos_leyenda_1_card_1_imag_1');
                img.src = imagenes[index] ? imagenes[index] : '../imagenes/PlaceHolder.png';
                img.alt = 'imagen de dato curioso';

                img.onerror = function() {
                this.src = 'imagenes/PlaceHolder.png';
                };

                // Título de la card
                const titulo = document.createElement('div');
                titulo.classList.add('datos_leyenda_1_card_1_titulo');
                titulo.innerHTML = `<h>¿SABIAS QUE...?</h><div class="linea_divisora_2"></div>`;

                // Texto de la card
                const texto = document.createElement('div');
                texto.classList.add('datos_leyenda_1_card_1_texto');
                texto.innerHTML = `<p>${li.textContent}</p>`;

                // Armar la card
                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(texto);

                // Agregar al contenedor principal
                container.appendChild(card);
            });
        }



        /* ======================
           INTRO DE LA LEYENDA
        ====================== */

        const intro = document.querySelector('.intro_leyenda_1');

        intro.innerHTML = `
      <div class="contenedor_titulos">
        <div class="intro_leyenda_1_titulo">
          <h3>${item.titulo}</h3>
        </div>

        <div class="intro_leyenda_1_subtitulo">
          <h4>${item.tipo} · ${item.categoria}</h4>
        </div>

        <div class="intro_leyenda_1_texto">
          <p>${item.frase_descriptiva}</p>
        </div>
      </div>

      <img
        class="mitos_cards_imagen"
        src="../imagenes/ilustraciones finales/${item.ilustracion}"
        alt="${item.titulo}"
        onerror="this.src='../imagenes/PlaceHolder.png'"
      >
    `;

        /* ======================
           TEXTOS DE LA LEYENDA
        ====================== */

        const textos = document.querySelector('.textos_leyenda_1');

        textos.innerHTML = `
      <div class="textos_leyenda_1_frase">
        <p>${item.tipo} De ${item.titulo}</p>
        <div class="linea_divisora"></div>
      </div>

      <div class="textos_leyenda_1_descripcion">
        <p>${item.contenido}</p>
        <div class="linea_divisora"></div>
      </div>

      ${item.audio ? `
      <div class="textos_leyenda_1_audio">
        <audio controls>
          <source src="${item.audio}" type="audio/mpeg">
        </audio>
      </div>
      ` : ''}
    `;

        /* ======================
           DATOS CURIOSOS
        ====================== */
        const datosContainer = document.querySelector('.datos_leyenda_1');
        if (item.datos_curiosos) {
            renderDatosCuriosos(item.datos_curiosos, datosContainer);
        }


    } catch (error) {
        console.error('Error al cargar el contenido:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadContent);
