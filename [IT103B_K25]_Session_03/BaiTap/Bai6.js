let continueToCheck = confirm("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không) ?");

let numberSeriousComplaints = 0;
let averageNumberComplaints = 0;
let numberComplaintsLight = 0;
let numberImprovementSuggestions = 0;
let numberPositiveResponses = 0;
let notification = "";
let count = 0;
let severityLevel;

while (continueToCheck) {
    count++;
    let bookReader = prompt("Vui lòng nhập tên bạn đọc").trim().toLowerCase();
    while (bookReader === "") {
        alert("Tên không được để trống");
        bookReader = prompt("Vui lòng  NHẬP LẠI TÊN BẠN ĐỌC").trim().toLowerCase();
    }
    let bookCode = prompt("Vui lòng nhập mã thẻ !");
    while (bookCode === "") {
        alert("Mã thẻ bạn nhập để trống !");
        bookCode = prompt("Vui lòng NHẬP LẠI MÃ THẺ CỦA BẠN!")
    }
    let responseType = +prompt(`    Vui lòng nhập phản hồi của bạn
    I - 1 = phàn nàn, khiếu nại
    II - 2 = Đề xuất cải thiện
    III - 3 = phản hồi tích cực / khen ngợi`);
    while((responseType < 1 || responseType > 3 )|| isNaN(responseType) ){
        alert("Chỉ được nhập từ 1 -> 3 và chỉ nhập SỐ");
        responseType = +prompt(`    Vui lòng nhập LẠI PHẢN HỒI của bạn
        I - 1 = phàn nàn, khiếu nại
        II - 2 = Đề xuất cải thiện
        III - 3 = phản hồi tích cực / khen ngợi`);
    }
    if (responseType === 1) {
        severityLevel = +prompt(`   Vui lòng nhập mức độ nghiêm trọng
        1 = Nhẹ (có thể xử lý nhanh) 
        2 = Trung bình 
        3 = Nghiêm trọng (cần báo cáo lãnh đạo)`);
        while(severityLevel < 1 || severityLevel > 3 || isNaN(severityLevel)){
            alert("Chỉ được nhập từ 1 -> 3 và chỉ nhập SỐ");
            severityLevel = +prompt(`   Vui lòng NHẬP LẠI mức độ nghiêm trọng
        1 = Nhẹ (có thể xử lý nhanh) 
        2 = Trung bình 
        3 = Nghiêm trọng (cần báo cáo lãnh đạo)`);  
        }
        switch (severityLevel) {
            case 1:
                numberComplaintsLight++;
                alert("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
                console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
                notification = "→ Xử lý ngay tại quầy - Khiếu nại nhẹ";
                break;
            case 2:
                averageNumberComplaints++;
                alert("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
                console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
                notification = "→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình";
                break;
            case 3:
                numberSeriousComplaints++;
                alert("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
                console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
                notification = "→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng";
                break;
            default:
                alert("Không có mức độ từ 3 trở nên !!");
                notification = "Không có mức độ từ 3 trở nên !!";
        }
    } else if (responseType === 2) {
        numberImprovementSuggestions++;
        alert("→ Cảm ơn! Đề xuất đã được ghi nhận");
        console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
        notification = "→ Cảm ơn! Đề xuất đã được ghi nhận";
    } else if(responseType === 3){
        numberPositiveResponses++;
        alert("→ Cảm ơn bạn đã phản hồi tích cực!");
        console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
        notification = "→ Cảm ơn bạn đã phản hồi tích cực!";
    }
    document.write(`    ------------- Thông tin khiếu nại thứ ${count} ---------------- ` + "<br>");
    document.write(`    Tên người đọc : ${bookReader}` + "<br>");
    document.write(`    Mã thẻ người đó đọc: ${bookCode}` + "<br>");
    document.write(`    Loại phản hồi: ${responseType}` + "<br>");
    document.write(`    Mức độ cảnh cáo: ${severityLevel}` + "<br>");
    document.write(`    Nội dung: ${notification}` + "<br>");
    document.write(`    ---------------------------------------------------------------` +"<br>");
    continueToCheck = confirm("Có TIẾP TỤC khiếu nại/phản hồi mới từ bạn đọc không? (có/không) ?");
}
console.log(`   ---------------- Thông tin Khiếu nại -----------------
Tổng số phản hồi/Khiếu nại đã xử lý: ${count}
Số khiếu nại mức nghiêm trọng (mức 3): ${numberSeriousComplaints}
Số khiếu nại trung bình (mức 2): ${averageNumberComplaints}
Số khiếu nại nhẹ (mức 1): ${numberComplaintsLight}
Số đề xuất cải thiện: ${numberImprovementSuggestions}
Số phản hồi tích cực: ${numberPositiveResponses}`);