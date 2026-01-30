let actualDaysBorrowed = null;
let returnBooks = +prompt("Hôm nay có bao nhiêu lượt trả sách: ");
if (returnBooks < 0) {
    returnBooks = Math.abs(returnBooks);
}
let sumOfReturn = 0;
for (let i = 0; i < returnBooks; i = i + 1) {
    let returnPerson = prompt("Vui lòng nhập tên người trả sách");
    let bookName = prompt("Vui lòng nhập tên sách").trim().toUpperCase();
    actualDaysBorrowed = +prompt("Vui lòng nhập số ngày mượn sách");
    while (1) {
        if (actualDaysBorrowed < 1){
            actualDaysBorrowed = prompt("Số ngày mượn phải lớn hơn hoặc bằng 1");
        }else{
            break;
        }
    }
    document.write(`Tên người trả: ${returnPerson + "<br>"}
                    Tên sách: ${bookName + "<br>"}
                    Số ngày mượn: ${actualDaysBorrowed}` + "<br>");
    if(actualDaysBorrowed  <= 14){
        document.write(`Trả đúng hạn` + "<br>");
    }else if (actualDaysBorrowed >= 15 && actualDaysBorrowed <= 21){
        sumOfReturn++;
        document.write(`Trả muộn nhẹ  ---  Nhớ trả sớm hơn đi ku ` + "<br>");
    }else{
        sumOfReturn++;
        document.write(`Quá hạn nghiêm trọng  ---  Cần phai ghi bản phạt thôi ;-;` + "<br>");
    }
}
console.log(`Tổng số lượt trả sách: ${returnBooks}
Số lượng trả sách muộn: ${sumOfReturn}`)
document.write(`Tổng số lượt trả sách: ${returnBooks}` + "<br>" +
`Số lượng trả sách muộn: ${sumOfReturn}`);