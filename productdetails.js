const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  document.querySelector("h1").textContent = product.productdisplayname;

  document.querySelector(".product_pic").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
