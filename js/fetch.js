const url = "http://freeminds.no/wp-json/wc/store/products";
const productsContainer = document.querySelector(".Products");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    productsContainer.innerHTML = "";

    products.forEach(function (beads) {
      productsContainer.innerHTML += `
        <a href="productdetails.html?id=${beads.id}" class="card">
          <h2 class="title">${beads.name}</h2>
         <p>${beads.description}</p>
          <p class="price">${beads.price_html}</p>
        </a>`;
    });
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();
