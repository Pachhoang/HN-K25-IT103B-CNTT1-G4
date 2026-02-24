const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper",
];
let result1 = filterPlayersByPosition("Midfielder", players);
console.log(result1);

let result2 = filterPlayersByPosition("Forward", players);
console.log(result2);


function filterPlayersByPosition(ele, arr){
    return arr.filter(c => c.includes(ele));
}