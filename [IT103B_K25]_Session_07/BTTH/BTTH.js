let playerList = ["Messi", "Ronaldo"];
let goals = [30, 30];
let choose;

const getTotalGoals = function () {
    let sumOfTheGoals = 0;
    for (let ele of goals) {
        sumOfTheGoals += ele;
    }
    return sumOfTheGoals;
}

do {
    choose = +prompt(`-- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát`);
    switch (choose) {
        case 1:
            let playerWannaToAdd;
            let playerGoals;
            playerWannaToAdd = prompt("Vui lòng nhập tên của cầu thủ mới !");
            while (true) {
                if (playerWannaToAdd === "") {
                    alert("Tên cầu thủ của bạn không được để trống !");
                    continue;
                }
                break;
            }
            while (true) {
                playerGoals = +prompt("Vui lòng nhập tên của cầu thủ mới !");
                if (isNaN(playerGoals) || playerGoals < 1) {
                    alert("Số lần ghi bàn phải là số dương và dữ liệu phải là số !");
                    continue;
                }
                break;
            }
            addPlayer(playerWannaToAdd, playerGoals);
            break;
        case 2:
            console.log("Đội bóng của chúng ta có :");
            showSquad();
            break;
        case 3:
            let sum;
            sum = getTotalGoals();
            console.log(`=> Tổng số bàn thắng của cả đội là : ${sum} bàn`);
            debugger;
            break;
        case 4:
            for(let i = 0 ; i < goals.length; i++){
                if(goals[i] === findMostGoals(goals))
                console.log(`Vậy Vua phá lưới (${playerList[i]}) hiện tại ghi được ${goals[i]} bàn ~`);
            }
           
            break;
        case 0:
            alert("Hẹn gặp lại !");
            break;
        default:
            alert("Số bạn chọn không phù hợp !");
    }
} while (choose != 0);



// Hàm thực thi
function addPlayer(name, goal) {
    playerList.push(name);
    playerList.push(goal);
    alert(`Thông báo đã thêm ${name} thành công !`);
}

function showSquad() {
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i + 1}. ${playerList[i]} - ${goals[i]} Bàn`);
    }
}
function findMostGoals(goalsArray) {
    max = goalsArray[0];
    for (const ele of goalsArray) {
        if(ele > max){
            max = ele;
        }
    }
    return max;
}