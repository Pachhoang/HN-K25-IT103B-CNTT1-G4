let players = [];

function convertPosition(position) {
  if (position === 1) {
    return "Thủ môn";
  } else if (position === 2) {
    return "Hậu vệ";
  } else if (position === 3) {
    return "Tiền vệ";
  } else if (position === 4) {
    return "Tiền đạo";
  } else {
    return "";
  }
}

function pushPlayer(code, name, position) {
  let player = code + "-" + name + "-" + position;
  players.push(player);
}

function printTeamRoster() {
  console.log(`Đội bóng hiện tại (${players.length} cầu thủ):`);
  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    console.log(
      `${i + 1}. Mã: ${parts[0]} | Tên: ${parts[1]} | Vị trí: ${parts[2]}`,
    );
  }
}

let n = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

for (let i = 0; i < n; i++) {
  let code;
  let isDuplicate;

  do {
    code = prompt(`Nhập mã cầu thủ ${i + 1}:`);
    isDuplicate = false;

    for (let j = 0; j < players.length; j++) {
      let parts = players[j].split("-");
      if (parts[0] === code) {
        isDuplicate = true;
      }
    }

    if (isDuplicate === true) {
      alert("Mã cầu thủ đã tồn tại, vui lòng nhập lại!");
    }
  } while (isDuplicate === true);

  let name;
  do {
    name = prompt("Nhập tên cầu thủ:");
  } while (name === "");

  let posNumber;
  do {
    posNumber = +prompt(
      "Nhập vị trí (1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo):",
    );
  } while (posNumber < 1 || posNumber > 4);

  let position = convertPosition(posNumber);

  pushPlayer(code, name, position);
}

printTeamRoster();
