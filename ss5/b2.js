let book=[];
let n;
while(true){
    n=parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));
    if(n<1||isNaN(n) ){
       alert("Vui lòng nhập số hợp lệ");
    }else{
        break;
    }
}
for(let i=0;i<n;i++){
    let bookName=prompt("Nhập tên cuốn sách thứ "+(i+1))
    book.push(bookName)
}
console.log("Tổng số sách bị trả muộn : " + book.length);
console.log("Danh sách sách bị trả muộn");
for(let i=0;i<book.length;i++){
    console.log((i+1)+"."+book[i]);
    
}
let count=0;
for(let i=0;i<book.length;i++){
    if(book[i].length>20){
        count++;       
    }
}
console.log("Số lượng sách có tên dài hơn 20 ký tự: "+count);

