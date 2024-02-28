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

function createHTML(product) {

  const thumbnailUrl = product.images.length > 0 ? product.images[0].src : 'placeholder.jpg'; // Assuming 'placeholder.jpg' as default if no image available

  detailContainer.innerHTML = `
    <div class="details">
      <img src="${thumbnailUrl}" alt="${product.name}" class="thumbnail">
      <h2 class="title">${product.name}</h2>
      <p>${product.description}</p>
      <div class="shorty">${product.short_description}</div>
      <p class="price">${product.price_html} </p>
    </div>`;
}
