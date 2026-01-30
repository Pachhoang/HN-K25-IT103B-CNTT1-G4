let bookInventory = confirm("Tiếp tục kiểm kê sách tiếp theo hay không ?");

let numberBook = 0;
let numberLostBooks = 0;
let bookIsOutStock = 0;
let inventoryBooks = 0;
let counter = 0
while(bookInventory){
    counter++;
    let bookId = prompt("Vui lòng nhập ID sách");
    while(bookId === ""){
        alert("ID sách không được để trống");
        bookId = prompt("Vui lòng nhập lại ID sách của bạn");
    }
    let bookName = prompt("Vui lòng nhập tên sách").trim().toUpperCase();
    while(bookName === ""){
        alert("ID sách không được để trống");
        bookName = prompt("Vui lòng nhập lại tên sách của bạn");
    }
    let quantityBook = +prompt("Vui lòng nhập số lượng sách phải >= 0");
    while(quantityBook < 0){
        alert("Số lượng sách khai báo của bạn phải lớn hơn 0 và không được để trống!");
        quantityBook = +prompt("Vui lòng NHẬP LẠI SỐ lượng sách !");
    }
    let bookCondition = +prompt("Bui lòng nhập (1 - Bình thường [Có thể cho mượn]  2- Mất [Không còn trong trong kho] )");
    while(bookCondition !== 1 && bookCondition !== 2){
        alert("Số bạn chọn không chính xác");
        bookCondition = +prompt("Bui lòng NHẬP LẠI (1 - Bình thường [Có thể cho mượn]  2- Mất [Không còn trong trong kho] )");
    }
    if (bookCondition === 2){
        numberLostBooks++;
        document.write("Sách mất" + "<br>");
    } else if(bookCondition === 1 && quantityBook === 0){
        bookIsOutStock++;
        document.write("Sách hết" + "<br>");
    } else if(bookCondition === 1 && quantityBook >= 10){
        inventoryBooks++;
        document.write("Số sách tồn kho nhiều" + "<br>");
    } else if(bookCondition === 1 && (quantityBook >= 1 || quantityBook <= 9)){
        inventoryBooks++;
        document.write("Sách tồn kho bình thường" + "<br>");
    }
    document.write(`---- Thông tin cuốn sách thứ ${counter}` + `<br>`);
    document.write(`Mã sách:  ${bookId}` + `<br>`);
    document.write(`Tên sách:  ${bookName}` + `<br>`);
    document.write(`Số lượng thực tế có trong sách:  ${quantityBook}` + `<br>`);
    document.write(`Tình trạng sách:  ${bookCondition}` + `<br>`);
    bookInventory = confirm("Tiếp tục kiểm kê sách tiếp theo hay không ?");
}
console.log(`--- Kiểm kê sách ---
            Tổng số sách đã kiểm kê: ${numberBook}
            Số sách mất: ${numberLostBooks} cuốn
            Số sách hết hàng: ${bookIsOutStock} cuốn`);