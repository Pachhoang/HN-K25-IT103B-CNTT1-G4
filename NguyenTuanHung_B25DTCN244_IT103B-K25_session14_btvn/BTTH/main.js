const products = [
  {
    id: 1,
    name: "Bánh Chưng Tranh Khúc",
    price: 150000,
    img: "./img/banhchung.webp",
  },
  { id: 2, name: "Giò Lụa Ước Lễ", price: 180000, img: "./img/giolua.jpg" },
  {
    id: 3,
    name: "Cành Đào Nhật Tân",
    price: 500000,
    img: "./img/canhdao.webp",
  },
  { id: 4, name: "Mứt Tết Thập Cẩm", price: 120000, img: "./img/muttet.webp" },
  { id: 5, name: "Lì Xì May Mắn", price: 20000, img: "./img/lixi.webp" },
  { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000, img: "./img/duahau.jpg" },
];

let totalMoney = 0;

let productList = document.getElementById("product-list");
let cartList = document.getElementById("cart-list");
let totalPrice = document.getElementById("total-price");

function formatMoney(money) {
  return money.toLocaleString("vi-VN") + " đ";
}

function renderProducts() {
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let p = products[i];

    let card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p class="price">${formatMoney(p.price)}</p>
      <button class="btn-add" onclick="addToCart(${p.id})">
        Thêm vào giỏ
      </button>
    `;

    productList.appendChild(card);
  }
}

function addToCart(id) {
  let product = products.find((p) => p.id === id);

  let empty = document.querySelector(".empty-msg");
  if (empty) empty.remove();

  let li = document.createElement("li");

  li.innerHTML = `
    <span>${product.name}</span>
    <div>
      <span>${formatMoney(product.price)}</span>
      <button onclick="removeItem(this, ${product.price})">X</button>
    </div>
  `;

  cartList.appendChild(li);

  totalMoney += product.price;
  totalPrice.innerText = formatMoney(totalMoney);
}

function removeItem(btn, price) {
  let li = btn.parentElement.parentElement;
  li.remove();

  totalMoney -= price;
  totalPrice.innerText = formatMoney(totalMoney);
}

renderProducts();
