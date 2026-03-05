// hent id fra URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// hent produkt fra API
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  document.querySelector("h1").textContent = product.productdisplayname;

  document.querySelector(".product_pic").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

const listURL = "https://kea-alt-del.dk/t7/api/products";

fetch(listURL)
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach((product) => {
    const markup = `
      <a href="product.html?id=${product.id}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
        <p>${product.productdisplayname}</p>
        <p>${product.brandname}</p>
        <p>${product.price} kr</p>
      </a>
    `;

    document.querySelector(".productlist").insertAdjacentHTML("beforeend", markup);
  });
}
