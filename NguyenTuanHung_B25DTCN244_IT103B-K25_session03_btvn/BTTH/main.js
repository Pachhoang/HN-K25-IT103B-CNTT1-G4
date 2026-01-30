let password = "";
password = prompt("Nhập password");
let count = 3;
while (password != "admin123"){
    if (count == 1){
        break;
    }

    password = prompt(`Vui lòng nhập lại password, bạn còn ${count-1} lần thử`);
    count--;
}