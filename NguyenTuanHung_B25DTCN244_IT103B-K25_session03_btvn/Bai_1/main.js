let borrowNumber = +prompt("Hôm nay có bao nhiêu lượt mượn sách");

if (isNaN(borrowNumber) || borrowNumber <= 0) {
  console.log("Số lượt mượn không hợp lệ");
} else {
  for (let i = 0; i < borrowNumber; i++) {
    let borrowName = prompt("Nhập tên người mượn");
    let bookName = prompt("Nhập tên sách");
    let borrowDay = +prompt("Nhập số ngày mượn (1 - 14)");

    if (borrowDay > 14) {
      console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else if (borrowDay > 0 && borrowDay <= 14) {
      console.log("Mượn thành công");
    } else {
      console.log("Số ngày mượn không hợp lệ");
    }
  }

  console.log(`Tổng số lượt mượn: ${borrowNumber}`);
}
