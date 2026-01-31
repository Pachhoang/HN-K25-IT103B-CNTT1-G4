let totalRequests = 0;
let successCount = 0;
let rejectCount = 0;
let pendingCount = 0;

while (true) {
  let continueQuestion = prompt(
    "Có yêu cầu đặt mượn trước mới không? (có/không)",
  );

  if (continueQuestion === null) {
    break;
  }

  continueQuestion = continueQuestion.toLowerCase();

  if (continueQuestion === "không") {
    break;
  }

  if (continueQuestion !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'!");
    continue;
  }

  let readerName = prompt("Nhập tên bạn đọc:");
  let bookId = prompt("Nhập mã sách muốn đặt trước:");
  let bookName = prompt("Nhập tên sách (tham khảo):");

  let waitDays;
  while (true) {
    waitDays = +prompt("Nhập số ngày dự kiến chờ (>=1):");
    if (!isNaN(waitDays) && waitDays >= 1) {
      break;
    }
    console.log("Số ngày chờ không hợp lệ, nhập lại!");
  }

  let priority;
  while (true) {
    priority = +prompt(
      "Nhập mức ưu tiên:\n1 - Sinh viên\n2 - Giảng viên / Nghiên cứu sinh\n3 - Nhân viên thư viện / Đặc cách",
    );
    if (priority === 1 || priority === 2 || priority === 3) {
      break;
    }
    console.log("Ưu tiên không hợp lệ, chỉ nhập 1, 2 hoặc 3!");
  }

  totalRequests++;

  if (waitDays > 45) {
    console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
    rejectCount++;
  } else if (priority === 3) {
    console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
    successCount++;
  } else if (priority === 2 && waitDays <= 30) {
    console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
    successCount++;
  } else if (priority === 1 && waitDays <= 21) {
    console.log("Đặt trước thành công");
    successCount++;
  } else {
    console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
    pendingCount++;
  }
}

console.log(`Tổng số yêu cầu đã xử lý: ${totalRequests}`);
console.log(`Số yêu cầu đặt trước thành công: ${successCount}`);
console.log(`Số yêu cầu bị từ chối: ${rejectCount}`);
console.log(`Số yêu cầu chờ xét duyệt: ${pendingCount}`);
