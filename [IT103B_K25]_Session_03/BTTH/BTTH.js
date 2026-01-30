let passwword = "";
passwword = prompt("Please Enter password");

let count = 3;
let wannaContinue = true;
let pass = true;

while (passwword != "admin123") {
    if (count == 0) {
        alert("Bạn nhập quá nhiều mật khẩu sai");
        wannaContinue = confirm("Bạn muốn làm lại mật khẩu hay không ? Yes or ýe");
        if (wannaContinue) {
            count = 3;
        } else {
            alert("Bạn sẽ không được đăng nhập nữa :>");
            pass = false;
            break;
        }
    }
    passwword = prompt(`    Mời bạn nhập lại PASSWORD
    Số pass còn lại còn ${count} lần`);
    console.log(`Số pass còn lại còn ${count} lần`)
    count--;
}

let choose;
let booksYouWantToIn;
let bookCost;
let totalOfTheBook =0;

if (pass) {
    alert("Bạn đã đăng nhập thành công :Đ !");
    do {
        choose = +prompt(`  ------   MENU THƯ VIỆN VJP -----
        ---- Chọn chức năng ----
        1 - Nhập lô sách mới
        2 - Vẽ sơ đồ kệ sách
        3 - Thoát`);
        switch(choose){
            case 1:
                booksYouWantToIn = +prompt("Bạn muốn nhập bao nhiêu cuốn sách !");
                while(booksYouWantToIn <= 0 || isNaN(booksYouWantToIn)){
                    alert("Số lượng sách bạn nhập phải lơn hơn 0 !");
                    booksYouWantToIn = +prompt("Vui lòng NHẬP LẠI số sách bạn muốn nhập !");
                }
                for (let i = 0; i < booksYouWantToIn ; i++){
                    bookCost = parseInt(prompt(`Vui lòng nhập số tiền của sách thứ ${i + 1}`));
                    if(bookCost <= 0 || isNaN(bookCost)){
                        alert("Bạn không thể nhập số tiền sách mà nhở hơn hoặc bằng 0")
                        continue;
                    }
                    totalOfTheBook += bookCost;
                }
                console.log(`Vậy tổng giá trị nhập kho là : ${totalOfTheBook} VNĐ`);
                alert(`Vậy tổng giá trị nhập kho là : ${totalOfTheBook} VNĐ`);
                break;
            case 2:
                for(let i = 1;  i <=3 ; i++ ){
                    for(let j = 1; j <=5; j++){
                        console.log(`KHU VỰC ${i} - KỆ SỐ ${j}`);
                        if(i === 2 && j === 3){
                            console.log(`KHU VỰC ${i} - KỆ SỐ ${j} - (Đang sửa chữa)`);
                        }
                    }
                }
                alert("Đã vẽ thành công !");
                break;
            case 3:
                alert("Hẹn gặp lại!");
                break;
            default:
                alert("Bạn Nên nhập từ 1- > 3");
        }
    }while(choose  !== 3);
  
}
