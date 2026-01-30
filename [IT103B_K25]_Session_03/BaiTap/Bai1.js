let bookTurn = +prompt("Hôm nay có bao nhiêu lượt mượn sách ?");
if (bookTurn < 0) {
    Math.abs(bookTurn);
}
let borrow = 0;
for (let i = 0; i <= bookTurn; i = i + 1) {
    let borrowBookName = prompt("Vui lòng nhập tên người mượn");
    console.log(borrowBookName);
    let bookName = prompt("Vui lòng nhập tên sách");
    console.log(bookName);
    let NumberDaysBorrowed = +prompt("Vui lòng nhập Số ngày mượn (từ 1 đến 30 ngày)");
    if (NumberDaysBorrowed > 14) {
        document.write("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)" + "<br>");
        console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)" );
    } else {
        document.write("Mượn thành công" + "<br>");
        console.log("Mượn thành công");
        borrow += 1;
    }
}
document.write("Tổng số lượt mượn" + borrow + "<br>");
console.log("Tổng số lượt mượn" + borrow);
