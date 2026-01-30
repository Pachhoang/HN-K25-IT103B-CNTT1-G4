let extendPass = confirm("Có yêu cầu gia hạn mới không ?");
let numberOfSuccessfulRenewals = 0;
let numberOfFalseRenewals = 0;
let number = 0;
while(extendPass === true){
    number++;
    let bookYouWillNeed = prompt("Vui lòng nhập tên muốn gia hạn");
    let bookName = prompt("Vui lòng nhập tên sách muốn gia hạn");
    let numberOfDaysBorrowed = parseInt(prompt("Vui lòng nhập số ngày đã mượn"));

    while(numberOfDaysBorrowed < 1){
        alert("Số ngày đã mượn của bạn phải lớn hơn 1");
        numberOfDaysBorrowed = +prompt("Vui lòng NHẬP LẠI số ngày đã mượn");
    }

    let numberOfDaysExtend = parseInt(prompt("Vui lòng nhập số ngày muốn gia hạn thêm"));
    while(numberOfDaysExtend < 1){
        alert("Số ngày gia hạn thêm của bạn phải lớn hơn 1");
        numberOfDaysExtend = +prompt("Vui lòng NHẬP LẠI số ngày muốn gia hạn !");
    }
    if (numberOfDaysBorrowed + numberOfDaysExtend > 60){
        numberOfFalseRenewals++;
        alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
    } else if (numberOfDaysBorrowed + numberOfDaysExtend > 45){
        numberOfFalseRenewals++;
        alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
    } else if (numberOfDaysBorrowed + numberOfDaysExtend  <= 30){
        numberOfSuccessfulRenewals++;
        alert("Gia hạn thành công");
    }
    document.write(`Thông tin gia hạn của người thứ ${number} ` + "<br>");
    document.write(`Tên người gia hạn: ${bookYouWillNeed}` + "<br>");
    document.write(`Tên sách mà muốn gia hạn: ${bookName}` + "<br>");
    document.write(`Số ngày đã mượn: ${numberOfDaysBorrowed}` + "<br>");
    document.write(`Số ngày muốn gia hạn thêm: ${numberOfDaysExtend}` + "<br>");
    extendPass = confirm("Có yêu cầu gia hạn mới không ?");
}
console.log(`---- Thống kê ca làm việc -----
    Số lần gia hạn thành công: ${numberOfSuccessfulRenewals}
    Số lần gia hạn KHÔNG thành công: ${numberOfFalseRenewals}`);
