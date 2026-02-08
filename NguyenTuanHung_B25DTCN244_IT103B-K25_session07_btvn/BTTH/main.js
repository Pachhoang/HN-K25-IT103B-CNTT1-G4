let playerList = [];
let squadList = [];

function addPlayer(name, goal) {
  playerList.push(name);
  squadList.push(goal);
  console.log(`=> Đã thêm ${name} thành công.`);
}

function showSquad() {
  if (playerList.length === 0) {
    console.log("Đội bóng chưa có cầu thủ nào.");
    return;
  }

  for (let i = 0; i < playerList.length; i++) {
    console.log(`${i + 1}. ${playerList[i]} - ${squadList[i]} bàn`);
  }
}

const getTotalGoals = function () {
  let total = 0;
  for (let i = 0; i < squadList.length; i++) {
    total += squadList[i];
  }
  return total;
};

function findMostGoals(goalsArray) {
  if (goalsArray.length === 0) return 0;

  let max = goalsArray[0];
  for (let i = 1; i < goalsArray.length; i++) {
    if (goalsArray[i] > max) {
      max = goalsArray[i];
    }
  }
  return max;
}

let choice;
do {
  choice = +prompt(
`--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát`
  );

  switch (choice) {
    case 0:
      console.log("Thoát chương trình.");
      break;

    case 1:
      let name = prompt("Nhập tên cầu thủ:");
      let goal = +prompt("Nhập số bàn thắng:");
      addPlayer(name, goal);
      break;

    case 2:
      console.log("Danh sách đội hình:");
      showSquad();
      break;

    case 3:
      console.log(`=> Tổng số bàn thắng của cả đội là: ${getTotalGoals()} bàn.`);
      break;

    case 4:
      let maxGoals = findMostGoals(squadList);
      console.log(`=> Vua phá lưới hiện tại ghi được: ${maxGoals} bàn.`);
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
      break;
  }
} while (choice !== 0);
