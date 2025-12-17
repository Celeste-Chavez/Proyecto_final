async function loadCards() {
  console.log('loadCards ejecutándose');

  try {
    const response = await fetch('../datos/leyendasmitos.json');
    if (!response.ok) {
      throw new Error('Error al cargar el JSON');
    }

    const data = await response.json();

    // 🔎 Busca TODOS los contenedores de cards
    const containers = document.querySelectorAll('[data-categoria]');

    if (!containers.length) {
      console.error('No hay contenedores con data-categoria');
      return;
    }

    containers.forEach(container => {
      const categoria = container.dataset.categoria;

      data.forEach(item => {
        if (item.categoria !== categoria) return;

        const cardHTML = `
          <div class="card_mitos_individual">
            <a class="btn_mitos_card" href="contenido.html?id=${item.id}">
              
              <div class="mitos_cards_titulo">
                <h3>${item.titulo}</h3>
              </div>

              <img
                class="mitos_cards_imagen"
                src="../imagenes/ilustraciones finales/${item.ilustracion}"
                alt="${item.titulo}"
                onerror="this.src='../imagenes/PlaceHolder.png'"
              >

              <div class="mitos_cards_texto">
                <p>${item.frase_descriptiva}</p>
              </div>

            </a>
          </div>
        `;

        container.insertAdjacentHTML('beforeend', cardHTML);
      });
    });

  } catch (error) {
    console.error('Error al cargar las tarjetas:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadCards);
