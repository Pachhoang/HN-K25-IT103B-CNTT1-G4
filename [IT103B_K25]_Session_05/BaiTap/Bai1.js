let arrayBook = [];
let bookYouWannaGiveBack = +prompt("Bạn muốn trả bao nhiêu cuốn sách ?");
while(bookYouWannaGiveBack < 0){
    alert("Số bạn nhập bắt buộc phải là số dương !");
    bookYouWannaGiveBack = +prompt("Bạn muốn trả bao nhiêu cuốn sách ?");
}
for (let i = 0 ; i < bookYouWannaGiveBack; i++){
    arrayBook.push(prompt("Vui lòng nhập tên của sách"));
}
console.log(`Tổng số sách đã được trả: ${bookYouWannaGiveBack}
Danh sách đã trả`);
for(let i = 0; i < bookYouWannaGiveBack; i++){
    console.log(`${i+1}. `, arrayBook[i]);
}
