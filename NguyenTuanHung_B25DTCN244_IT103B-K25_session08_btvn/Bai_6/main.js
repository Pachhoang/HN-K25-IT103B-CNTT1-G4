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

  const grouped = players
    .map((player) => {
      const [name, position, goals, assists, matches] = player.split(" - ");
      return {
        name: name.trim(),
        position: position.trim(),
        goals: Number(goals),
        assists: Number(assists),
        matches: Number(matches),
      };
    })
    .filter((player) => player.goals >= minGoals)
    .reduce((acc, player) => {
      if (!acc[player.position]) {
        acc[player.position] = {
          count: 0,
          totalGoals: 0,
          totalAssists: 0,
          totalMatches: 0,
        };
      }

      acc[player.position].count++;
      acc[player.position].totalGoals += player.goals;
      acc[player.position].totalAssists += player.assists;
      acc[player.position].totalMatches += player.matches;

      return acc;
    }, {});

  let totalTeamGoals = 0;

  Object.entries(grouped).forEach(([position, data]) => {
    const avg = (
      (data.totalGoals + data.totalAssists) /
      data.totalMatches
    ).toFixed(2);

    totalTeamGoals += data.totalGoals;

    console.log(position + ":");
    console.log("- Số cầu thủ:", data.count);
    console.log("- Tổng bàn thắng:", data.totalGoals);
    console.log("- Tổng kiến tạo:", data.totalAssists);
    console.log("- Tổng số trận:", data.totalMatches);
    console.log("- Trung bình hiệu suất/trận:", avg);
    console.log("");
  });

  console.log("------------------------");
  console.log("Tổng bàn thắng toàn đội :", totalTeamGoals);
}
reportByPosition(players);
