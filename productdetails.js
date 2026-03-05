const id = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((res) => res.json())
  .then((p) => showProduct(p));

function showProduct(p) {
  document.querySelector("h1").textContent = p.productdisplayname;
  document.querySelector(".brand").textContent = p.brandname;
  document.querySelector(".price").textContent = p.price + " kr";
  document.querySelector(".product_pic").src = `https://kea-alt-del.dk/t7/images/webp/640/${p.id}.webp`;
  document.querySelector(".status").textContent = p.soldout ? "Udsolgt" : "På lager";
}
