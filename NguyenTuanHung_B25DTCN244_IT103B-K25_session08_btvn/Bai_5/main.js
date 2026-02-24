const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];

function reportTopPerformers(minPerformance, players) {
  const filtered = players
    .map((player) => {
      const [name, , goals, assists] = player.split(" - ");
      return {
        name: name.trim(),
        performance: Number(goals) + Number(assists),
      };
    })
    .filter((player) => player.performance >= minPerformance);

  filtered.forEach((player) => {
    console.log(`${player.name}: ${player.performance}`);
  });

  const total = filtered.reduce((sum, player) => sum + player.performance, 0);

  console.log(`Tổng hiệu suất: ${total}`);

  return total;
}

reportTopPerformers(20, players);
