let latePayment = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn");
let arrayBook = [];
let countMoreThan20Lettter = 0;
while(latePayment <= 0 || isNaN(latePayment)){
    alert("Số bạn nhập phải là số nguyên dương !");
    latePayment = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn");
}
for(let i = 0; i < latePayment; i++){
    arrayBook.push(prompt(`Nhập tên cuốn sách bị trả muộn thứ ${i+1}:`));
    if(arrayBook[i].length >= 20){
        countMoreThan20Lettter++;
    }
}
console.log(`Tổng số sách bị trả muộn ${latePayment}
Danh sách sách bị trả muộn:`);
for(let i = 0; i < latePayment; i++){
    console.log(`${i+1}. ${arrayBook[i]}`);
}
console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${countMoreThan20Lettter}`);