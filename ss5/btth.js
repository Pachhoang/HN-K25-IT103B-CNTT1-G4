let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"]
let choice;
do {
    choice = +prompt(`Mời nhập lựa chọn chức năng:
        1.Hiển thị sách
        2.Thêm sách mới
        3.Mượn sách
        4.Cập nhật sách
        5.Sắp xếp
        6.Thoát
        `)
    switch (choice) {
        case 1:
            console.log("Tống số sách là: " + books.length);
            for (let i = 0; i < books.length; i++) {
                console.log(`Sách thứ ${i + 1} : ${books[i]}`);

            }
            break;
        case 2:
            let bookName=prompt("Mời nhập tên sách");
            books.push(bookName)
            console.log(books);
            
            break;
        case 3:
            let bookBorrow=prompt("Nhập tên sách muốn mượn")
            let check = books.indexOf(bookBorrow)
            if(check==-1){
                console.log();
                
            }
        }
} while ()