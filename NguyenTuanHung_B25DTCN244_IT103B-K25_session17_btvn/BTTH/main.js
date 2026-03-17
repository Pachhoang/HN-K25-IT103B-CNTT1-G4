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

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalMoney = 0;

const productListDOM = document.getElementById("product-list");
const cartListDOM = document.getElementById("cart-list");
const totalPriceDOM = document.getElementById("total-price");

const formatMoney = (amount) => amount.toLocaleString("vi-VN") + " đ";

const saveCartToLocal = () =>
  localStorage.setItem("cart", JSON.stringify(cart));

const renderProducts = () => {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatMoney(product.price)}</p>
            <button class="btn-add">Thêm vào giỏ</button>
        `;
    productListDOM.appendChild(card);
    card
      .querySelector(".btn-add")
      .addEventListener("click", () => addToCart(product));
  });
};

const addToCart = (product) => {
  cart.push(product);
  saveCartToLocal();
  renderCart();
};

const renderCart = () => {
  cartListDOM.innerHTML = "";
  totalMoney = 0;

  if (cart.length === 0) {
    cartListDOM.innerHTML = '<li class="empty-msg">Chưa có món nào...</li>';
    totalPriceDOM.innerText = formatMoney(0);
    return;
  }

  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span class="cart-item-name">${product.name}</span>
            <div>
                <span class="cart-item-price">${formatMoney(product.price)}</span>
                <button class="btn-remove">X</button>
            </div>
        `;
    cartListDOM.appendChild(li);
    totalMoney += product.price;
    li.querySelector(".btn-remove").addEventListener("click", () => {
      cart.splice(index, 1);
      saveCartToLocal();
      renderCart();
    });
  });

  totalPriceDOM.innerText = formatMoney(totalMoney);
};

const checkout = () => {
  if (cart.length !== 0) {
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
    alert("Đã thanh toán thành công");
  } else {
    alert("Giỏ hàng đang trống");
  }
};

renderProducts();
renderCart();
