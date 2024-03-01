const url = "https://freeminds.no/wp-json/wc/store/products";
const productsContainer = document.querySelector(".Products");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    productsContainer.innerHTML = "";

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    products.forEach(function (product) {
      const card = document.createElement("a");
      card.href = `productdetails.html?id=${product.id}`;
      card.classList.add("card");

      const thumbnail = document.createElement("img");
      thumbnail.src = product.images[0].src; 
      thumbnail.alt = product.name;

      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = product.name;

      const description = document.createElement("div");
      description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequatur cupiditate maxime ex vero nobis corporis soluta, quisquam modi cumque, sed corrupti, laboriosam sapiente culpa quis qui vel voluptas id"; 
      description.classList.add("descriptiont");
      
      const price = document.createElement("p");
      price.classList.add("price");
      price.innerHTML = product.price_html;

      card.appendChild(thumbnail);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(price);

      gridContainer.appendChild(card);
    });

    productsContainer.appendChild(gridContainer);
  } catch (error) {
    console.error(error);
  }
}

makeApiCall();
