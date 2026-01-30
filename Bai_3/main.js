let successCount = 0;
let failCount = 0;

while (true) {
  let extendPassQuestion = prompt("Có muốn gia hạn tiếp không? (có/không)");

  if (extendPassQuestion === null) {
    break;
  }

  extendPassQuestion = extendPassQuestion.toLowerCase();

  if (extendPassQuestion === "không") {
    break;
  }

  if (extendPassQuestion !== "có") {
    console.log("Vui lòng nhập có hoặc không!");
    continue;
  }

  let bookReader = prompt("Nhập tên bạn đọc");
  let bookName = prompt("Nhập tên sách");

  let borrowDayNow;
  while (true) {
    borrowDayNow = +prompt("Nhập số ngày mượn hiện tại (>=1)");
    if (!isNaN(borrowDayNow) && borrowDayNow >= 1) {
      break;
    }
    console.log("Số ngày mượn không hợp lệ, nhập lại!");
  }

  let extendBorrowDay;
  while (true) {
    extendBorrowDay = +prompt("Nhập số ngày muốn gia hạn thêm (>=1)");
    if (!isNaN(extendBorrowDay) && extendBorrowDay >= 1) {
      break;
    }
    console.log("Số ngày gia hạn không hợp lệ, nhập lại!");
  }

  let totalBorrowDay = borrowDayNow + extendBorrowDay;

  if (totalBorrowDay > 60) {
    console.log(
      `${bookReader} - ${bookName}: Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa`,
    );
    failCount++;
  } else if (borrowDayNow > 45) {
    console.log(
      `${bookReader} - ${bookName}: Không được gia hạn: Đã mượn quá lâu (>45 ngày)`,
    );
    failCount++;
  } else {
    console.log(`${bookReader} - ${bookName}: Gia hạn thành công`);
    successCount++;
  }
}

console.log("Số lần gia hạn thành công:", successCount);
console.log("Số lần gia hạn thất bại:", failCount);
