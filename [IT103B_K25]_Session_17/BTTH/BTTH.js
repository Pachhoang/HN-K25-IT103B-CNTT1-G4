let product = [
    { id: 1, name: "Bánh Chưng", price: 150000, img: "./source/BanhMi.jpg" },

    { id: 2, name: "Giò Lụa", price: 180000, img: "./source/BaMia.jpg" },

    { id: 3, name: "Cành Đào", price: 500000, img: "./source/CanhDao.jpg" },

    { id: 4, name: "Mứt Tết", price: 120000, img: "./source/Mut.jpg" },

    { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./source/tocNgheo.jpg" },

    { id: 6, name: "Dưa Hấu", price: 60000, img: "./source/KhoGa.jpg" }

];
const cart = [
    // { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000, quantity: 1, img: "./source/BanhMi.jpg" },
    // { id: 2, name: "Giò Lụa", price: 180000, quantity: 1, img: "./source/BaMia.jpg" },
]
let localProduct;
let localCart;
function autoSave() {

    if (!localStorage.getItem("product")) {
        localStorage.setItem("product", JSON.stringify(product));
    }

    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    localProduct = JSON.parse(localStorage.getItem("product"));
    localCart = JSON.parse(localStorage.getItem("cart"));

}

let renderProducts = () => {
    let str = "";
    for (let i = 0; i < localProduct.length; i++) {
        str += `<div class="product-card">
                    <img src="${localProduct[i].img}" alt="">
                    <h3>${localProduct[i].name}</h3>
                    <p class="price">${localProduct[i].price.toLocaleString("vi-VN")} đ</p>
                    <button class="btn-add" onclick ="addToCart(${i})">Thêm vào giỏ</button>
                </div>`;
    }
    document.getElementById("product-list").innerHTML = str;
}
autoSave();
renderProducts();

// hiển thị danh sách sản phẩm giỏ hàng
let renderCart = (cart) => {
    let result = "";
    if (cart.length === 0) {
        document.getElementById("cart-list").innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
    } else {
        for (let i = 0; i < cart.length; i++) {
            result += `<li>
                        <span class="cart-item-name">${cart[i].name}</span>
                        <span>SL:${cart[i].quantity}</span>
                        <div>
                            <span class="cart-item-price">${cart[i].price.toLocaleString("vi-VN")} đ</span>
                            <button class="btn-remove" onclick = "deleteProduct(${i})">X</button>
                        </div>
                    </li>`;
        }
        document.getElementById("cart-list").innerHTML = result;
    }
    renderCartSumary(localCart);
}
renderCart(localCart);
// chức năng thêm sản phẩm vào mảng !
function addToCart(index) {
    let item = { ...localProduct[index], quantity: 1 };
    let resultIndex = localCart.findIndex(c => c.name === localProduct[index].name);
    if (resultIndex !== -1) {
        localCart[resultIndex].quantity++;
        localCart[resultIndex].price += localProduct[index].price;
    } else {
        localCart.push(item);
        console.log(cart);
    }
    localStorage.setItem("product", JSON.stringify(localProduct));
    localStorage.setItem("cart", JSON.stringify(localCart));
    renderCart(localCart);
    renderCartSumary(localCart);
}
// chức năng xóa phần tử ra khỏi mảng aka: COOK
function deleteProduct(index) {
    localCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(localCart));
    renderCart(localCart);
}
//chức năng hiện thị giá tiền AKA" Cập nhập
function renderCartSumary(cart) {
    if (cart.length === 0) {
        document.getElementsByClassName("cart-summary")[0].innerHTML =
            `<p>Tổng cộng:</p>
                    <h3 id="total-price">0 đ</h3>
                    <button id="btn-checkout" class="btn-checkout"
                    onclick="alert('Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!'); resetCart();">Thanh Toán</button> `;

    } else {
        document.getElementsByClassName("cart-summary")[0].innerHTML =
            `<p>Tổng cộng:</p>
                    <h3 id="total-price">${cart.reduce((sum, cur) => sum + cur.price, 0).toLocaleString("vi-VN")} đ</h3>
                    <button id="btn-checkout" class="btn-checkout"
                    onclick="alert('Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!'); resetCart();">Thanh Toán</button> `;
    }

}
// chức năng reset lại mảng
function resetCart() {
    localCart.length = 0;
    localStorage.setItem("cart", JSON.stringify(localCart));
    renderCart(localCart);
}