const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lua", price: 180000 },
  { id: 3, name: "Canh Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Li Xi", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
let productForm = document.getElementById("product-form");
let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");

let render = () => {
  productList.innerHTML = products
    .map(
      (p) => `
      <li class="product-item" data-id="${p.id}">
        <p>${p.name}</p>
        <p>${p.price} VND</p>
        <button class="delete-btn">Xóa</button>
      </li>
    `,
    )
    .join("");
};

render();

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newProduct = {
    id: Date.now(),
    name: productName.value,
    price: productPrice.value,
  };

  products.push(newProduct);
  render();

  productName.value = "";
  productPrice.value = "";
});

productList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    let li = e.target.closest("li");
    let id = Number(li.dataset.id);

    let confirmDelete = confirm("Bạn muốn xóa sản phẩm này?");

    if (confirmDelete) {
      let index = products.findIndex((p) => p.id === id);
      if (index !== -1) products.splice(index, 1);
      render();
    }
  }
});
