let pass="";
pass=prompt("Nhập password");
let flag=true;
let count=3;
while(pass!="admin123"){
    if(count==1){
        flag=false;
        break;
    }
    pass=prompt(`Mời nhập lại mật khẩu, bạn còn ${count-1} lần nhập`)
    count--;
}
let choose;
while(choose!=3){
    choose=("Mời nhập lại lựa chọn")
    switch (choose) {
        case 1:
            
            break;
        case 2:
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            
            break;
    }
}
if (flag){
    while(choose!=3){
    choose=("Mời nhập lại lựa chọn")
    switch (choose) {
        case 1:
            
            break;
        case 2:
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            
            break;
    }
}
}else{
    console.log();
    
}
