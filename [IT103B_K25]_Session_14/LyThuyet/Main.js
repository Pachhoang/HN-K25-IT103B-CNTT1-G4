// DOM: Document Object Model (mô hình tài liệu dạng Đối Tượng)
document.write("sikibidi");
/*
Khi trang web được tải lên thì trình duyệt sẽ tạo ra mô hình cây DOM
    GIÚP: 
        + Thêm, sửa, xóa các phần tử HTML
        + Thêm, sửa , xóa của cá thuộc tính của phần tử HTML
        + Tạo sự kiện tương tác với giao diện (Click, hover, submit...)
    CÁC THÀNH PHẦN TRONG DOM: 
    1. ELEMENT
    2. ATRIBUTE
    3. TEXT
        innerText

    CÁC CÁCH LẤY ELEMENT :
        + LẤY THEO ID: document.getElementById("heading"); 
        ==> trả về đối tượng Element vì id là duy nhất !!
        + LẤY THEO CLASS: document.getElementsByClassName("Tên Class đó");
        ==> trả về nhiều đối tượng HTML Collection: (gần giống mảng)
        + LẤY THEO TAGNAME (TÊN THẺ): document.getElementsByTagName("Tên thẻ ");
        ==> trả về HTML collection (Gần giống mảng );

*/
let result = document.getElementsByClassName("titleSkit");
console.log(result[1]);
result = document.getElementsByTagName("p");
console.log(result);
let login = () => {
    console.log("Đăng nhập thành công !!!");
}
let checkInput = () => {
    console.log("111");
}
let element = {
    style: {
        color: "red",
    }
}
let changeColor = () => {
    let ele = document.getElementsByTagName("h1")[0];
    // ele.style.color = "red";
    ele.id = "viCiEo";
}
let changeText = () => {
    let elementByClassName = document.getElementById("content");
    elementByClassName.innerHTML = "<button>Vãi cả lít</button>"
    document.getElementById("list").innerHTML = 
        `<li>C++</li>
        <li>Javascript</li>
        <li>C#</li>`;
}

