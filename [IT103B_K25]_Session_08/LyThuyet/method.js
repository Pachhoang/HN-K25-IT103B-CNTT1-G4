/*
    CÁC METHOD LÀM VIỆC VỚI MẢNG
    HOF (HIGHER ORDER FUNCTION_ HÀM BẬC CAO)
    THỎA MÃN 1 TRONG 2 ĐIỀU KIỆN
    1. HÀM NHẬN HÀM KHÁC LÀM THAM SỐ
    2. HÀM TRẢ VỀ LÀ GIÁ TRỊ CỦA MỘT HÀM KHÁC
    ==> CÔNG DỤNG GIÚP GIẢI QUYẾT NHANH VẤN ĐỀ, TÁI SỬ DỤNG CODE


    1. ĐẦU VÀO CỦA PHƯƠNG THỨC NHẬN VÀO LÀ GÌ ? 
    2. ĐẦU RA (GIÁ TRỊ TRẢ VỀ CỦA NỐ LÀ GÌ ? )
        *FILTER:
        Đầu ra: Trả về mảng mới đã được lọc bởi điều kiện mình đã cho trước đó
*/
let numbers  = [10,20,30,40,3,8,4,13,42];
let scores = [
        ["Đức", "C++", 5],
        ["Diddy", "C++", 4],
        ["MJ", "C++", 6],
];


let result = numbers.filter((value, index, arr) => {
    return value > 11;
});
console.log(result);



let result2 = scores.filter(ele => {
    return ele[2] >=5;
});
console.log(result2);
// Reduce : để tính toán giá trị
/*  ĐẦU VÀO: 
    NHẬN VÀO 2 THAM SỐ:
        1. HÀM
        2. GIÁ TRỊ KHỞI TẠO
    ĐẦU RA: 
        Giá trị
        */
let sumOfTheNumbers = [1,2,3,4,5];
let sumResult = sumOfTheNumbers.reduce((acc, cur) => acc + cur, 0);
console.log("Tổng số trong mảng là : " + sumResult);





