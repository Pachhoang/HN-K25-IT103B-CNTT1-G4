const players = [
  {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
    matches: 34,
    yellowCards: 2,
  },
  {
    name: "Ronaldo",
    position: "Forward",
    age: 39,
    goals: 30,
    assists: 10,
    matches: 38,
    yellowCards: 4,
  },
  {
    name: "Neymar",
    position: "Forward",
    age: 32,
    goals: 18,
    assists: 20,
    matches: 32,
    yellowCards: 3,
  },
  {
    name: "De Bruyne",
    position: "Midfielder",
    age: 33,
    goals: 8,
    assists: 25,
    matches: 35,
    yellowCards: 1,
  },
  {
    name: "Kante",
    position: "Midfielder",
    age: 33,
    goals: 2,
    assists: 5,
    matches: 36,
    yellowCards: 0,
  },
  {
    name: "Van Dijk",
    position: "Defender",
    age: 33,
    goals: 5,
    assists: 3,
    matches: 33,
    yellowCards: 2,
  },
  {
    name: "Alisson",
    position: "Goalkeeper",
    age: 31,
    goals: 0,
    assists: 1,
    matches: 37,
    yellowCards: 0,
  },
];

function generateRankingReport(minMatches, players) {
  const qualifiedPlayers = players.filter((player) =>
    player.matches >= minMatches ? true : false,
  );

  const calculatedPlayers = qualifiedPlayers.map(function (player, index) {
    const performanceScore = Number(
      ((player.goals + player.assists) / player.matches).toFixed(2),
    );

    const efficiencyScore = Number(
      (performanceScore - (player.yellowCards / player.matches) * 10).toFixed(
        2,
      ),
    );

    return {
      name: player.name,
      goals: player.goals,
      performanceScore,
      efficiencyScore,
      originalIndex: index,
    };
  });

  const ranking = calculatedPlayers.sort(function (a, b) {
    return b.efficiencyScore !== a.efficiencyScore
      ? b.efficiencyScore - a.efficiencyScore
      : b.performanceScore !== a.performanceScore
        ? b.performanceScore - a.performanceScore
        : b.goals !== a.goals
          ? b.goals - a.goals
          : a.originalIndex - b.originalIndex;
  });

  console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${minMatches} trận trở lên)\n`);

  ranking.forEach((player, index) =>
    console.log(
      `${index + 1}. ${player.name} - Efficiency: ${player.efficiencyScore} | Performance: ${player.performanceScore} | Goals: ${player.goals}\n`,
    ),
  );

  console.log(`Tổng số cầu thủ xếp hạng: ${ranking.length}\n`);

  console.log(
    ranking.length
      ? `Cầu thủ xuất sắc nhất: ${ranking[0].name}\n`
      : "Không có cầu thủ đủ điều kiện\n",
  );

  const top3 = ranking.slice(0, 3);

  const avgEfficiency = top3.length
    ? (
        top3.reduce((total, p) => total + p.efficiencyScore, 0) / top3.length
      ).toFixed(2)
    : "0";

  console.log(`Trung bình efficiency top 3: ${avgEfficiency}`);
}

generateRankingReport(30, players);
