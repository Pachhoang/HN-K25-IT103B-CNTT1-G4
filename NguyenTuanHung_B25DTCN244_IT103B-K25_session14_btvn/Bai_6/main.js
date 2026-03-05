const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lua", price: 180000 },
  { id: 3, name: "Canh Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Li Xi", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
let form = document.getElementById("product-form");
let nameInput = document.getElementById("product-name");
let priceInput = document.getElementById("product-price");

let renderProducts = () => {
  productList.innerHTML = products
    .map(
      (p) => `
    <li class="product-item">
      <span class="product-name">${p.name}</span> - 
      <span class="product-price">${p.price} VND</span>
      <button class="edit-price-btn" data-id="${p.id}">Sửa giá</button>
      <button class="delete-btn" data-id="${p.id}">Xóa</button>
    </li>
  `,
    )
    .join("");
};

renderProducts();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = nameInput.value.trim();
  let price = Number(priceInput.value);

  if (!name || !price) return;

  let newProduct = {
    id: Date.now(),
    name,
    price,
  };

  products.push(newProduct);

  renderProducts();

  nameInput.value = "";
  priceInput.value = "";
});

productList.addEventListener("click", (e) => {
  let id = Number(e.target.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    confirmDelete &&
      products.splice(
        products.findIndex((p) => p.id === id),
        1,
      );
    renderProducts();
  }

  if (e.target.classList.contains("edit-price-btn")) {
    let newPrice = +prompt("Nhập giá mới:");
    if (!newPrice) {
      return;
    }

    let product = products.find((p) => p.id === id);
    product.price = newPrice;
    renderProducts();
  }
});

let searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  let keyword = searchInput.value.toLowerCase();

  let items = document.querySelectorAll(".product-item");

  items.forEach((item) => {
    let name = item
      .querySelector(".product-name")
      .textContent.toLowerCase();

    if (name.includes(keyword)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

let sortAscBtn = document.getElementById("sort-asc");
let sortDescBtn = document.getElementById("sort-desc");

sortAscBtn.addEventListener("click", () => {
  products.sort((a, b) => a.price - b.price);

  productList.innerHTML = products
    .map(
      (p) => `
      <li class="product-item">
        <span class="product-name">${p.name}</span>
        <span class="product-price">${p.price} VND</span>
        <button class="edit-price-btn">Sửa giá</button>
        <button class="delete-btn">Xóa</button>
      </li>
    `
    )
    .join("");
});

sortDescBtn.addEventListener("click", () => {
  products.sort((a, b) => b.price - a.price);

  productList.innerHTML = products
    .map(
      (p) => `
      <li class="product-item">
        <span class="product-name">${p.name}</span>
        <span class="product-price">${p.price} VND</span>
        <button class="edit-price-btn">Sửa giá</button>
        <button class="delete-btn">Xóa</button>
      </li>
    `
    )
    .join("");
});
