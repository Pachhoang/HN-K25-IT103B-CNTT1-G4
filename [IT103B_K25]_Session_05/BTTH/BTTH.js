let choose;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let bookName;

do {
    choose = +prompt(`Mời nhập lựa chọn chức năng:
1. Hiển thị sách
2. Thêm sách mới
3. Mượn sách
4. Cập nhập sách
5. Sắp xếp
0. Thoát`);
    switch (choose) {
        case 1:
            console.log(`Tổng số sách trong kho: ${books.length}`);
            for (let i = 0; i < books.length; i++) {
                console.log(`Sách thứ ${i + 1}: ${books[i]}`);
            }
            break;
        case 2:
            bookName = prompt("Vui lòng nhập tên sách mới");
            books.push(bookName);
            alert("Thêm sách mới thành công");
            break;
        case 3:
            bookName = prompt("Vui lòng nhập tên sách muốn mượn");
            if (books.includes(bookName)) {
                alert("Mượn sách thành công !");
                console.log(`Đã cho mượn sách ${books.splice(books.indexOf(bookName), 1)}`);
            } else {
                alert("Sach không tồn tại trong kho")
            }
            break;
        case 4:
            let newBookName;
            bookName = prompt("Vui lòng nhập tên sách muốn được sửa");
            if (books.includes(bookName)) {
                newBookName = prompt("Vui lòng nhập tên mới !");
                books.splice(books.indexOf(bookName), 1, newBookName);
                alert("Thêm sách mới thành công !");
            }
            break;
        case 5:
            let j = 0;
            let num = 0;
            for (let i = 1; i < books.length; i++) {
                j = i - 1;
                num = books[i];
                while (j >= 0 && num < books[j]) {
                        books[j+1] = books[j];
                        j--;
                }
                books[j+1] = num;
            }
            console.log(`Sắp xếp thành công !`);
            for (let i = 0; i < books.length; i++) {
                console.log(`Sách thứ ${i + 1}: ${books[i]}`);
            }
            break;
        case 0:
            break
        default:
            alert("Vui lòng chỉ nhập từ 1 -> 5");
    }
} while (choose !== 0);