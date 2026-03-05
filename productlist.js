const params = new URLSearchParams(window.location.search);
let category = params.get("category");

// Hvis der ikke er en kategori i URL, tjek localStorage
if (!category) {
  category = localStorage.getItem("lastCategory");
}

// Gem altid den aktuelle kategori i localStorage
if (category) {
  localStorage.setItem("lastCategory", category);
  document.querySelector("h1").textContent = category;
}

// Hent alle produkter
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((products) => {
    const filtered = category ? products.filter((p) => p.category === category) : products;
    showProducts(filtered);
  });

function showProducts(products) {
  const container = document.querySelector(".productlist");

  if (!products.length) {
    container.textContent = "Ingen produkter i denne kategori.";
    return;
  }

  products.forEach((p) => {
    const soldoutClass = p.soldout ? "soldout" : "";
    const discountClass = p.discount ? "discount" : "";
    const discountText = p.discount ? `<p>-${p.discount}%</p>` : "";

    const card = `
      <a href="product.html?id=${p.id}" class="${soldoutClass} ${discountClass}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${p.id}.webp" alt="${p.productdisplayname}">
        <p>${p.productdisplayname}</p>
        <p>${p.brandname}</p>
        <p>${p.price} kr</p>
        ${discountText}
        ${p.soldout ? "<p>Udsolgt</p>" : ""}
      </a>
    `;
    container.insertAdjacentHTML("beforeend", card);
  });
}
