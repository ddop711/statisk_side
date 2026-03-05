// Hent alle produkter
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showCategories(data));

function showCategories(products) {
  // Lav en unik liste af kategorier
  const categories = [...new Set(products.map((p) => p.category))];

  categories.forEach((cat) => {
    const link = `<a href="productlist.html?category=${encodeURIComponent(cat)}">${cat}</a>`;
    document.querySelector(".landing").insertAdjacentHTML("beforeend", link);
  });
}
