const player = {
  name: "Messi",
  position: "Foward",
  age: 36,
  goals: 25,
  assists: 15,
};

function showPlayerInfo(obj) {
  return `    Tên: ${obj.name}
    Vị trí: ${obj.position}
    Tuổi: ${obj.age}
    Bàn thắng mùa này: ${obj.goals}
    Kiến tạo mùa này: ${obj.assists}
    Tổng đóng góp: ${obj.goals + obj.assists}`;
}

console.log(showPlayerInfo(player));
