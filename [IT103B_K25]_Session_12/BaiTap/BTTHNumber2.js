let products = [
    { id: 1, name: "Harry Potter", price: 60000, quantity: 20, category: "Tiểu thuyết" },
    { id: 2, name: "Sikibidi và những người bạn", price: 80000, quantity: 21, category: "Thiếu nhi" },
    { id: 3, name: "Dế Mèn phiêu lưu ký", price: 100000, quantity: 15, category: "Văn học Việt Nam" },
    { id: 4, name: "Điều kỳ diệu phòng giam số 7", price: 200000, quantity: 30, category: "Tiểu thuyết" },
];
let cart = [];

// hàm chức năng !!!
let returnList = () => {
    return prompt(`==== MENU QUẢN LÝ SÁch ==== 
1. Hiển thị danh sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id
4. mua sách (nhập id sách cần mua và số lượng, cập nhập lại kho)
5. Sắp xếp sách theo giá
6. tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho
8. Thoát chương trình`);
}
// chức năng 1
let displayProduct = (objectArray) => {
    let categoryName;
    while (true) {
        categoryName = prompt("Vui lòng nhập tên thể loại cần hiển thị");
        if (categoryName.trim() === "") {
            alert("Tên danh mục của bạn không được để trống !");
            continue;
        }
        break;
    }
    let result = objectArray.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

    if (result.length) {
        let output = '==== DANH SÁCH SÁCH';
        output += ` ${categoryName.toUpperCase()} ==== \n`
        result.forEach(p => {
            output += `ID: ${p.id} | ${p.name} | Giá: ${p.price} | SL: ${p.quantity} \n`;
        });
        alert(output);
    } else {
        alert("Không tìm thấy sản phẩm thuộc danh mục này !");
    }

}
//Chức năng validate dữ liệu
let validateName = (prod, name) => {
    let vali = true;
    if (name === null || name.trim() === "" || prod.some(c => c.name === name)) {
        vali = false;
        alert("Tên bạn nhập không hợp lý !!");
    }
    return vali;
}
let validatePrice = (prod, price) => {
    let vali = true;
    if(price === null || Number(price) < 0 || isNaN(Number(price)) || price === ""){
        alert("Giá nhập vào không hợp lệ !");
        vali = false;
    }
    return vali;
}

let validateQuantity = (prod, quantity) =>{
    let vali = true;
    if(quantity === null || isNaN(Number(quantity)) || Number(quantity) <= 0 || !Number.isInteger(Number(quantity)) ){
        vali = false;
        alert("số lượng nhập không hợp lệ");
    }
    return vali;
}
let validateId = (prod, id) => {
    let vali = true;
    if(id === null || id.trim() === "" || isNaN(Number(id))){
        alert("ID bạn nhập không hợp lệ !");
        vali = false;
    }
    return vali;
}
//

// chức năng 2: Thêm sách
let addNewBookToProducts = (objectArray) => {
    let newBook = prompt("Vui lòng nhập tên sách mới");
    if (!validateName(products, newBook)) {
        return;
    }
    let newPrice = prompt("Vui lòng nhập giá bán cho sách");
    if(!validatePrice(objectArray, newPrice)){
        return;
    }
    let id = objectArray.length + 1;
    let newQuantity = prompt("Vui lòng nhập số lượng cho sách cần bán");
    if(!validateQuantity(objectArray , newQuantity)){
        return;
    }
    let newType = prompt("Vui lòng nhập thể loại cho sách");
    let booksNew = { id, name: newBook, price: +newPrice, quantity: +newQuantity, category: newType, };
    objectArray.push(booksNew);
    alert("Thêm sách mới thành công !");
    console.table(objectArray);
}

// chức năng 3: tìm kếm sách theo tên hoặc id;
let findByID = (obArray) => {
    let idWannaToFind;
    idWannaToFind = prompt("Vui lòng nhập ID muốn tìm kiếm !");
    if(!validateId(obArray, idWannaToFind)){
        return;
    }
    let result = obArray.filter(c=> c.id === +idWannaToFind);
     console.log(result.length ? result : "Không tìm thấy");
}
let findByName = (obArray) =>{
    let nameWannaFind;
    nameWannaFind = prompt("Vui lòng nhập tên muốn tìm kiếm !");
    let result = obArray.filter(c=> c.name === nameWannaFind);
    console.log(result.length ? result : "Không tìm thấy");
}
let finBookByNameOrByID = (obArray) =>{
    let choice;
    do{
        choice =+ prompt(`MENU TÌM KIẾM
1. Tìm kiếm theo id
2. Tìm kiếm theo tên
0. Thoát`);
        switch(choice){
            case 1:
                findByID(obArray);
                break;
            case 2:
                findByName(obArray);
                break;
        }
    }while(choice !== 0);
}
// chức năng 4:
let buyProducts = (objectArray) => {
    let idWannaToBuy;
    let quantityWannaToBuy;
    while (true) {
        idWannaToBuy = +prompt("Vui lòng nhập ID bạn muốn mua !");
        if (isNaN(idWannaToBuy)) {
            alert("ID bạn nhập không hợp lệ !");
            continue;
        }
        break;
    }
    let result = objectArray.find(p => p.id === idWannaToBuy);
    if (result) {
        alert("Đã tìm thấy sản phẩm ");
        if (result.quantity > 0) {
            while (true) {
                quantityWannaToBuy = +prompt("Vui lòng nhập số lượng mà bạn muốn mua !");
                if (isNaN(quantityWannaToBuy) || quantityWannaToBuy <= 0) {
                    alert("Số lượng mua không phù hợp");
                    continue;
                }
                if (result.quantity - quantityWannaToBuy < 0) {
                    alert("Số lượng bạn chọn quá mức để mua !");
                    continue;
                }
                break;
            }
            result.quantity -= quantityWannaToBuy;

            cart.push({
                id: result.id,
                name: result.name,
                price: result.price,
                quantity: quantityWannaToBuy
            });
            alert("Mua sản phẩm thành công !");
        } else {
            alert("Đã hết hàng ! vui lòng chọn sản phẩm khác ");
        }

    } else {
        alert("Không có ID phù hợp để mua sản phẩm");
    }
}
// chức năng 5: 
let sortPrice = (obkectArray) => {
    let chooseSort;
    let result;
    let row = "";
    chooseSort = +prompt(`=== MENU SẮP XẾP GIÁ ===
1. Sắp xếp giảm dần
2. Sắp xếp tăng dần`);
    switch (chooseSort) {
        case 1:
            row += "BẢNG KHI SẮP XẾP GỈAM DẦN \n";
            result = obkectArray.sort((a, b) => b.price - a.price);
            obkectArray.forEach(p => {
                row += `ID: ${p.id} | ${p.name} | Giá: ${p.price} | SL: ${p.quantity} \n`;
            });
            alert(row);
            break;
        case 2:
            row += "BẢNG KHI SẮP XẾP TĂNG DẦN \n";
            result = obkectArray.sort((a, b) => a.price - b.price);
            obkectArray.forEach(p => {
                row += `ID: ${p.id} | ${p.name} | Giá: ${p.price} | SL: ${p.quantity} \n`;
            });
            alert(row);
            break;
        default:
            alert("số bạn chọn không phù hợp !");
    }
}
// chức năng 6: 
let sumOfCart = (objectCart) => {
    let output;
    if (objectCart.length === 0) {
        alert("Không có sản phẩm bạn đã mua !")
    } else {
        let sumOfQuantity = objectCart.reduce((arc, cur) => arc + cur.quantity, 0);
        let sum = objectCart.reduce((arc, value) => arc + (value.price * value.quantity), 0).toLocaleString("vi-VN");
        output = "Vậy số tiền khách phải trả là : " + sum + " VND ";
        output += `\nTổng số sách mà người dùng phải mua là: ${sumOfQuantity}`;
    }
    alert(output)
}
// chức năng 7: 
let sumOfQuantity = (obArray) =>{
    
}


let displaymenu = () => {
    let choose;
    do {
        choose = +returnList();
        switch (choose) {
            case 1:
                displayProduct(products);
                break;
            case 2:
                addNewBookToProducts(products);
                break;
            case 3:
                finBookByNameOrByID(products);
                break;
            case 4:
                buyProducts(products);
                break;
            case 5:
                sortPrice(products);
                break;
            case 6:
                sumOfCart(cart);
                break;
            case 7:
                break;
            case 8:
                alert("Cảm ơn vì đã sử dụng chương trình !");
                break;
            default:
                alert("Lựa chọn của bạn không phù hợp !");
        }
    } while (choose !== 8);

}
displaymenu();