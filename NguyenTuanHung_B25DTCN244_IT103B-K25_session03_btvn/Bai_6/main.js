let totalFeedback = 0;

let seriousComplaintCount = 0;
let mediumComplaintCount = 0;
let lightComplaintCount = 0;
let suggestionCount = 0;
let positiveFeedbackCount = 0;

while (true) {
  let continueQuestion = prompt(
    "Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)",
  );

  if (continueQuestion === null) break;

  continueQuestion = continueQuestion.toLowerCase();

  if (continueQuestion === "không") {
    break;
  }

  if (continueQuestion !== "có") {
    console.log("Vui lòng nhập 'có' hoặc 'không'!");
    continue;
  }

  let readerName;
  while (true) {
    readerName = prompt("Nhập tên bạn đọc:");
    if (readerName && readerName.trim() !== "") break;
    console.log("Tên bạn đọc không được để trống!");
  }

  let readerCardId = prompt("Nhập mã thẻ bạn đọc (có thể để trống):");

  let feedbackType;
  while (true) {
    feedbackType = +prompt(
      "Loại phản hồi:\n1 - Phàn nàn / Khiếu nại\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực",
    );
    if (feedbackType === 1 || feedbackType === 2 || feedbackType === 3) break;
    console.log("Loại phản hồi không hợp lệ!");
  }

  let severityLevel = 0;
  if (feedbackType === 1) {
    while (true) {
      severityLevel = +prompt(
        "Mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng",
      );
      if (severityLevel === 1 || severityLevel === 2 || severityLevel === 3)
        break;
      console.log("Mức độ không hợp lệ!");
    }
  }

  let content = prompt("Nhập nội dung ngắn gọn (tham khảo):");

  totalFeedback++;

  if (feedbackType === 1 && severityLevel === 3) {
    console.log("Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
    seriousComplaintCount++;
  } else if (feedbackType === 1 && severityLevel === 2) {
    console.log("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
    mediumComplaintCount++;
  } else if (feedbackType === 1 && severityLevel === 1) {
    console.log("Xử lý ngay tại quầy - Khiếu nại nhẹ");
    lightComplaintCount++;
  } else if (feedbackType === 2) {
    console.log("Cảm ơn! Đề xuất đã được ghi nhận");
    suggestionCount++;
  } else if (feedbackType === 3) {
    console.log("Cảm ơn bạn đã phản hồi tích cực!");
    positiveFeedbackCount++;
  }
}

console.log(`Tổng số phản hồi/khiếu nại đã xử lý: ${totalFeedback}`);
console.log(`Số khiếu nại nghiêm trọng (mức 3): ${seriousComplaintCount}`);
console.log(`Số khiếu nại trung bình (mức 2): ${mediumComplaintCount}`);
console.log(`Số khiếu nại nhẹ (mức 1): ${lightComplaintCount}`);
console.log(`Số đề xuất cải thiện: ${suggestionCount}`);
console.log(`Số phản hồi tích cực: ${positiveFeedbackCount}`);
