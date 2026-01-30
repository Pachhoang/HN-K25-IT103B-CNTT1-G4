let password = "";
password = prompt("Nhập password");
let count = 3;
let flag = true;
while (password != "admin123"){
    if (count == 1){
        flag = false;
        break;
    }

    password = prompt(`Vui lòng nhập lại password, bạn còn ${count-1} lần thử`);
    count--;
}

if (flag){
    let choose;
    while (choose != 3){
        choose = +prompt("Nhập lựa chọn");
    }
}