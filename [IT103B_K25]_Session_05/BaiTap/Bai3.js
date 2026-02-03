let bookId = [];
let bookName = [];
let inventoryQuantity = [];

let bookCheck = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay ?");
let bookCode;
let nameOfTheBook;
let quantity;
let haveInventoryLessThanFive = 0;
let haveInventoryEqualZero = 0;
let line = "";
while(bookCheck < 1){
    alert("Số nhập phải là số nguyên dương");
    bookCheck = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay ?");
}
for(let i = 0; i < bookCheck ; i++){
    bookCode = prompt("Nhập mã sách").trim();
    while(bookCode === ""){
        alert("Mã sách không được để trống");
        bookCode = prompt("Nhập LẠI MÃ sách");
    }
    nameOfTheBook = prompt("Nhập tên sách").trim();
    while(nameOfTheBook === ""){
        alert("Tên sách không được để trống");
        nameOfTheBook = prompt("Nhập LẠI TÊN sách");
    }
    quantity = +prompt("Vui lòng nhập số lượng tồn kho hiện tại ?");
    while(quantity < 0 ||  isNaN(quantity)){
        alert("Số lượng sách phải lớn hơn 0 !");
        quantity = +prompt("Vui lòng NHẬP LẠI số lượng tồn kho hiện tại ?");
    }
    if(quantity <= 5){
        haveInventoryLessThanFive++;
    }
    bookId.push(bookCode);
    bookName.push(nameOfTheBook);
    inventoryQuantity.push(quantity);
}
console.log(`Danh sách sách cần xem xét bổ sung (${bookCheck} loại):`);
for(let i = 0; i < bookCheck; i++){
     console.log(`${i + 1}. Mã: ${bookId[i]} - Tên: ${bookName[i]} - Còn: ${inventoryQuantity[i]} bản`)
}
console.log(`Số sách có tồn kho <=5 bản: ${haveInventoryLessThanFive}`);
for(i = 0; i < bookCheck; i++){
    if(inventoryQuantity[i] === 0){
        haveInventoryEqualZero++;
        line += ` ${bookId[i]} `;
    }
}
console.log(`Các mã sách đã hết hàng (0 bản): ${line}`);