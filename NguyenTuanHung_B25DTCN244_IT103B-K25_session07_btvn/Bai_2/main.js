let playerIds = ["P001", "P002", "P003"];
let playerNames = ["Quang Hai", "Tien Linh", "Van Toan"];
let playerJerseyNumbers = [19, 22, 9];

function printTeamRoster() {
  console.log(`Danh sách đội bóng (${playerIds.length} cầu thủ):`);
  for (let i = 0; i < playerIds.length; i++) {
    console.log(
      `${i + 1}. ${playerIds[i]} - ${playerNames[i]} - Số áo ${playerJerseyNumbers[i]}`,
    );
  }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
  for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === playerId) {
      playerNames[i] = newName;
      playerJerseyNumbers[i] = newJerseyNumber;
      return true;
    }
  }
  return false;
}

printTeamRoster();

let inputId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let indexFound = -1;
for (let i = 0; i < playerIds.length; i++) {
  if (playerIds[i] === inputId) {
    indexFound = i;
  }
}

if (indexFound !== -1) {
  let newName = prompt("Nhập tên mới cho cầu thủ:");
  let newJersey;
  do {
    newJersey = +prompt("Nhập số áo mới (1–99):");
  } while (newJersey < 1 || newJersey > 99);

  let result = updatePlayerNameAndJersey(inputId, newName, newJersey);

  if (result === true) {
    console.log("Cập nhật thành công.");
    printTeamRoster();
  } else {
    console.log("Không tìm thấy cầu thủ với mã này!");
  }
} else {
  console.log("Không tìm thấy cầu thủ với mã này!");
}
