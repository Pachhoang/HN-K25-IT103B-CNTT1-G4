const products = [
{ id: 1, name: "Bánh Chưng", price: 150000 },
{ id: 2, name: "Giò Lua", price: 180000 },
{ id: 3, name: "Canh Đào", price: 500000 },
{ id: 4, name: "Mứt Tết", price: 120000 },
{ id: 5, name: "Bao Li Xi", price: 25000 },
{ id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");

productList.innerHTML = products
  .map(p => `
    <li class="product">
      <p>${p.name}</p>
      <p>${p.price} VND</p>
    </li>
  `)
  .join("");