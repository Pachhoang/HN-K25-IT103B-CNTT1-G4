let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "Món ăn dân tộc Mông", },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "Món ăn dân tộc Kinh", },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "Món ăn dân tộc Mông", },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "Món ăn dân tộc Kinh", },

];
let cart = [];

// hàm chức năng !!!
let returnList = () => {
    return prompt(`==== MENU QUẢN LÝ SẢN PHẨM ==== 
1. Hiển thị sản phẩm theo danh mục
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm
3. Sắp xếp các sản phẩm trọng cửa hàng theo giá
4. tính số tiền thanh toán trong giỏ hàng
5. thoát`);
}
// chức năng 1
let displayProduct = (objectArray) => {
    let categoryName;
    while (true) {
        categoryName = prompt("Vui lòng nhập tên danh mục cần hiển thị");
        if (categoryName.trim() === "") {
            alert("Tên danh mục của bạn không được để trống !");
            continue;
        }
        break;
    }
    let result = objectArray.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());

    if (result.length) {
        let output = '==== DANH SÁCH SẢN PHẨM ==== \n';
        result.forEach(p => {
            output += `ID: ${p.id} | ${p.name} | Giá: ${p.price} | SL: ${p.quantity} \n`;
        });
        alert(output);
    } else {
        alert("Không tìm thấy sản phẩm thuộc danh mục này !");
    }

}
// chức năng 2:
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
// chức năng 3: 
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
let sumOfCart = (objectCart) => {
    if (objectCart.length === 0) {
        alert("Không có sản phẩm bạn đã mua !")
    } else {
        let sum = objectCart.reduce((arc, value) => arc + (value.price * value.quantity), 0).toLocaleString("vi-VN");
        alert("Vậy số tiền khách phải trả là : " + sum + " VND");
    }

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
                buyProducts(products);
                break;
            case 3:
                sortPrice(products);
                break;
            case 4:
                sumOfCart(cart);
                break;
            case 5:
                alert("Cảm ơn vì đã sử dụng chương trình !");
                break;
            default:
                alert("Lựa chọn của bạn không phù hợp !");
        }
    } while (choose !== 5);

}
displaymenu();