let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let newBookName;
let borrowBookName;
let choose;

do {
    choose =  +prompt(`Mời nhập lựa chọn chức năng: 
    1. Hiển thị sách
    2. Thêm sách mới
    3. Mượn sách
    4. Cập nhật sách
    5. Sắp xếp
    0. Thoát
    `)
    switch (choose) {
        case 1:
            console.log("Tổng số sách trong kho: ", books.length);
            for (let i = 0; i < books.length; i++) {
                console.log(`${i+1}. Tên sách: ${books[i]}`);
            }
            break;
        case 2:
            newBookName = prompt("Nhập tên cuốn sách mới:");
            books.push(newBookName);
            console.log("Đã thêm thành công!");
            break;
        case 3:
            borrowBookName = prompt("Nhập tên cuốn sách muốn mượn:");
            let found = books.includes(borrowBookName);
            if(found){
                console.log(`Đã cho mượn sách ${books.splice(found, 1)} `)
            }
            else{
                console.log("Sách không tồn tại");
            }
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }


} while (choose != 0);
