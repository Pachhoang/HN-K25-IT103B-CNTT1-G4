let bookID=[];
let bookName=[];
let inventoryQuantity=[];
let n;
while(true){
    n=parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));
    if(n<1||isNaN(n) ){
        alert("Vui lòng nhập số hợp lệ");
    }else{
        break;
    }
}
for(let i=0;i<n;i++){
    let id;
    while(true){
        id=prompt("Nhập mã sách (không được để trống)")
        if(id===null||id.trim()==""){
            alert("Mã sách không được để trống");
        }else{
            break;
        }
    }
    bookID.push(id)
    let name;
    while(true){
        name=prompt("Nhập tên sách sách (không được để trống)")
        if(name===null||name.trim()==""){
            alert("Tên sách không được để trống");
        }else{
            break;
        }
    }
    bookName.push(name)
    let quantity;
    while(true){d
        quantity=prompt("số lượng tồn kho hiện tại (số nguyên ≥ 0)")
        if(quantity<0||isNaN(quantity)){
            alert("Vui lòng nhập số hợp lệ");
        }else{
            break;
        }
    }
    inventoryQuantity.push(quantity)
}
console.log("Danh sách sách cần xem xét bổ sung"+(bookID.length + "loại")+":");
let lowStockCount = 0;
let outOfStock = "";

for (let i = 0; i < bookID.length; i++) {
    console.log(
        (i + 1) + ". Mã: " + bookID[i] +
        " - Tên: " + bookName[i] +
        " - Còn: " + inventoryQuantity[i] + " bản"
    );

    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }

    if (inventoryQuantity[i] === 0) {
        outOfStock += bookID[i] + " ";
    }
}
console.log("Số sách có tồn kho ≤ 5 bản: " + lowStockCount + " loại");
console.log("Các mã sách đã hết hàng (0 bản): " + outOfStock.trim());





