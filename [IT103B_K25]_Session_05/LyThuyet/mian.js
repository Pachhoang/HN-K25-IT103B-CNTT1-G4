/* kiểu tham chiếu
    I - Mảng là gì: 1 biến có thể lưu nhiều giá trị khác nhau
        1. khai báo mảng
        TỪ KHÓA KHAI BÁO BIẾN + TÊN MẢNG = [];
        let student = [];
        2. truy cập phần tử trong mảng
        + mảng có chỉ có index bắt đầu là : 0
        + truy cập theo chỉ số index;
        3. Dếm số lượng phần tử trong mảng.
        4. Thao tác với mảng
            CRUD
            C (Create: Thêm phần tử)
                + push(): Thêm phần tử vào cuối mảng
                + unshift(): Thêm phần tử vào đàu mảng
                + splice(): thêm phần tử vào vị trí bất kỳ
                    splice(index, deletCount, items)
            R (Read: Đọc các phần tử);
            U (Update: Cập nhập phần tử );
                + Cập nhập theo index
                + dùng splice();
            D (Delete: Xóa phần tử)
                + pop(): Xóa pahafn tử ở cuối mảng
                + shifft(): Xóa phần tử ở đàu mảng;
                + splice(); Xóa phàn tử ở bị trí bất kì
            Một số Method khác:
                slice: Cắt, saco chép ra 1 mảng mới không liên quan đến mảng ban đầu;
                reverse(): Đảo ngược mảng
*/
let array = [];
array.push(5, 6, 7, 8);
console.log(array);
array.splice(2,0,"Sikibidi");
let courses = ["JS", "PTY", "CSS"];
courses.splice(1, 1, "Môn Vjp nhát thời đại")
console.log(courses);
console.log(courses.slice(2));


