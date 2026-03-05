const product = [
     {id: 1, name: "Bánh Chưng", price: 150000},
     {id: 2, name: "Giò Lụa", price: 180000},
     {id: 3, name: "Cành Đào", price: 500000},
     {id: 4, name: "Mứt Tết", price: 120000},
     {id: 5, name: "Bao Lì Xì", price: 250000},
     {id: 6, name: "Dưa Hấu Tết", price: 80000},
];
let setId = 6;
let clickConfim = (event) => {
     let result = "";
     event.preventDefault();
     let newObject = {
          id: ++setId,
          name: document.getElementById("product-name").value,
          price: +document.getElementById("product-price").value,
     }
     product.push(newObject);
     for (let i = 0; i < product.length; i++) {
          result += `<li class = "product">Tên sản phẩm: ${product[i].name} - Giá tiền: ${product[i].price}</li>`;
     }
     document.getElementById("product-list").innerHTML = result;
}
