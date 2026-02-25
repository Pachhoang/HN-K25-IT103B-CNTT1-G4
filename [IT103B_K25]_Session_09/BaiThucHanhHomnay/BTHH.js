let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];

let choose;
do{
    choose = +prompt(`--- HỆ THÔNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng / Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (1-7): `);
        switch(choose){
            case 1:
                filterProduct(prices, names);
                break;
            case 2:
                testProduct(stocks, prices);
                break;
            case 3:
                alert("Tổng giá trị tài sản hiện có trong kho: " + totalAllMoney(stocks, prices) + " USD");
                break;
            case 4:
                reduceAllProducecPrices(prices);
                console.log(prices);
                break;
            case 5:
                let charactor = prompt("Vui lòng nhập ký tự mà bạn muốn tìm thiết bị");
                finNameOfKeyCharactor(names, prices, stocks, charactor);
                break;
            case 6:
                reportProduct(names, stocks);
                break;
            case 7:
                alert("Đã thoát khỏi chương trình. Hẹn gặp lại");
                break;
            default:
                alert("Số bạn nhập không thỏa mãn !");
        }
}while(choose != 7);

function filterProduct(arr, nameArray){
    let line = "Sản phẩm cao cấp \n";
    const result = arr.forEach((value ,index) => {
        if(value > 500){
            line += `- ${nameArray[index]} \n`;
        }
    })
    alert(line);
}
function testProduct(quanity, money){
    let hasOutOfStock =  quanity.some(p => p === 0);
    let isAllOver100 = money.every(c => c > 100);
    alert(`Kết quả kiểm định :
- Có sản phẩm hết hàng : ${hasOutOfStock ? "Có " : "Không "}
- Tất cả sản phẩm giá > 100 : ${isAllOver100 ? "Đúng" : "Sai"}`);

}
function totalAllMoney(quanity, money){
    return (Math.round(quanity.reduce((arc , cur , i) => arc + cur*money[i], 0) *1000)/1000).toLocaleString("vi-VN");
}
function reduceAllProducecPrices(money){
    alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!");
    money.forEach((valu, index ) => {
        money[index] *= 0.9;
    });
}
// chức năng 5 !!!
// findNameOfKeyChar(names, "i");

// 

// findNameOfKeyChar(names, charactor);

// function findNameOfKeyChar(arr, char) {
//     let line = "";
//     arr.forEach((value, index) => {
//         if( value.toLowerCase().includes(char.toLowerCase())){
//             line += `${value} - ${prices[index]} - ${stocks[index]} \n`;
//         }
//     })
//     if( line === ""){
//         alert("Không tìm thấy sản phẩm phù hợp");
//     }else{
//         alert(`Thông tin chi tiết : \n` + line);
//     }
// }

// cách 2:
function finNameOfKeyCharactor(names, prices, stocks, char){
    const result = names
        .map((name, index) => ({
            name,
            price: prices[index],
            stock: stocks[index]
        }))
        .filter(produce =>
            produce.name.toLowerCase().includes(char.toLowerCase())
        );
        if(result.length === 0){
            alert("KHông tìm thấy sản phẩm phù hợp");
        }else{
            let line = result
                .map(p => `${p.name} - Giá: ${p.price} - Kho: ${p.stock}`)
                .join("\n");
            alert("Thông tin chi tiết:\n" + line);
        }
}
// finNameOfKeyCharactor(names, prices, stocks, "i");
// / Chức Năng 6 !!!
// function reportProduct(names, stocks){
//     line = "";
//     for(let i = 0; i < names.length; i++){
//         line += `${names[i]}: ${stocks[i] > 0 ? "Còn hàng" : "Hết Hàng"}  (${stocks[i]}) \n`;
//     }
//     alert(`Báo Cáo: \n` + line);
// }
// reportProduct(names, stocks);
// Cách 2:
function reportProduct(names, stocks){
    const result = names.map((name, index) => 
     `${name}: ${stocks[index] > 0 ? "Còn Hàng" : "Hết Hàng"} (${stocks[index]})`
    )
    .join("\n");
    alert(result);
}