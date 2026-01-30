let lossCount = 0;
let unavailableCount = 0;
let availableCountNormal = 0;
let availableCountMany = 0;
let totalBook = 0;

while (true) {
  let extendCheckQuestion = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (extendCheckQuestion === null) {
    break;
  }

  extendCheckQuestion = extendCheckQuestion.toLowerCase();

  if (extendCheckQuestion === "không") {
    break;
  }

  if (extendCheckQuestion !== "có") {
    console.log("Vui lòng nhập có hoặc không!");
    continue;
  }

  let bookId;
  while (true) {
    bookId = prompt("Nhập mã sách:");
    if (bookId && bookId.trim() !== "") {
      break;
    }
    console.log("Mã sách không được để trống!");
  }
  let bookName = prompt("Nhập tên sách");

  let bookInStorage;
  while (true) {
    bookInStorage = +prompt("Nhập số lượng thực tế đang có trong kho (>=0)");
    if (!isNaN(bookInStorage) && bookInStorage >= 0) {
      break;
    }
    console.log("Số lượng sách không hợp lệ, nhập lại!");
  }

  let status;
  while (true) {
    status = +prompt("Tình trạng sách (1 - Bình thường), (2 - Mất)");
    if (status === 1 || status === 2) {
      break;
    }
    console.log("Tình trạng sách không hợp lệ, nhập lại!");
  }

  totalBook++;

  switch (status) {
    case 1:
      if (bookInStorage === 0) {
        console.log("Sách hết (vẫn còn trong hệ thống)");
        unavailableCount++;
      } else if (bookInStorage >= 1 && bookInStorage <= 9) {
        console.log("Sách tồn kho bình thường");
        availableCountNormal++;
      } else {
        console.log("Sách tồn kho nhiều");
        availableCountMany++;
      }
      break;
    case 2:
      console.log("Sách bị mất");
      lossCount++;
      break;
  }

  
}

console.log("Tổng số sách đã kiểm kê:", totalBook);
console.log("Số sách mất:", lossCount);
console.log("Số sách hết hàng:", unavailableCount);
console.log("Số sách tồn kho nhiều:", availableCountMany);
console.log("Số sách tồn kho bình thường:", availableCountNormal);
