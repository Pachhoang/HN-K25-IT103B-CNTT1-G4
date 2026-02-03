let book=[];
let n=parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách"));
for(let i=0;i<n;i++){
    let bookName=prompt("Nhập tên cuốn sách thứ "+(i+1))
    book.push(bookName)
}
console.log("Tổng số sách đã được trả : " + book.length);
console.log("Danh sách sách được trả");
for(let i=0;i<book.length;i++){
    console.log((i+1)+"."+book[i]);
    
}

