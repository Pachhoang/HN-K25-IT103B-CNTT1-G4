let playerIds = [];
let playerPositions = [];

function getPositionName(position) {
  if (position === 1) {
    return "Thủ môn";
  } else if (position === 2) {
    return "Hậu vệ";
  } else if (position === 3) {
    return "Tiền vệ";
  } else if (position === 4) {
    return "Tiền đạo";
  } else {
    return "Không xác định";
  }
}

function printTeamRoster() {
  console.log(`Đội bóng hiện tại (${playerIds.length} cầu thủ):`);
  for (let i = 0; i < playerIds.length; i++) {
    console.log(
      `${i + 1}. ${playerIds[i]} - ${getPositionName(playerPositions[i])}`,
    );
  }
}

function findPlayersByPosition(position) {
  let result = [];
  for (let i = 0; i < playerPositions.length; i++) {
    if (playerPositions[i] === position) {
      result.push(i);
    }
  }
  return result;
}

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng ?");

for (let i = 0; i < n; i++) {
  let id;
  let isDuplicate;

  do {
    id = prompt(`Nhập cầu thủ ${i + 1} - Mã cầu thủ:`);
    isDuplicate = false;

    for (let j = 0; j < playerIds.length; j++) {
      if (playerIds[j] === id) {
        isDuplicate = true;
      }
    }

    if (isDuplicate === true) {
      alert("Mã cầu thủ đã tồn tại, vui lòng nhập lại!");
    }
  } while (isDuplicate === true);

  let position;
  do {
    position = +prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):");
  } while (position < 1 || position > 4);

  playerIds.push(id);
  playerPositions.push(position);
}

let findPos = +prompt(
  "Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ , 3: Tiền vệ, 4: Tiền đạo):",
);

printTeamRoster();

let indexes = findPlayersByPosition(findPos);

console.log(
  `Số cầu thủ ở vị trí ${getPositionName(findPos)}: ${indexes.length}`,
);
console.log(
  `Các chỉ số cầu thủ ở vị trí ${getPositionName(findPos)}: ${indexes.join(", ")}`,
);
