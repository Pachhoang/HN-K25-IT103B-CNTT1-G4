const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper",
];

function filterPlayersByPosition(position, players) {
  return players.filter((player) => player.split(" - ")[1] === position);
}

console.log(filterPlayersByPosition("Forward", players));
