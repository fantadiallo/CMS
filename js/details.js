const detailContainer = document.querySelector(".product-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://freeminds.no/wp-json/wc/store/products/" + id;

async function fetchGames() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    detailContainer.innerHTML = "";

    createHTML(details);
  } catch (error) {
    detailContainer.innerHTML = message("error", error);
  }
}

fetchGames();

function createHTML(beads) {
  detailContainer.innerHTML = `
  <div class="details">
          <h2 class="title">${beads.name}</h2>
          <p>${beads.description}</p>
          <div class="shorty">${beads.short_description}</div>
          <p class="price">${beads.price_html} </p>
        </div>`;
}
