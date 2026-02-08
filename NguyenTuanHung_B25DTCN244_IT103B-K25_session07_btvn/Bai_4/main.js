let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn"
];

function printTeamRoster() {
  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    console.log(`${i + 1}. ${parts[0]} | ${parts[1]} | ${parts[2]}`);
  }
}

function countPlayerByPostion(players) {
  let result = {};
  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];
    if (result[position] === undefined) {
      result[position] = 1;
    } else {
      result[position]++;
    }
  }
  return result;
}

function hasGoalkeeper() {
  for (let i = 0; i < players.length; i++) {
    let position = players[i].split("-")[2];
    if (position === "Thủ môn") {
      return true;
    }
  }
  return false;
}

printTeamRoster();

console.log(countPlayerByPostion(players));

console.log(hasGoalkeeper());
