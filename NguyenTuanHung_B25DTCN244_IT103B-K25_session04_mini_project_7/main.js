const DB_KEY = "products_data";
let products = [];
let idCounter = 1;
let editId = null;

const form = document.getElementById("productForm");
const title = document.getElementById("formTitle");
const btnSubmit = document.getElementById("submitBtn");
const btnCancel = document.getElementById("cancelBtn");
const btnClear = document.getElementById("clearAllBtn");

const fields = {
  name: document.getElementById("productName"),
  cat: document.getElementById("productCategory"),
  price: document.getElementById("productPrice"),
  qty: document.getElementById("productQuantity"),
  desc: document.getElementById("productDescription"),
};

const searchIn = document.getElementById("searchInput");
const filterIn = document.getElementById("filterCategory");
const tableBody = document.getElementById("productTableBody");
const emptyView = document.getElementById("emptyState");

const formatMoney = (amount) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    amount,
  );

const save = (data, count) =>
  localStorage.setItem(
    DB_KEY,
    JSON.stringify({ products: data, idCounter: count }),
  );

const load = () => {
  const data = JSON.parse(localStorage.getItem(DB_KEY));
  if (data) {
    products = data.products || [];
    idCounter = data.idCounter || 1;
  }
};

const updateUIStats = (list) => {
  document.getElementById("totalProducts").textContent = list.length;
  const totalVal = list.reduce((sum, p) => sum + p.price * p.qty, 0);
  document.getElementById("totalValue").textContent = formatMoney(totalVal);
  document.getElementById("totalQuantity").textContent = list.reduce(
    (sum, p) => sum + p.qty,
    0,
  );
};

const resetForm = () => {
  form.reset();
  title.textContent = "Thêm Sản Phẩm Mới";
  btnSubmit.innerHTML = "➕ Thêm Sản Phẩm";
  btnCancel.style.display = "none";
  editId = null;
};

const render = (list) => {
  tableBody.innerHTML = "";
  list.length === 0
    ? emptyView.classList.add("show")
    : emptyView.classList.remove("show");

  list.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${p.id}</td>
            <td><strong>${p.name}</strong></td>
            <td>${p.cat}</td>
            <td class="price">${formatMoney(p.price)}</td>
            <td class="${p.qty < 10 ? "low-stock" : ""}">${p.qty}</td>
            <td class="description">${p.desc || "..."}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editItem(${p.id})">✏️ Sửa</button>
                    <button class="btn-delete" onclick="removeItem(${p.id})">🗑️ Xóa</button>
                </div>
            </td>`;
    tableBody.appendChild(tr);
  });
  updateUIStats(products);
};

const handleAction = (id, payload) => {
  if (id) {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { ...products[index], ...payload };
  } else {
    products.push({ id: idCounter++, ...payload });
  }
  save(products, idCounter);
  render(products);
  resetForm();
};

form.onsubmit = (e) => {
  e.preventDefault();
  const payload = {
    name: fields.name.value.trim(),
    cat: fields.cat.value,
    price: parseFloat(fields.price.value),
    qty: parseInt(fields.qty.value),
    desc: fields.desc.value.trim(),
  };
  if (payload.price < 0 || payload.qty < 0)
    return alert("Dữ liệu không hợp lệ");
  handleAction(editId, payload);
};

window.removeItem = (id) => {
  const item = products.find((p) => p.id === id);
  if (confirm(`Xóa "${item.name}"?`)) {
    products = products.filter((p) => p.id !== id);
    if (editId === id) resetForm();
    save(products, idCounter);
    render(products);
  }
};

window.editItem = (id) => {
  const p = products.find((p) => p.id === id);
  if (!p) return;
  editId = id;
  fields.name.value = p.name;
  fields.cat.value = p.cat;
  fields.price.value = p.price;
  fields.qty.value = p.qty;
  fields.desc.value = p.desc;

  title.textContent = "Chỉnh Sửa Sản Phẩm";
  btnSubmit.innerHTML = "💾 Cập Nhật";
  btnCancel.style.display = "block";
  document
    .querySelector(".form-section")
    .scrollIntoView({ behavior: "smooth" });
};

const onFilter = (key, category) => {
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(key.toLowerCase()) &&
      (!category || p.cat === category),
  );
  render(filtered);
};

searchIn.oninput = () => onFilter(searchIn.value, filterIn.value);
filterIn.onchange = () => onFilter(searchIn.value, filterIn.value);

btnClear.onclick = () => {
  if (confirm("Xóa sạch danh sách?")) {
    products = [];
    idCounter = 1;
    save(products, idCounter);
    render(products);
    resetForm();
  }
};

btnCancel.onclick = () => resetForm();

const init = () => {
  load();
  render(products);
};

init();
