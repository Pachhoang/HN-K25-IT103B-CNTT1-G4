function runLibrarySystem() {
  let loginFail = 0;
  let loggedIn = false;
  const USERNAME = "admin";
  const PASSWORD = "12345";

  while (loginFail < 3) {
    let u = prompt("Tên đăng nhập:");
    let p = prompt("Mật khẩu:");

    if (u === USERNAME && p === PASSWORD) {
      alert("Đăng nhập thành công");
      loggedIn = true;
      break;
    } else {
      loginFail++;
      alert(`Sai thông tin, còn ${3 - loginFail} lần thử`);
    }
  }

  if (!loggedIn) {
    alert("Tài khoản bị khóa");
    return;
  }

  let books = ["Toán", "Văn", "Anh"];
  let select;

  do {
    select = Number(
      prompt(
        `========= QUẢN LÝ THƯ VIỆN =========
1. Nhập thêm sách
2. Hiển thị danh sách sách
3. Tìm sách
4. Sửa tên sách
5. Đảo ngược kệ sách
6. Nhập kho từ nơi khác
7. Thoát
==================================
Chọn chức năng:`,
      ),
    );

    switch (select) {
      case 1: {
        let data = prompt("Nhập tên sách, cách nhau bởi dấu phẩy:");
        if (data) {
          let list = data.split(",");
          let added = 0;
          for (let i = 0; i < list.length; i++) {
            let name = list[i].trim();
            if (name !== "") {
              books.push(name);
              added++;
            }
          }
          alert("Đã thêm " + added + " sách");
        }
        break;
      }

      case 2:
        console.clear();
        if (books.length === 0) {
          console.log("Thư viện trống");
        } else {
          for (let i = 0; i < books.length; i++) {
            console.log(i + 1 + ". " + books[i]);
          }
        }
        alert("Xem danh sách trong console");
        break;

      case 3: {
        let key = prompt("Nhập tên sách cần tìm:");
        let pos = books.indexOf(key);
        if (pos !== -1) {
          alert("Tìm thấy tại vị trí " + pos);
        } else {
          alert("Không tìm thấy sách");
        }
        break;
      }

      case 4: {
        let oldBook = prompt("Nhập tên sách cần sửa:");
        let idx = books.indexOf(oldBook);
        if (idx !== -1) {
          let newBook = prompt("Nhập tên mới:");
          if (newBook) {
            books[idx] = newBook;
            alert("Đã cập nhật");
          }
        } else {
          alert("Sách không tồn tại");
        }
        break;
      }

      case 5:
        books.reverse();
        console.clear();
        for (let i = 0; i < books.length; i++) {
          console.log("Index " + i + ": " + books[i]);
        }
        alert("Đã đảo kệ sách");
        break;

      case 6:
        let otherBooks = ["Sách Kỹ Năng", "Truyện Tranh"];
        books = books.concat(otherBooks);
        alert("Đã nhập thêm sách từ nguồn khác");
        break;

      case 7:
        alert("Thoát chương trình");
        break;

      default:
        alert("Chọn sai chức năng");
    }
  } while (select !== 7);
}

runLibrarySystem();
