/*
    1. Biến
        + let, var, const: Phân biệt 
    2. Kiểu dữ liệu
        + chia làm 2 nhóm: 
            +Nhóm 1 : Nhóm nguyên thủy (primitive type) Tham trị
                - number
                - string
                - boolean
                - undefinded
                - NaN
                - null
            + Nhóm 2: Nhóm phức tạp (reference type), Tham chiếu
                - array
                - function
                - object
    3. toán tử - operator
        + Toán tử số học: +, -, *, /, %, **
        + Toán tử logic: && , ||
        + toán tử so sánh: > , < , >= ,  <=, ==, != ,  ===,  !==
        + Toán tử tăng giảm: ++a: Tiền tố, a++: Hậu tố ;
        + Toán tử 3 ngôi : ( Điều kiện ? Đúng : Sai );
Bài 2: Câu điều kiện & vòng lặp 
    condition: 
         + if_else
         + if_else : lồng
         + if_else: Bậc thang
         + switch_case
    loop:
        + for
        + while
        + do while
Bài 3: mảng
        + cách khai báo: let / const / var Tên Mảng = [];
        + thao tác với mảng
        + CRUD: Cơ bản
            C; Create: Thêm: 
            _ push():  Thêm vào cuối
            _ unshift(); thêm vào đầu
            _ splice(): Thêm vào vị trí bất kì
            R: Read: Đọc(Hiển thị)
            _ for, for - in  , for - of,...
            U: Upadate: Cập nhập
            _arr[Chỉ số cần cập nhập] = giá trị mới;
            _ splice(index, DeleteCount, NumberWannaToAdd)
            D: Delete: xóa
            _ pop: Xóa phần tử ở cuối mảng
            _ Shifft: Xóa phần tử ở đầu mảng
            _ splice(): Xóa phần tử ở vị trí bất kỳ

            Các phương thức làm việc với mảng:
            1. slice(): Cắt sao chép tạo ra mảng mới
            2. concat(): Nối 2 mảng lại với nhau
            3. reverse(): Đảo ngược mảng
            4. split(): chuyển string sang mảng
            5. join(): chuyển mảng sang string
            6. indexOf(): Vị trí (Chỉ số của phần tử đó) Hoặc là -1
            7. Includes(): Trả về true nếu tìm thấy / false nếu không tìm thấy
            8. sort(): Sắp xếp theo bảng mã ASCII 
Bài 4: function

        1. DECLARATON FUNCTION
        function Tên Hàm (){
        
        }
        2. EXPRESSION FUNCTION
        const fn = function (){
        
        }

        3. ARROW FUNCTION
        () => {}

        _ THAM SỐ (PARAMETER): ĐƯỢC ĐỊNH NGHĨA TRONG HÀM
        _ ĐỐI SỐ (ARGUMENT): KHI GỌI HÀM VÀ TRUYỀN GIÁ TRỊ VÀO
        _ PHẢI GỌI HÀM !!!
    BÀI 5: KHÓ VÃI LÍT ARRAY METHOD: CÁC PHƯƠNG THỨC METHOD
        _ MAP, FOREACH, FILTER, REDUCER, FIND, FINDINDEX, SOME, EVERY...
        _ Nếu dùng for, có thể giải quyết hết tất cả bài toán của mảng
        _ HOF (higer order function) _ Hàm Bậc Cao:




        _   MỘT FUNCTION BÌNH THƯỜNG MUỐN TRỞ THÀNH HOF THÌ PHẢI THỎA MÃN 1 TRONG 2 ĐIỀU HIỆN
        1. HÀM NHẬN HÀM KHÁC LÀM THAM SỐ !
        2. HÀM TRẢ VỀ MỘT HÀM KHÁC !!
*/
// let numbers = [5. 10, 15, 20, 25, 30];
var a = 1;
function test(){
    console.log(a);
    var a = 2;
}
test();