const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(players, minGoals = 5) {
  console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ\n");

  const parsed = players
    .map((player) => player.split(" - ").map((v) => v.trim()))
    .filter((p) => Number(p[2]) >= minGoals);

  const positions = [...new Set(parsed.map((p) => p[1]))];

  const grouped = positions.map((pos) => {
    const inPos = parsed.filter((p) => p[1] === pos);
    return [
      pos,
      inPos.length,
      inPos.reduce((sum, p) => sum + Number(p[2]), 0),
      inPos.reduce((sum, p) => sum + Number(p[3]), 0),
      inPos.reduce((sum, p) => sum + Number(p[4]), 0),
    ];
  });

  let totalTeamGoals = 0;

  grouped.forEach(
    ([position, count, totalGoals, totalAssists, totalMatches]) => {
      const avg = ((totalGoals + totalAssists) / totalMatches).toFixed(2);
      totalTeamGoals += totalGoals;

      console.log(position + ":");
      console.log("- Số cầu thủ:", count);
      console.log("- Tổng bàn thắng:", totalGoals);
      console.log("- Tổng kiến tạo:", totalAssists);
      console.log("- Tổng số trận:", totalMatches);
      console.log("- Trung bình hiệu suất/trận:", avg);
      console.log("");
    },
  );

  console.log("------------------------");
  console.log("Tổng bàn thắng toàn đội :", totalTeamGoals);
}

reportByPosition(players);
