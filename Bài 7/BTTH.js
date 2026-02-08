let playerList=[];
let squadList=[];
let goldList=[]
let choose;
function addPlayer(){
    playerList.push(playerName);
    goldList.push(goal);
}
function showSquad(){
    for (let i = 0; i < playerList.length; i++) {
        console.log(`${i+1}. ${playerList[i]}-${goldList[i]} bàn`);
    }
}
function totalGoal(){
    let sum=0;
    for (let i = 0; i < goldList.length; i++) {
        sum+=goalList[i];
    }
    return sum;
}
function findMostGoal(goalArray){
    let max= goalArray[0];
    for (let i = 0; i < goalArray.length; i++) {
        
        
    }
}
do{
    choose=+prompt("Mời nhập lựa chọn");
    switch (choose) {
        case 1:
            let playerName=prompt("Mời nhập tên cầu thủ:")
            let goal=+prompt("Nhập số bàn thắng")
            addPlayer(playerName,goal)
            break;
        case 2:
            showSquad();
            break;
        case 3:
            console.log("Tổng số bàn thắng là: ",totalGoal());
            
        break
        case 0:
            console.log("Thoát chương trình");
            
    
        default:
            break;
    }
}while(choose!=0)