const products = [
    { id: 1, name: "Bánh Chưng Trnah khúc", price: 15000 },
    { id: 2, name: "Giò Lụa Ước Lễ", price: 18000 },
    { id: 3, name: "Cành Đào Nhật Tân", price: 15000 },
    { id: 4, name: "Mứt Tết Thực Cẩm", price: 15000 },
    { id: 5, name: "Lì Xì May Mắn", price: 15000 },
    { id: 6, name: "Dưa Hấu Khắc Chữ", price: 15000 },
];
let productList = document.getElementById("product-list");

let cartList = document.getElementById("cart-list");
let sumOfCart = document.querySelector(".cart-summary");
let card = [];

// localStorage.setItem("Products", JSON.stringify(products));
// const products  = JSON.parse(localStorage.getItem("Products")) || [];

let updateCart = (arr) => {
    if(arr.length === 0){
        cartList.innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
    }else{
        let line = "";
        card.forEach(c => {

        })
    }
}
let updateSumOfCart = (arr) => {
    if(arr.length === 0){
        sumOfCart.innerHTML =  `
        <p>Tổng cộng:</p>
                    <h3 id="total-price">210.000đ</h3>
                    <button id="btn-checkout" class="btn-checkout"
                        onclick="alert('Cảm ơn bạn đã mua hàng! Chúc mừng năm mới!')">Thanh Toán</button>
        `;
    }
}

productList.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-add")){
        
    }
});

let renderAllProduct = (arr) => {
    let line = "";
    products.forEach(c => {
        line += `
            <div class="product-card">
                    <img src="/img/banhchung.webp" alt="">
                    <h3>${c.name}</h3>
                    <p class="price">${c.price.toLocaleString("vi-VN")}</p>
                    <button class="btn-add" id="btn-add-${c.id}">Thêm vào giỏ</button>
                </div>
        `;
    });
    productList.innerHTML = line;
    updateCart(card);
    
}

renderAllProduct(productList);
