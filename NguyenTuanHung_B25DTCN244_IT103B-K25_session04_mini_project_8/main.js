const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image: "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image: "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
];

let cart = {};
const STORAGE_KEY = "mp19_cart_v1";

const productsGridEl = document.getElementById("products-grid");
const productCountBadgeEl = document.getElementById("product-count-badge");
const cartTbodyEl = document.getElementById("cart-tbody");
const cartEmptyEl = document.getElementById("cart-empty");
const cartLinesBadgeEl = document.getElementById("cart-lines-badge");
const cartQtyBadgeEl = document.getElementById("cart-qty-badge");
const statLinesEl = document.getElementById("stat-lines");
const statQtyEl = document.getElementById("stat-qty");
const statTotalEl = document.getElementById("stat-total");
const clearCartBtn = document.getElementById("clear-cart-btn");

const formatVND = (n) => new Intl.NumberFormat("vi-VN").format(n) + " VNĐ";
const findProductById = (id) => products.find((p) => p.id === Number(id));
const getCartItems = () => Object.values(cart);

const calcStats = () => {
  const items = getCartItems();
  return {
    lines: items.length,
    qty: items.reduce((s, i) => s + i.quantity, 0),
    total: items.reduce((s, i) => {
      const p = findProductById(i.productId);
      return s + (p ? p.price * i.quantity : 0);
    }, 0),
  };
};

const renderProducts = () => {
  productCountBadgeEl.textContent = `${products.length} sản phẩm`;
  productsGridEl.innerHTML = products
    .map(
      (p) => `
    <article class="card">
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-footer">
          <div class="price">${formatVND(p.price)}</div>
          <button class="btn btn-primary" data-action="add" data-id="${p.id}">Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
};

const renderCart = () => {
  const items = getCartItems();
  cartEmptyEl.classList.toggle("hidden", items.length > 0);

  const tableWrap = document.querySelector(".table-wrap");
  tableWrap.classList.toggle("hidden", items.length === 0);

  cartTbodyEl.innerHTML = items
    .map((it) => {
      const p = findProductById(it.productId);
      if (!p) return "";
      const total = p.price * it.quantity;

      return `
    <tr>
      <td>
        <div style="display:flex; align-items:center; gap:8px">
            <input type="checkbox" class="select-item" value="${p.id}">
            ${p.name}
        </div>
      </td>
      <td class="right">${formatVND(p.price)}</td>
      <td class="center">
        <div class="qty-controls">
            <button class="btn btn-icon" data-action="dec" data-id="${p.id}">-</button>
            <span class="qty">${it.quantity}</span>
            <button class="btn btn-icon" data-action="inc" data-id="${p.id}">+</button>
        </div>
      </td>
      <td class="right">${formatVND(total)}</td>
      <td class="center">
        <button class="btn btn-danger" data-action="remove" data-id="${p.id}">Xóa</button>
      </td>
    </tr>
    `;
    })
    .join("");

  renderStats();
};

const renderStats = () => {
  const { lines, qty, total } = calcStats();
  cartLinesBadgeEl.textContent = `${lines} dòng`;
  cartQtyBadgeEl.textContent = `${qty} món`;
  statLinesEl.textContent = lines;
  statQtyEl.textContent = qty;
  statTotalEl.textContent = formatVND(total);
};

const addToCart = (id) => {
  const key = String(id);
  if (!cart[key]) cart[key] = { productId: id, quantity: 1 };
  else cart[key].quantity++;
  saveCart();
  renderCart();
};

const incQty = (id) => {
  cart[id].quantity++;
  saveCart();
  renderCart();
};

const decQty = (id) => {
  if (!cart[id]) return;
  if (cart[id].quantity === 1) delete cart[id];
  else cart[id].quantity--;
  saveCart();
  renderCart();
};

const removeFromCart = (id) => {
  delete cart[id];
  saveCart();
  renderCart();
};

const saveCart = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
};

const loadCart = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) cart = JSON.parse(data);
};

productsGridEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  if (btn.dataset.action === "add") addToCart(Number(btn.dataset.id));
});

cartTbodyEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = btn.dataset.id;
  if (btn.dataset.action === "inc") incQty(id);
  if (btn.dataset.action === "dec") decQty(id);
  if (btn.dataset.action === "remove") removeFromCart(id);
});

clearCartBtn.addEventListener("click", () => {
  const checked = document.querySelectorAll(".select-item:checked");

  if (checked.length > 0) {
    if (confirm("Xóa các sản phẩm đã chọn?")) {
      checked.forEach((cb) => delete cart[cb.value]);
    }
  } else {
    if (getCartItems().length === 0) return alert("Giỏ hàng trống");
    if (confirm("Bạn muốn xóa sạch giỏ hàng?")) {
      cart = {};
    }
  }
  saveCart();
  renderCart();
});

loadCart();
renderProducts();
renderCart();
