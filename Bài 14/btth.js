const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "" },
  { id: 3, name: "Cành Đào", price: 500000, img: "" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "" },
];

const cart = [];

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function renderProducts() {
  let str = "";

  for (let i = 0; i < products.length; i++) {
    str += `
        <div class="product-card">
            <img src="${products[i].img}" alt="">
            <h3>${products[i].name}</h3>
            <p class="price">${formatter.format(products[i].price)}</p>
            <button class="btn-add" onclick="addToCart(${i})">
                Thêm vào giỏ
            </button>
        </div>
        `;
  }

  document.getElementById("product-list").innerHTML = str;
}

renderProducts();

function renderCart() {
  let str = "";

  if (cart.length === 0) {
    str = `<li class="empty-msg">Chưa có món nào...</li>`;
  } else {
    for (let i = 0; i < cart.length; i++) {
      str += `
            <li>
                <span class="cart-item-name">${cart[i].name}</span>
                <div>
                    <span>SL : ${cart[i].quantity}</span>
                    <span class="cart-item-price">
                        ${formatter.format(cart[i].price)}
                    </span>
                    <button class="btn-remove" onclick="removeItem(${i})">
                        X
                    </button>
                </div>
            </li>
            `;
    }
  }

  document.getElementById("cart-list").innerHTML = str;

  updateTotal();
}

function addToCart(index) {
  const product = products[index];

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);

  renderCart();
}

function updateTotal() {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  document.getElementById("total-price").innerText = formatter.format(total);
}