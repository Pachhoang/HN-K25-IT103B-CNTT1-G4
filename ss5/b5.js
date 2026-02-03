let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];
let bookCode;
let nameOfTheBook;
let typeOfBook;
let newTypeBook;
let quantityOfBook;

let programCount = 0;
let min = 0;

let bookIn = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay ?");
while (bookIn < 1 || isNaN(bookIn)) {
    alert("Số sách cần cập nhập phải là số nguyên dương !");
    bookIn = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay ?");
}
for (let i = 0; i < bookIn; i++) {
    while (true) {
        bookCode = prompt(`Vui lòng nhập mã sách thứ ${i + 1}:`);
        if (bookCode === "") {
            alert("Mã sách bạn nhập phải là một chuỗi ! không được nhập rỗng");
            continue;
        }
        if (booksId.includes(bookCode)) {
            alert("Mã sách không được trùng !");
            continue;
        }
        break;
    }
    nameOfTheBook = prompt(`Vui lòng nhập tên sách thứ ${i + 1}:`);
    while (nameOfTheBook === "") {
        alert("Tên sách không được để trống !");
        nameOfTheBook = prompt(`Vui lòng nhập tên sách thứ ${i + 1}:`);
    }
    typeOfBook = prompt(`Nhập các thể loại của sách thứ ${i + 1} (các thể loại cách nhau bởi dấu phẩy): `);
    while (typeOfBook === "") {
        alert("Thể loại sách không được để trống !");
        typeOfBook = prompt(`Nhập các thể loại của sách thứ ${i + 1} (các thể loại cách nhau bởi dấu phẩy): `);
    }
    newTypeBook = typeOfBook.trim().toLowerCase();
    if ((newTypeBook.split(",")).includes("lập trình")) {
        programCount++;
    }
    quantityOfBook = +prompt(`Vui lòng nhập số lượng tồn kho của sách thứ ${i + 1}: `);
    while (quantityOfBook < 0) {
        alert("Số bạn nhập lượng tồn kho phải lớn hơn hoặc bằng 0 !");
        quantityOfBook = +prompt(`Vui lòng nhập số lượng tồn kho của sách thứ ${i + 1}: `);
    }
    booksId.push(bookCode);
    booksName.push(nameOfTheBook);
    booksCategory.push(typeOfBook);
    inventoryQuantity.push(quantityOfBook);

}
min = inventoryQuantity[0];
for (let ele of inventoryQuantity) {
    if (ele < min) {
        min = ele;
    }
}
console.log(`Tổng số sách thuộc thể loại "Lập trình": ${programCount}`);
console.log("Danh sách mã sách thuộc cả hai thể loại `JavaScript và `Web`:");
for (let index in booksCategory) {
    if ((booksCategory[index].split(",").map(c => c.trim())).includes("JavaScript") &&
        (booksCategory[index].split(",").map(c => c.trim())).includes("Web")) {
        console.log(booksId[index]);
    }
}
console.log(`Loại sách có số lượng tồn kho thấp nhất: `);
console.log(`Mã sách: ${booksId[inventoryQuantity.indexOf(min)]}, Tên sách: ${booksName[inventoryQuantity.indexOf(min)]}, Tồn kho: ${min}`);