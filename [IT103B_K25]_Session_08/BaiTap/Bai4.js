const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 5",
    "Alisson - Goalkeeper - 0",
];
let result = getReversedNames(players);
console.log(result);


// function getReversedNames(arr){
//     let newArray;
//     let nameList = [];
//     newArray = arr.map(c => c.split(" - "));
//     newArray.reverse();
//     newArray.forEach(function(ele, index){
//         nameList.push(ele[0]);
//     });
//     return nameList;
// }
function getReversedNames(arr){
    return arr
        .map( c => c.split(" - ")[0])
        .reverse();
}