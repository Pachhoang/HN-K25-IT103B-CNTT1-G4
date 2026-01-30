let borrowFirst = confirm("Bạn có yêu cầu đặt mượn trước mới không ?");

let numberOfRequestsProcessed = 0;

let numberRejectedRequests = 0;
let numberSetSuccessfully = 0;
let numberAwaitingApproval = 0;
let result = "";
while(borrowFirst){
    numberOfRequestsProcessed++;
    let readerName = prompt("Vui lòng nhập tên bạn đọc của bạn");
    while (readerName === ""){
        alert("Tên không được để trống");
        readerName = prompt("Vui lòng NHẬP LẠI TÊN CỦA BẠN");
    }
    let bookCodePreOrder = prompt("Vui lòng nhập mã sách muốn đặt trước");
    while (bookCodePreOrder === ""){
        alert("Mã sách không được để trống");
        bookCodePreOrder = prompt("Vui lòng NHẬP LẠI MÃ SÁCH CỦA BẠN");
    }
    let bookName = prompt("Vui lòng nhập Tên sách của bạn").trim().toUpperCase();
    let waitingDate = +prompt ("Vui lòng nhập số ngày chờ dự kiến");
    while(waitingDate < 1){
        alert("Số ngày chờ dự kiến không hợp lý !")
        waitingDate = +prompt ("Vui lòng NHẬP LẠI SỐ NGÀY CHỜ DỰ KIẾN");
    }
    let prioritize = +prompt("Vui lòng nhập ưu tiên với (1 = Sinh viên bình thường)" + "<br>"+" (2 = Giảng viên/Nghiên cứu sinh ) " + "<br>" + "(3 = Nhân viên thư viện / Đặc cách)");
    while(prioritize !== 1 && prioritize !== 2 && prioritize !== 3){
        alert("Số ưu tiên bạn chọn không chính xác !");
        prioritize = +prompt("Vui lòng LẠI ƯU TIÊN (1 - 3) ");
    }
    if(waitingDate > 45){
        numberRejectedRequests++;
        alert("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        result = "Từ chối: Thời gian chờ quá lâu (>45 ngày)";
    } else if(prioritize === 3){
        numberSetSuccessfully++;
        alert("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        result = "Đặt trước thành công - Ưu tiên đặc cách cao nhất";
    } else if(prioritize === 2 && waitingDate <= 30){
        numberSetSuccessfully++;
        alert("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        result = "Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu";
    } else if(prioritize === 1 && waitingDate <= 21){
        numberSetSuccessfully++;
        alert("Đặt trước thành công");
        console.log("Đặt trước thành công");
        result = "Đặt trước thành công";
    } else{
        numberAwaitingApproval++;
        alert("Đặt trước tạm thời - Chờ xét duyệt thêm");
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        result = "Đặt trước tạm thời - Chờ xét duyệt thêm";
    }
    console.log(`--- Thông tin yêu cầu thứ ${numberOfRequestsProcessed} ----
                Tên bạn đọc: ${readerName}
                Mã sách: ${bookCodePreOrder}
                Tên sách: ${bookName}
                số ngày dự kiến chờ: ${waitingDate}
                Kết quả yêu cầu: ${result}
                ------------------------------------------------------------`)
    borrowFirst = confirm("Bạn có yêu cầu đặt mượn trước mới không ?");
}
console.log(`---- Báo cáo chi tiết ----
            Tổng số yêu cầu đã xử lý: ${numberOfRequestsProcessed}
            Só yêu cầu được cài đặt trước thành công: ${numberSetSuccessfully}
            Số yêu cầu bị từ chối: ${numberRejectedRequests}
            Số yêu cầu chờ xét duyệt: ${numberAwaitingApproval}`);