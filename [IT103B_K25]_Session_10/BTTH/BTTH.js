let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];
let choose; 
let  pickSquad = (arr) => { arr.forEach(value => console.log(`Mã ${value.id} - ${value.name} (${value.position}): ${value.goals} bàn`) );}
let addPlayer = (arr) => { 
    let nameWannaAdd = prompt("Vui lòng nhập tên của cầu thủ mới vào mảng ");
    let newId = Math.floor(Math.random() * 99999999999) + Date.now(); 
    let positionWannaAdd = prompt("Vui lòng nhập vị trí cần nhập vào");
    let newPlayer = {
        id: newId,
        name: nameWannaAdd,
        position: positionWannaAdd,
    };
    alert("Thêm cầu thủ thành công !");
    arr.push(newPlayer);
    console.log(arr);
}

let findIdPlayer = (arr) => {
    let char = +prompt("Vui lòng nhập ID cần tìm");
    let result = (arr.find((value) => value.id === char));
    if(result){
        console.log("Tìm thấy ID \n", result);
    }else{
        console.error("Không tìm thấy ID cần tìm"); 
    }
}
let updatePlayer = (arr) =>{
    let idWannaToUpdate = +prompt("Vui lòng nhập ID mà Cầu thủ vừa ghi bàn !");
    let result1 = arr.findIndex((Value) => Value.id === idWannaToUpdate);
    if(result1 !== -1){
        arr[result1].goals++;
        alert(`Đã cập nhập bàn thắng cho cầu thủ ${arr[result1].name} thành ${arr[result1].goals}`);
    } 
}
let deletePlayer = (arr) => {
    let idWannaToDelete = +prompt("Vui lòng nhập ID mà Cầu thủ muốn chuyển nhượng !");
    let result2 = arr.findIndex(value => value.id === idWannaToDelete);
    if(result2 !== -1){
        arr.splice(result2, 1);
        alert("Đã chuyển nhượng thành công !");
    }
}
do{
    choose = +prompt(`=== MENU QUẢN LÝ CẦU THỦ ===
1. Hiển thị danh sách đội bóng
2. Thêm cầu thủ mới.
3. Tìm kiếm cầu thủ theo id.
4. Cập nhập thành tích.
5. Chuyển nhượng cầu thủ
0. Thoát khỏi chương trình 
Mời bạn chọn lựa chọn`);
        switch(choose){
            case 1:
                console.log(pickSquad(squad));
                break;
            case 2:
                addPlayer(squad);
                break;
            case 3:
                findIdPlayer(squad);
                break;
            case 4:
                updatePlayer(squad);
                break;
            case 5:
                deletePlayer(squad);
                break;
            case 0:
                alert("Cảm ơn vì sử dụng chương trình !");
                break;
            default:
                alert("Só bạn chọn chỉ từ 0 -> 5 thôi");
        }
}while(choose != 0);


