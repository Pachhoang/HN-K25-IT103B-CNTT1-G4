let booksId = [];
let booksName = [];
let bookStatus = [];

let nameOfTheBook;
let booksCode;
let statusOfTheBook = 0;

let booksCheck = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay");
while (booksCheck < 1 || isNaN(booksCheck)) {
    alert("Số bạn nhập phải là số nguyên dương");
    booksCheck = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay");
}
for (let i = 0; i < booksCheck; i++) {
    booksCode = prompt("Vui lòng nhập mã sách của bạn !");
    while (booksCode === "") {
        alert("Mã sách của bạn không được để trống");
        booksCode = prompt("Vui lòng nhập mã sách của bạn !");
    }
    booksId.push(booksCode);

    nameOfTheBook = prompt("Vui lòng nhập tên sách của bạn !");
    while (nameOfTheBook === "") {
        alert("Tên sách của bạn không được để trống !");
        nameOfTheBook = prompt("Vui lòng nhập tên sách của bạn !");
    }
    booksName.push(nameOfTheBook);


    statusOfTheBook = +prompt(`Vui lòng nhập tình trạng ban đầu (chọn số 1-3)
    1 - Hỏng nhẹ
    2 - Hỏng nặng
    3 - Cần sửa gấp`);
    while (statusOfTheBook > 3 || statusOfTheBook < 1 || isNaN(statusOfTheBook)) {
        alert("Số Bạn nhập chỉ thuộc từ ( 1->3 ) !!!");
        statusOfTheBook = +prompt(`Vui lòng nhập tình trạng ban đầu (chọn số 1-3)
    1 - Hỏng nhẹ
    2 - Hỏng nặng
    3 - Cần sửa gấp`);
    }
    switch (statusOfTheBook) {
        case 1:
            bookStatus.push("Hỏng nhẹ");
            break;
        case 2:
            bookStatus.push("Hỏng nặng");
            break;
        case 3:
            bookStatus.push("Cần sửa gấp");
            break;
    }
}
console.log(`Danh sách hiện tại (${booksCheck} cuốn)`)
for (let i = 0; i < booksCheck; i++) {
    console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
}
alert("Chế độ chỉnh sửa");
let choose;
let codeBookWantToChange;
let newStatus;
let bookHaveFixed = 0;
let bookRemove = 0;

do {
    choose = +prompt(`  ---- MENU CHỈNH SỬA ----
    0. Kết thức và in báo cáo
    1. Sửa tình trạng một cuốn sách
    2. Loại bỏ (Xóa) một cuốn scah khỏi danh sách`);
    switch (choose) {
        case 1:
            codeBookWantToChange = prompt("Vui lòng chọn mã sách cần được sửa");
            while (codeBookWantToChange === "") {
                alert("Mã sách của bạn không được để trống !");
                codeBookWantToChange = prompt("Vui lòng chọn mã sách cần được sửa");
            }
            for (let index in booksId) {
                if (booksId[index] === codeBookWantToChange) {
                    newStatus = +prompt(`    Vui lòng chọn tình trạng mới( 1-5 )
                    1. Hỏng nhẹ
                    2. Hỏng nặng
                    3. Cần sửa gấp
                    4. Đã sửa xong
                    5. Loại bỏ`);
                    while (newStatus < 1 || newStatus > 5 || isNaN(newStatus)) {
                        alert("Số bạn nhập phải thuộc từ (1->5)");
                        newStatus = +prompt(`    Vui lòng chọn tình trạng mới( 1-5 )
                    1. Hỏng nhẹ
                    2. Hỏng nặng
                    3. Cần sửa gấp
                    4. Đã sửa xong
                    5. Loại bỏ`);
                    }
                    switch (newStatus) {
                        case 1:
                            bookStatus.splice(index, 1, "Hỏng nhẹ");
                            break;
                        case 2:
                            bookStatus.splice(index, 1, "Hỏng nặng");
                            break;
                        case 3:
                            bookStatus.splice(index, 1, "Cần sửa gấp");
                            break;
                        case 4:
                            bookStatus.splice(index, 1, "Đã sửa xong");
                            bookHaveFixed++;
                            break;
                        case 5:
                            bookStatus.splice(index, 1, "Loại bỏ");
                            bookRemove++;
                            break;
                    }
                    alert("Chỉnh sửa thành công !");
                }
            }
            break;
        case 2:
            codeBookWantToChange = prompt("Vui lòng chọn mã sách cần được sửa");
            while (codeBookWantToChange === "") {
                alert("Mã sách của bạn không được để trống !");
                codeBookWantToChange = prompt("Vui lòng chọn mã sách cần được sửa");
            }
            for (let index in booksId) {
                if (booksId[index] === codeBookWantToChange) {
                    booksId.splice(index, 1);
                    booksName.splice(index, 1);
                    bookStatus.splice(index, 1);
                }
            }
            --booksCheck;
            alert("Xóa thành công !");
            console.log(`Danh sách hiện tại chỉ còn (${booksCheck} cuốn)`)
            for (let i = 0; i < booksCheck; i++) {
                console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
            }
            break;
        case 0:
            console.log(`Tổng số sách còn lại: ${booksId.length}
Số sách đã "Đã sửa xong": ${bookHaveFixed}
Số sách "Loại bỏ": ${bookRemove}
Danh sách các sách còn lại: `);
            for (let i = 0; i < booksCheck; i++) {
                console.log(`${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`);
            }
            break;
        default:
            alert("Số bạn chọn phải từ (0 -> 2)");
    }
} while (choose !== 0);