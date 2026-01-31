let password = "";
password = prompt("Nhập password");
let count = 3;
let flag = true;

while (password != "admin123") {
  if (count == 1) {
    flag = false;
    break;
  }

  password = prompt(`Vui lòng nhập lại password, bạn còn ${count - 1} lần thử`);
  count--;
}

if (!flag) {
  console.log("Hệ thống bị khóa");
} else {
  console.log("Đăng nhập thành công");

  let choose;
  while (choose != 3) {
    choose = +prompt(
      `-----MENU -----
1. Nhập lô sách mới
2. Vẽ sơ đồ kệ sách
3. Thoát`,
    );

    if (choose == 1) {
      let numberOfBooks = +prompt("Bạn muốn nhập bao nhiêu cuốn sách?");
      let totalPrice = 0;

      for (let i = 1; i <= numberOfBooks; i++) {
        let price = +prompt(`Nhập giá tiền cuốn sách thứ ${i}`);

        if (price <= 0 || isNaN(price)) {
          console.log("Giá tiền không hợp lệ, bỏ qua cuốn này");
          continue;
        }

        totalPrice += price;
      }

      console.log(`Tổng giá trị nhập kho đợt này là: ${totalPrice}`);
    } else if (choose === 2) {
      for (let area = 1; area <= 3; area++) {
        for (let shelf = 1; shelf <= 5; shelf++) {
          if (area == 2 && shelf === 3) {
            console.log(`Khu vực ${area} - Kệ ${shelf} (Đang sửa chữa)`);
            continue;
          }
          console.log(`Khu vực ${area} - Kệ ${shelf}`);
        }
      }
    } else if (choose === 3) {
      console.log("Hẹn gặp lại!");
    } else {
      console.log("Lựa chọn không hợp lệ");
    }
  }
}
