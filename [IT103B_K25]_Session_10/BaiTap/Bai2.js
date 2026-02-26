const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};

addPerformanceScore(player);

function addPerformanceScore (arr){
    arr.performancePerMatch = Math.round(((arr.goals + arr.assists) / arr.matchesPlayed) *100 ) / 100;
    if(arr.performancePerMatch >= 1.0){
        arr.isKeyPlayer  = true;
    }else{
        arr.isKeyPlayer = false;
    }
    console.log(arr);
}