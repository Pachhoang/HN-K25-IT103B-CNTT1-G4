const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};

function addPerformanceScore(obj) {
  let performance = (obj.goals + obj.assists) / obj.matchesPlayed;
  obj.performancePerMatch = Number(performance.toFixed(2));
  obj.isKeyPlayer = obj.performancePerMatch >= 1.0;
  return `    name: ${obj.name}
    position: ${obj.position}
    goals: ${obj.goals}
    assists: ${obj.assists}
    performancePerMatch: ${obj.performancePerMatch}
    isKeyPlayer: ${obj.isKeyPlayer}`;
}

console.log(addPerformanceScore(player));
