// Câu 1:
let student="Quý, Nam, Lan, Hùng, Nam"
let students=student.split(",")
let studentReverse= students.reverse();
console.log(students);
//Có làm thay đổi mảng gốc
if(students.includes("Lan")){
    console.log("Tên Lan tôn tại trong mảng");
}else{
    console.log("Tên Lan không tồn tại trong mảng");
}
let nam=students.indexOf("Nam");
console.log("Vị trí của tên Nam trong danh sách là: "+nam );

// Câu 2:
let money=["100;200;300;400"]
let sum=0
for(let i=0;i<money.length;i++){
    if(money[i]%2===0){
        console.log(money[i]);
    }
}
