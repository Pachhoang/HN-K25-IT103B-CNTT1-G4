let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];

const displayPlayer = (team) => {
  for (let i = 0; i < team.length; i++) {
    console.log(
      `Mã ${team[i].id} - ${team[i].name} (${team[i].position}): ${team[i].goals} bàn`,
    );
  }
};

const addPlayer = (team) => {
  let name = prompt("Nhập tên cầu thủ:");
  let goals = +prompt("Nhập số bàn thắng:");
  let position = prompt("Nhập vị trí:");

  let newPlayer = {
    id: team.length ? team[team.length - 1].id + 1 : 1,
    name,
    goals,
    position,
  };

  team.push(newPlayer);
  console.log("Đã thêm cầu thủ mới");
};

const findPlayer = (team) => {
  let id = +prompt("Nhập ID cần tìm:");

  let player = team.find((p) => p.id === id);

  if (player) {
    console.log(player);
  } else {
    console.log("Không tìm thấy");
  }
};

const updateGoals = (team) => {
  let id = +prompt("Nhập ID cầu thủ vừa ghi bàn:");

  let player = team.find((p) => p.id === id);

  if (player) {
    player.goals += 1;
    console.log(
      `Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng`,
    );
  } else {
    console.log("Không tìm thấy cầu thủ");
  }
};

const deletePlayer = (team) => {
  let id = +prompt("Nhập ID cầu thủ cần xóa:");

  let index = team.findIndex((p) => p.id === id);

  if (index !== -1) {
    team.splice(index, 1);
    console.log("Đã chuyển nhượng cầu thủ");
  } else {
    console.log("Không tìm thấy");
  }
};

let choose;

do {
  choose = +prompt(`Nhập lựa chọn:
1. Hiển thị danh sách đội bóng
2. Thêm cầu thủ mới
3. Tìm cầu thủ theo ID
4. Cập nhật thành tích
5. Chuyển nhượng cầu thủ
0. Thoát chương trình`);

  switch (choose) {
    case 0:
      console.log("Thoát chương trình");
      break;
    case 1:
      displayPlayer(squad);
      break;
    case 2:
      addPlayer(squad);
      break;
    case 3:
      findPlayer(squad);
      break;
    case 4:
      updateGoals(squad);
      break;
    case 5:
      deletePlayer(squad);
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choose !== 0);
