const url = "https://freeminds.no/wp-json/wc/store/products";
const productsContainer = document.getElementById("product-details");

async function fetchProductById(id) {
    try {
        const response = await fetch(`${url}/${id}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product");
        }
        const product = await response.json();
        renderProduct(product);
    } catch (error) {
        console.error(error);
    }
}

function renderProduct(product) {
    productsContainer.innerHTML = "";

    const thumbnailUrl = product.images.length > 0 ? product.images[0].src : 'placeholder.jpg'; // Assuming 'placeholder.jpg' as default if no image available
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
        <img src="${thumbnailUrl}" alt="${product.name}" class="images">
        <h2>${product.name}</h2>
        <p class="descriptiont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ex corporis! Laborum debitis nihil dolore minima nemo mollitia. Eligendi, temporibus vitae saepe et quod error illo unde inventore cum nobis.</p>
        <p class="price">${product.price_html}</p>
    `;
    productsContainer.appendChild(productElement);
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id) {
    fetchProductById(id);
}
