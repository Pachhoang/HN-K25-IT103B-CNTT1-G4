const players = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];



let result = getUpperNames(players);
displayPlayers(result);

function getUpperNames(arr){{
    return arr.map(c => c.toUpperCase());
}}
function displayPlayers (arr){
    arr.forEach(function(Element){
        console.log(Element);
    });
}