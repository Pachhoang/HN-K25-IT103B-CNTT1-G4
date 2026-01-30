let borrowNumber = +prompt("Hôm nay có bao nhiêu lượt mượn sách");
let lateCount = 0;

if (isNaN(borrowNumber) || borrowNumber <= 0) {
  console.log("Số lượt mượn không hợp lệ");
} else {
  for (let i = 0; i < borrowNumber; i++) {
    let borrowName = prompt("Nhập tên người mượn");
    let bookName = prompt("Nhập tên sách");
    let borrowDay;

    while (true) {
      borrowDay = +prompt("Nhập số ngày mượn (>=1)");
      if (!isNaN(borrowDay) && borrowDay >= 1) {
        break;
      }
      console.log("Số ngày mượn không hợp lệ, nhập lại!");
    }

    if (borrowDay <= 14) {
      console.log("Trả đúng hạn");
    } else if (borrowDay >= 15 && borrowDay <= 21) {
      console.log("Trả muộn nhẹ" + " phạt nhắc nhở");
      lateCount++;
    } else if (borrowDay > 21) {
      console.log("Quá hạn nghiêm trọng" + " cần ghi biên bản phạt");
      lateCount++;
    } else {
      console.log("Số ngày mượn không hợp lệ");
    }
  }

  console.log(`Tổng số lượt mượn: ${borrowNumber}`);
  console.log(`Số lượt trả muộn ${lateCount}`);
}
