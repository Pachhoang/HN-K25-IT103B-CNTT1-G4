/*
    Khái niệm: là dịch vụ cho phép lưu trữ dữ liệu phía trình duyệt web
    cung cấp 3 kiểu dữ liệu
    1. Local Storage
        + dung lượng lưu: 5 - 10MB; (1MB = 1024KB)
        1 ảnh trong máy tính: Khoảng 100KB;
        + Dữ liệu khi lưu (đóng trình duyệt, tắt máy) thì dư xlieuej vẫn còn trong không bị mất
    2. Session Storage
        + dung lượng lưu: 5 - 10MB;
        + Phiên lamg việc : Khi đóng trình duyệt tắt máy thif dữ liệu bị mất
        +
    3. Cookies:
        + có thể set được thời gian tồn tại
    *************** Cách lưu trữ dữ liệu ******************
    I - Lưu: LocalStorage.setItem(TÊN KEY, VALUE);


    Lấy dữ liệu
    LoccalStorage.getItem("Tên_Key");
    Đối với mảng hoặc object khi lấy về phải chuyển từ định dạng JSON sang dạng ban đầu
    của nó
    JSON.parse(GIÁ TRỊ LẤY VỀ);

    **********
    XÓA DỮ LIỆU
    1. Xóa từng key
        LocalStorage.removeItem
    2. xóa hết
        LocalStorage.clear();
*/
let fullName = "Sikibidi";
localStorage.setItem("Name", fullName);
let age = 18;
localStorage.setItem("Age", age);

// localStorage.removeItem("Age");
localStorage.clear();