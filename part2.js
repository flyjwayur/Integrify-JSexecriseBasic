/******* JS Exercise: 1, Part 2 *******/
//1.
function generateLottery(){
    //let twoLotteries = [];
    let currentLottery = [];
    for(let j =0; j <7; j++){
        currentLottery[j] = (Math.floor(Math.random()*9)+1);

    }
    return currentLottery;
    console.log("test", currentLottery.join(""));
}
    
function twoLotteries(){
    let twoLotteries = [];
    for(let i=0; i<2; i++){
        twoLotteries.push(generateLottery().join(("")));
    }
    return console.log("test2 :", twoLotteries);
}

twoLotteries();

//2. The join() method joins all elements of an array (or an array-like object) into a string and returns this string.

function createLotteryWithRow(){
    let rows = prompt("How many rows of lottery?");

    let twoLotteries = [];
    for (let i = 0; i < rows; i++) {
        let currentLottery = "";
        for(let j =0; j <7; j++){
            currentLottery = currentLottery + (Math.floor(Math.random()*9)+1);
        }
        twoLotteries.push(currentLottery);
        console.log("With user input");
        console.log(`lottery[${i}] : ${twoLotteries[i]}`);
    }
}

//createLotteryWithRow();

//3.
function sortedLotteryWithRow(){
    let rows = prompt("How many rows of lottery?");

    let twoLotteries = [];
    for (let i = 0; i < rows; i++) {
        let currentLottery = [];
        for(let j =0; j <7; j++){
            currentLottery.push((Math.floor(Math.random()*9)+1));
            currentLottery.sort(function(a,b){return a-b});
        }
        currentLottery = currentLottery.join("");
        twoLotteries.push(currentLottery);
        console.log("Sorted array with user input");
    }
    twoLotteries.forEach((el, i)=>{
        console.log(`lottery[${i}] : ${el}`);
    })
}

//sortedLotteryWithRow();
