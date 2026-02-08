let players = [];
let goals = [];

function addPlayer(name, goal) {
    players.push(name);
    goals.push(goal);
    console.log(`=> Đã thêm ${name} thành công.`);
}

function showSquad() {
    if (players.length === 0) {
        console.log("Đội bóng chưa có cầu thủ.");
        return;
    }

    console.log("\nDanh sách đội hình:");
    for (let i = 0; i < players.length; i++) {
        console.log(`${i + 1}. ${players[i]} - ${goals[i]} bàn`);
    }
}

const getTotalGoals = function () {
    let sum = 0;
    for (let g of goals) {
        sum += g;
    }
    return sum;
};

function findMostGoals(goalsArray) {
    if (goalsArray.length === 0) return 0;

    let max = goalsArray[0];
    for (let g of goalsArray) {
        if (g > max) {
            max = g;
        }
    }
    return max;
}

function main() {
    while (true) {
        let choice = prompt(
`--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát

Người dùng chọn:`
        );

        switch (choice) {
            case "1":
                let name = prompt("Nhập tên:");
                let goal = parseInt(prompt("Nhập số bàn thắng:"));
                addPlayer(name, goal);
                break;

            case "2":
                showSquad();
                break;

            case "3":
                console.log(`=> Tổng số bàn thắng của cả đội là: ${getTotalGoals()} bàn.`);
                break;

            case "4":
                let maxGoals = findMostGoals(goals);

                let index = goals.indexOf(maxGoals);

                if (index !== -1) {
                    console.log(`=> Vua phá lưới: ${players[index]} (${maxGoals} bàn).`);
                } else {
                    console.log("Chưa có dữ liệu.");
                }
                break;

            case "0":
                console.log("Thoát chương trình.");
                return;

            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    }
}

main();