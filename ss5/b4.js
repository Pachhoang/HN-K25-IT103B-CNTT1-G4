let booksId = [];
let booksName = [];
let bookStatus = [];

let n;

while (true) {
    n = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));
    if (isNaN(n) || n < 1) {
        console.log("Vui lòng nhập số hợp lệ");
    } else break;
}

for (let i = 0; i < n; i++) {

    let id;
    while (true) {
        id = prompt("Nhập mã sách:");
        if (id && id.trim() !== "") break;
        console.log("Không được để trống!");
    }
    booksId.push(id);

    let name;
    while (true) {
        name = prompt("Nhập tên sách:");
        if (name && name.trim() !== "") break;
        console.log("Không được để trống!");
    }
    booksName.push(name);

    let choice, status;
    while (true) {
        choice = parseInt(prompt("1.Hỏng nhẹ  2.Hỏng nặng  3.Cần sửa gấp"));
        if (choice >= 1 && choice <= 3) break;
    }

    if (choice === 1) status = "Hỏng nhẹ";
    if (choice === 2) status = "Hỏng nặng";
    if (choice === 3) status = "Cần sửa gấp";

    bookStatus.push(status);
}

console.log("===== DANH SÁCH BAN ĐẦU =====");
for (let i = 0; i < booksId.length; i++) {
    console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
}

while (true) {

    let option = parseInt(prompt(
        "\n1.Sửa tình trạng\n2.Xóa sách\n0.Kết thúc"
    ));

    if (option === 0) break;

    if (option === 1) {

        let id = prompt("Nhập mã sách cần sửa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log("Không tìm thấy!");
        } else {

            let choice, status;
            while (true) {
                choice = parseInt(prompt(
                    "1.Hỏng nhẹ 2.Hỏng nặng 3.Cần sửa gấp 4.Đã sửa xong 5.Loại bỏ"
                ));
                if (choice >= 1 && choice <= 5) break;
            }

            if (choice === 1) status = "Hỏng nhẹ";
            if (choice === 2) status = "Hỏng nặng";
            if (choice === 3) status = "Cần sửa gấp";
            if (choice === 4) status = "Đã sửa xong";
            if (choice === 5) status = "Loại bỏ";

            bookStatus[index] = status;
            console.log("Đã cập nhật!");
        }
    }

    if (option === 2) {

        let id = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            console.log("Không tìm thấy!");
        } else {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
            console.log("Đã xóa!");
        }
    }

    console.log("===== DANH SÁCH HIỆN TẠI =====");
    for (let i = 0; i < booksId.length; i++) {
        console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
    }
}

let repaired = 0;
let removed = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") repaired++;
    if (bookStatus[i] === "Loại bỏ") removed++;
}

console.log("\n===== BÁO CÁO CUỐI =====");
console.log("Tổng số sách còn lại: " + booksId.length);
console.log("Đã sửa xong: " + repaired);
console.log("Loại bỏ: " + removed);

for (let i = 0; i < booksId.length; i++) {
    console.log((i + 1) + ". " + booksId[i] + " - " + booksName[i] + " - " + bookStatus[i]);
}
