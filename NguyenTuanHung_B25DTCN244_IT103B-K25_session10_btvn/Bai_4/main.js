const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(minYears, teamPlayers) {
  const filteredPlayers = teamPlayers.filter(
    (player) => player.years >= minYears,
  );

  const totalSalary = filteredPlayers.reduce(
    (total, player) => total + player.salary,
    0,
  );

  const highestPaid = filteredPlayers.reduce((max, player) =>
    player.salary > max.salary ? player : max,
  );

  const lowestPaid = filteredPlayers.reduce((min, player) =>
    player.salary < min.salary ? player : min,
  );

  return {
    totalSalary,
    highestPaid,
    lowestPaid,
  };
}

console.log(analyzeSalary(10, players));
