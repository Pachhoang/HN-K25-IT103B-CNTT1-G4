let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let bookCode;
let theNameOfTheBook;
let theIdOFTheBook;
let overdue;
let overdueOver10Days = 0;
let newCatoget;
let line = "";
let countDayOverSeven = 0;

let bookNoted = +prompt("Hôm nay có bao nhiêu bạn bị ghi nhận quá hạn ?");
while (bookNoted < 1) {
    alert("Số bạn nhập phải là số nguyên dương !");
    bookNoted = +prompt("Hôm nay có bao nhiêu bạn bị ghi nhận quá hạn ?");
}
for (let i = 0; i < bookNoted; i++) {
    while (true) {
        bookCode = prompt("Vui lòng nhập mã thẻ bạn đọc");
        if (readerCardIds.includes(bookCode)) {
            alert("Mã thẻ bạn nhập đã trùng !!!");
            continue;
        }
        if (bookCode === "") {
            alert("Mã thẻ bạn nhập không được rỗng !");
            continue;
        }
        break;
    }
    theNameOfTheBook = prompt("Vui lòng nhập tên bạn đọc");
    while (theNameOfTheBook === "") {
        alert("Tên bạn đọc không được để trống !!");
        theNameOfTheBook = prompt("Vui lòng nhập tên bạn đọc");
    }
    theIdOFTheBook = prompt("Vui lòng nhập chuỗi mã mã sách đang mượn (cách nhau bởi dấu phẩy)");
    while (theIdOFTheBook === "") {
        alert("Chuỗi mã bạn nhập không được để trống !!! ");
        theIdOFTheBook = prompt("Vui lòng nhập chuỗi mã mã sách đang mượn (cách nhau bởi dấu phẩy)");
    }
    overdue = +prompt("Vui lồng nhập số ngày quá hạn");
    while (overdue < 0 || isNaN(overdue)) {
        alert("Số ngày quá hạn phải là số >= 0 và PHẢI LÀ SỐ !!! ");
        overdue = +prompt("Vui lồng nhập số ngày quá hạn");
    }
    if (overdue >= 10) {
        overdueOver10Days++;
    }
    readerCardIds.push(bookCode);
    readerNames.push(theNameOfTheBook);
    borrowedBookCodes.push(theIdOFTheBook);
    overdueDays.push(overdue);
}
console.log(`Danh sách bạn đọc quá hạn (${bookNoted} người):`);
for (let index = 0; index < bookNoted; index++) {
    console.log(`${index + 1}. Mã thẻ: ${readerCardIds[index]} | Tên: ${readerNames[index]} | Sách đang mượn: ${borrowedBookCodes[index]} | Quá hạn: ${overdueDays[index]}`);
}
console.log(`Tổng số bạn đọc quá hạn >= 10 ngày: ${overdueOver10Days} người`);
for (let index in borrowedBookCodes) {
    newCatoget = borrowedBookCodes[index].split(",").map(c => c.trim());
    let hasJS = false;
    let hasPYT = false;
    for (let code of newCatoget) {
        if (code.includes("JS")) hasJS = true;
        if (code.includes("PYT")) hasPYT = true;
    }
    if (hasJS && hasPYT) {
        if (!line.includes(readerCardIds[index])) {
            line += ` ${readerCardIds[index]} `;
        }
    }
}
console.log(`Các bạn đọc đang mượn cả sách JS* và PYT* : ${line}`);
let max = overdueDays[0];
for (let index in overdueDays) {
    if (overdueDays[index] > max) {
        max = overdueDays[index];
    }
    if (overdueDays[index] >= 7) {
        countDayOverSeven++;
    }
}
console.log(`Bạn đọc có số ngày quá hạn cao nhất: ${readerNames[overdueDays.indexOf(max)]} (${max} ngày)`);

if (countDayOverSeven === 0) {
    console.log(`Tình hình trả sách hôm nay khá tốt !`);
} else if (countDayOverSeven <= 4 && countDayOverSeven >= 1) {
    console.log(`Cần gửi nhắc nhở cho một số bạn đọc !`);
} else {
    console.log(`Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay !`);
}





