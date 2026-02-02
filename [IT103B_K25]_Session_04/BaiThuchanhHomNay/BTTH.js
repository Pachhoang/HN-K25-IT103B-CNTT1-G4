let account = prompt("Mời bạn nhập tài khoản ").trim().toLowerCase();
let password = prompt("Mời bạn nhập mật khẩu").trim().toLowerCase();
let pass = true;
let count = 3;
let choose = 0;
let lineSome;

while (true) {
    if (password === "12345" && account === "admin") {
        alert("Đăng nhập thành công");
        pass = true;
        break;
    }
    if (count === 0) {
        alert("Tài khoản của bạn đã bị khóa do đăng nhập sai tận 3 lần !");
        pass = false;
        break;
    }
    if (account !== "admin" && password === "12345") {
        alert(`Sai tài khoản ! Bạn còn ${count} lần thử`);
        count--;
    } else if (password !== "12345" && account === "admin") {
        alert(`Sai mật khẩu ! bạn còn ${count} lần thử`);
        count--;
    } else {
        alert(`Sai cả tài khoản lẫn mật khẩu ! bạn còn ${count} lần thử`);
        count--;
    }
    account = prompt("Mời bạn nhập tài khoản ").trim().toLowerCase();
    password = prompt("Mời bạn nhập mật khẩu").trim().toLowerCase();
}

if (pass) {
    do {
        choose = +prompt(`  ------- HỆ THỐNG QUẢN LÝ THƯ VIỆN -----------
    1. Phân loại mã số sách (Chẵn/lẻ)
    2. Thiết kế sơ đồ kho sách (Dạng lưới)
    3. Dự toán phí bảo trì sách theo năm
    4. Tìm mã số sách may mắn
    5. Thoát
    Vui lòng nhập lựa chọn của bạn (1-5):`);
        switch (choose) {
            case 1:
                let bookCode;
                let evenBook = 0; // chẵn 
                let oddBook = 0;  // lẻ

                alert("Nhập các mã sách vào trong ! nhập 0 khi muốn dừng lại");
                while (true) {

                    bookCode = +prompt("Vui lòng nhập mã sách");

                    if (isNaN(bookCode) || bookCode === "") {
                        alert("Vui lòng nhập số nguyên hợp lệ");
                        continue;
                    }
                    if (bookCode === 0) {
                        alert("Đã phân loại xong! Xem kết quả tại Console (F12).");
                        break;
                    }
                    if (bookCode % 2 === 0) {
                        evenBook++;
                    } else {
                        oddBook++;
                    }

                }
                console.log(`   ---- Kết quả phân loại mã sách ----
    - Tổng số lượng mã sách đã nhập : ${evenBook + oddBook}
    - Số mã chẵn (Sách khoa học): ${evenBook}
    - Số mã lẻ (Sách nghệ thuật): ${oddBook}`);
                break;
            case 2:
                let columnBook = 0;
                let rowBook = 0;
                let flag2 = true;
                rowBook = +prompt("Nhập số hàng của kho:");
                columnBook = +prompt("Nhập số cột của kho:");
                if (rowBook < 0 || columnBook < 0 ) {
                    alert("Số hàng và cột phải là số dương!");
                    flag2 = false;
                }
                if (flag2) {
                    console.log(`---- Bản đồ kho sách (${rowBook}x${columnBook})----`)
                    for (let i = 1; i <= rowBook; i++) {
                        lineSome = "";
                        for (let j = 1; j <= columnBook; j++) {
                            if (i === j) {
                                lineSome += ` [${i}-${j}](Kệ ưu tiên) `;
                            } else {
                                lineSome += ` [${i}-${j}] `;
                            }
                        }
                        console.log(lineSome);
                    }
                }
                break;
            case 3:
                let bookAble;
                let bookCost;
                let year;
                let maintenanceFee = 0;
                let sumCost = 0;

                bookAble = +prompt("Nhập số lượng sách hiện có:");
                bookCost = +prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):")
                year = +prompt("Nhập số năm dự toán:");
                while (isNaN(bookAble) || isNaN(bookCost) || isNaN(year)) {
                    alert("Dữ liệu nhập vào phải là số!");
                    bookAble = +prompt("Nhập số lượng sách hiện có:");
                    bookCost = +prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):")
                    year = +prompt("Nhập số năm dự toán:");
                }
                console.log("--- Dự toán phí bảo trì sách theo năm ---");
                for (let i = 1; i <= year; i++) {
                    if (i === 2) {
                        maintenanceFee = 0.1;
                    }
                    bookCost += (bookCost * maintenanceFee);
                    sumCost = (bookAble * bookCost);
                    lineSome = `Năm ${i}: ${sumCost.toLocaleString(`vi-VN`)} VND (Đơn giá: ${parseInt(bookCost)}/cuốn)`
                    console.log(lineSome);
                }
                break;
            case 4:
                let luckyNumber;
                let coutNumber = 0;
                lineSome = "";
                let flag = true;
                luckyNumber = +prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):");
                while (luckyNumber < 1 || isNaN(luckyNumber)) {
                    alert("Vui lòng nhập số N dương!");
                    flag = false;
                    break;
                }
                if (flag) {
                    for (let i = 1; i <= luckyNumber; i++) {
                        if (i % 3 === 0 && i % 5 !== 0) {
                            lineSome += ` ${i} `;
                            coutNumber++;
                        }
                    }
                    alert(`Tìm thấy ${coutNumber} mã may mắn. Xem chi tiết tại Console.`)
                    console.log("--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---");
                    console.log(lineSome);
                    console.log(`=> Tổng cộng có ${coutNumber} mã may mắn.`);
                }

                break;
            case 5:
                alert("Hệ thống đang đăng xuất... Hẹn gặp lại");
                break;
            default:
                alert("số bạn chọn không chính xác ! phải chọn từ 1 -> 5");
        }
    } while (choose !== 5);

} else {
    alert("Trang này để trống !");
}
document.write("<h1>Mini project (Thực hành JavaScript) </h1>");
