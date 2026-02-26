const player = {
    name: "MESSI",
    position: "Forward",
    age : 36,
    goals: 25,
    assists: 15,
};

console.log(showPlayerInfo(player));

function showPlayerInfo(arr){
    return `Tên: ${arr.name}
Vị trí: ${arr.position}
Tuổi: ${arr.age}
Bàn thắng mùa này: ${arr.goals}
Kiến tạo mùa này: ${arr.assists}
Tổng đóng góp : ${arr.goals + arr.assists}`;
}