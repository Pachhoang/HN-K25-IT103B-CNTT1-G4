let option;
const squad = [
  ["Nguyen Van A", 10, "FW"],

  ["Tran Van B", 5, "MF"],

  ["Le Van C", 2, "DF"],

  ["Pham Van D", 12, "FW"],

  ["Hoang Van E", 0, "GK"],

  ["Dang Van F", 7, "MF"],
];

function printSquad(squad) {
  let result = "";
  squad.forEach((s) => {
    result += `Tên ${s[0]}: vị trí ${s[2]} bàn thắng ${s[1]}\n`;
  });
  return result;
}

function findPlayer(squad) {
  let name = prompt("Nhập tên cầu thủ muốn tìm");
  let result = squad.find((player) => player[0] === name);
  return result ? result : "Không tìm thấy cầu thủ";
}

function playerFilter(squad) {
  let filterPosition = prompt(
    "Nhập vị trí cần lọc (Ví dụ: FW, MF, DF, GK)",
  ).toUpperCase();
  let filterResult = squad.filter(
    (ele) => ele[2].toUpperCase() === filterPosition,
  );
  return filterResult.length > 0 ? filterResult : "Không tìm thấy vị trí";
}

function totalGoal(squad){
    let goal = squad.reduce((acc, ele) => acc + ele[1], 0);
    return goal;
}

do {
  option = +prompt(`Nhập lựa chọn
                    --- QUẢN LÝ ĐỘI BÓNG ---

            1. Xem danh sách

            2. Tìm kiếm (Find)

            3. Lọc vị trí (Filter)

            4. Tổng bàn thắng (Reduce)

            5. Kiểm tra hiệu suất (Some/Every)

            0. Thoát`);
  switch (option) {
    case 0:
      break;
    case 1:
      console.log(printSquad(squad));
      break;
    case 2:
      console.log(findPlayer(squad));
      break;
    case 3:
      console.table(playerFilter(squad));
      break;
    case 4:
        console.log(`Tổng số bàn thắng là ${totalGoal(squad)}`);
        break;
  }
} while (option != 0);
