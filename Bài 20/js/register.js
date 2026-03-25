let user = []
function register(e) {
    e.preventDefault();
    console.log("Đã gọi hàm!");
    let username = document.getElementById("username").value.trim();
    console.log("username", username);
    if (username.lenghth == 0) {
        document.querySelector(".error-name").style.display = "block"
        // document.querySelector(".error-name").textContent="Tên không được để trống"
        showErrorName("Tên không được để trống", "block")
        return;
    }
    if (username.lenghth < 3) {
        document.querySelector(".error-name").style.display = "block"
        // document.querySelector(".error-name").textContent="Tên phải nhiều hơn 2 ký tự"
        showErrorName("Tên phải có nhiều hơn 2 ký tự")
        return;
    }
    document.querySelector(".error-name").style.display = "none"

    let email = document.getElementById("email").value.trim();
    if (!validateEmail(email)) {
        document.querySelector("error-email").style.display = "block"
    }else{
        document.querySelector("error-email").style.display = "none"
    }
    for (let i = 0; i < array.length; i++) {
        if(user[i].email==email){
            console.log("email đã tồn tại");
        }
    }
    document.location.href="./login.html";
}
function showErrorName(errorName) {
    document.querySelector(".error-name").textContent = errorName;
    document.querySelector(".error-name").style.display = display
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}