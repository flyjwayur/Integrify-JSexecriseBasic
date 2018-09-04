/******* JS Exercise: 1, Part I *******/

"use strict"
// 1.
var company = 'Integrify Academy';
console.log('a : ' + company);
console.log('b : length ' + company.length); //emtpy space is also counted
console.log('c : toUpperCase ' + company.toUpperCase());
console.log('d : toLowerCase ' + company.toLowerCase());
console.log('e : slice ' + company.slice(0, 9));
console.log('e : substr ' + company.substr(0, 9));
console.log('e : substring ' + company.substring(0, 9));
console.log('f : include ' + company.includes('Academy'));
console.log('g : split ' + company.split(' '));
// console.log(+company[1]);
console.log('h : replace ' + company.replace('Integrify', 'Microsoft'));
var companyWithSplit = company.split(' ');
console.log(companyWithSplit);
console.log(company.split(' '));
console.log('h : split+replace ' + company.replace(companyWithSplit[0], 'Microsoft'));
console.log('i : charAt ' + company.charAt(10));
console.log('j : charAt ' + company.charAt(company.length - 7));
console.log('k : indexOf ' + company.indexOf('e'));
console.log('l : lastIndexOf ' + company.lastIndexOf('e'));
console.log('m : trim ' + company.trim());
console.log('n : ' + company.startsWith('I')); //Case sensitive 
console.log('o : ' + company.endsWith('y'));
console.log('p : ' + company.match(/[Aa]/g));

// 2.
var myAge = 25;
var yourAge = 30;

console.log("I am " + myAge + " years old.")
console.log("You are " + yourAge + " years old.");

// 3.
function findDriveAge() {
    var yourAge = prompt("Enter your age.");
    var leftAge = 18 - yourAge;

    if (yourAge >= 18) {
        document.getElementById("demo").innerHTML =
            "You are old enough to drive.";
        console.log("You are old enough to drive.");
    } else {
        document.getElementById("demo").innerHTML =
            "You are left with " + leftAge + " to drive.";
        console.log("You are left with " + leftAge + " to drive.");
    }
}

// findDriveAge();

//4
function findAgeDifference() {
    var myAge = prompt("Enter my age.");
    var yourAge = prompt("Enter your age.");
    var ageDiff = Math.abs(yourAge - myAge);
    if (yourAge > myAge) {
        console.log("You are " + ageDiff + " older than me.")
    } else if (yourAge < myAge) {
        console.log("I am " + ageDiff + " older than you.");
    } else {
        console.log("You and I, we have same age");
    }
}

// findAgeDifference();

//5
function exercise5 (){
    var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
    console.log("a. : " + itCompanies);
    console.log("b. : " + itCompanies.length);
    console.log("c. : " + itCompanies[0]);
    console.log("c. : " + itCompanies[1]);
    console.log("c. : " + itCompanies[2]);
    console.log("c. : " + itCompanies[3]);
    console.log("c. : " + itCompanies[4]);
    console.log("c. : " + itCompanies[5]);
    console.log("c. : " + itCompanies[6]);
    console.log("d. with only comma : " + itCompanies);
    console.log("d. with comman & space : " + itCompanies.join(", ") + " are big IT companies.");
    console.log("f. sort : " + itCompanies.sort());
    console.log("g. reverse : " + itCompanies.reverse());
}

exercise5();

//6
function capitalizeItems(){
    var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
    /* iterating items in array with for loop
     for(var i =0; i < itCompanies.length; i++){
        var itCompanitesCap = [];
        itCompanitesCap.push(itCompanies[i].toUpperCase()); 
        //document.getElementById("demo").innerHTML = itCompanitesCap.toString();   
    }
    return itCompanitesCap;  */
    
    // iterating items in array with 'for of'
     var itCompaniesCap =[];
     for(var i of itCompanies){ 
         itCompaniesCap.push(i.toUpperCase());
     }
     console.log("Cap with itCompanies : "+ itCompaniesCap.join(", "));
}

capitalizeItems();

//7
var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
function printArray(arr){
    console.log("printArray"+arr);
}
printArray(itCompanies);

//8
function reverseArray(arr){
    var reversedCompanies = [];

    //reversing with for of & unshift
   /*  for(var i of arr){
        reversedCompanies.unshift(i);
    }
    return console.log(reversedCompanies); */

    //reversing with for & from last item
     for(var i = arr.length-1; i>=0; i--){
        reversedCompanies.push(arr[i]);
        console.log(reversedCompanies, "test");
    }
    return console.log(reversedCompanies);
}

reverseArray(itCompanies);

//9
function capitalizeArray(arr){

    for(var i=0; i<arr.length; i++){
        console.log(arr[i].toUpperCase());
    }
}

capitalizeArray(itCompanies);

//10.
function removeItem(arr){
    arr.splice(2,2);
    return console.log(arr);
}

removeItem(itCompanies);

function addItem(arr){
    arr.splice(1,0,"Naver");
    return console.log(arr);
}

addItem(itCompanies);

//11. 
let numArray =[2,5,7,8,9,13];

function sumOfNumbers(numArr){
   var sumNum = 0;
   numArr.forEach(function(element){
    sumNum +=element;
   });
   return sumNum;
}

console.log("sum Of Numbers :" + sumOfNumbers(numArray));

//12. 
function numOfOdds(numArr){
    var sumOodNum =0; 
    for(var i of numArr){
        if(i%2 === 1){
            sumOodNum += i;
        }
    }
    return sumOodNum;
}

console.log("sum Of Odds : "+ numOfOdds(numArray));

//13. 
function sumOfEven (numArr){
    let sumOfEven = 0;
    const filteredEvenNum = numArr.filter(function(num){
        return (num % 2) === 0;
    })
    filteredEvenNum.forEach(function(evenNum){
        sumOfEven += evenNum;
    })
    return console.log("sum of Even : " + sumOfEven);
}

sumOfEven(numArray);

//14.
function evensAndOdds (numArr){
    var evenCounts = 0;
    var oddCounts = 0; 

    numArr.forEach(function(num){
        if(num % 2 === 0){
            evenCounts += 1;
        }else if(num % 2 === 1){
            oddCounts += 1; 
        }
    })
    return console.log(
    `The number of odd are ${oddCounts}\n`+
    `The number of even are ${evenCounts}`);
}

evensAndOdds(numArray);

// 15.
function randomHexaNumberGenerator(){
    let hexaCode = '';
    const lettersNumbers = "0123456789abcdef";

    for(var i=0; i < 6; i++){
        hexaCode += lettersNumbers[Math.floor(Math.random()*16)];
    }
    return console.log("Random HexaCode : ", hexaCode);
}

randomHexaNumberGenerator();

// 16.
function userIdGenerator(){
    let userId = ''; 
    const lettersNumbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lengthOfnumLet = lettersNumbers.length;

    for(var i=0; i < 7; i++){
        userId += lettersNumbers[Math.floor(Math.random() * lengthOfnumLet)];
    }
    return console.log("ID from Generator: ", userId);
} 

userIdGenerator();

//17.
function  userIdGeneratorByUserInput(){
    let idSize = prompt("What is size of ID?");
    let idSizeToInt = parseInt(idSize);
    let numOfIds = prompt("How many id do you want to generate?");
    let numOfIdsToInt = parseInt(numOfIds);
    // let userId = '';
    // const lettersNumbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let lengthOfnumLet = lettersNumbers.length;

    // while(numOfIds > 0){
    //     for(var i=0; i < idSize; i++){
    //         userId += lettersNumbers[Math.floor(Math.random() * lengthOfnumLet)];
    //     }
    //     numOfIds--;
    //     userId = userId + '\n';
    // }
    
    // return console.log("User ID with user input:\n", userId);

    for (let index = 0; index < numOfIdsToInt; index++) {
        console.log(generateUUID(idSizeToInt));
    }
}

//userIdGeneratorByUserInput();

//18. 28/08/2018 04:08
function dispalyDateTime(){
    let now = new Date();
    let day = now.getDate();
    if (day < 10){
        day = "0" + day;
    }
    let month = now.getMonth();
    if(month < 10){
        month = "0" + month;
    }
    let year = now.getFullYear();
    let hours = now.getHours();
    if(hours < 10){
        hours = "0" + month;
    }
    let minutes = now.getMinutes(); 
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    return console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

dispalyDateTime();

//19. 
function rgbColorGenerator(){
  let rgb = new Array();
  for(let i=0; i < 3; i++){
      rgb.push(Math.floor(Math.random()*256));
  }
  return console.log(`rgb (${rgb})`);
}

rgbColorGenerator();

function rgbColorGenerator2(){
    let rgb = [];
    for(let i=0; i < 3; i++){
        rgb.push(Math.floor(Math.random()*256));
    }
    return console.log(`rgb2 (${rgb})`);
    }
    
    rgbColorGenerator2();

// 20.
var personAccount ={ 
    firstName: 'Hyesoo',
    lastName: 'Park',
    incomes: 
      [ {salary : 10000},
        {freelance : 5000},
        {stock : 3000}],
    expenses:
      [ {groceries : 500, des:'sdsada'},
        {electricity : 100, des:'sdsada'},
        {water: 40, des:'sdsada'},
    ],
    totalIncome: function(){
        let sumIncomes = 0;
        for(let i of this.incomes){
            sumIncomes += parseInt(Object.values(i));
        }
        return sumIncomes;
    },
    totalExpense: function(){
        let sumExpenses = 0; 
        for(let i of this.expenses){
            sumExpenses += parseInt(Object.values(i));
        }
        return sumExpenses;
    },
    accountBalance: function(){
        var balance = this.totalIncome() - this.totalExpense();
        return balance;
    },
    accountInfo: function(){
        var info =""
        info = ` First Name: ${this.firstName},\n Last Name: ${this.lastName},\n Bank: 'Nordea',\n AccountNum : 123455666,\n Balance : ${this.accountBalance()}`;
        return info;    
    },
    addIncome: function(){
        const typeNewIncome = prompt("What kind of income?");
        const amountIncome = parseInt(prompt("How much is the income?"));
        return personAccount.incomes.push({[typeNewIncome]: amountIncome});
         
    },
    addExpense: function(){
        const typeNewExpense = prompt("Where did you spend?");
        const amountExpense = parseInt(prompt("How much is the expense?"));
        return personAccount.expenses.push({[typeNewExpense]:amountExpense});
        
    }
}

function printPersonAccount(){
    console.log("TotalIncome : " + personAccount.totalIncome());
    console.log("TotalExpense : " + personAccount.totalExpense());
    console.log("TotalBalance : " + personAccount.accountBalance());
    console.log("*AccountInfo :\n" + personAccount.accountInfo());
    //console.log("Add Income :" + personAccount.addIncome());
    console.log("Add expense :"+ personAccount.addExpense());
    /*
    let typeNewExpense = prompt("Where did you spend?");
    let amountExpense = parseInt(prompt("How much is the expense?"));
    let newExpense = new Object();
    newExpense[typeNewExpense] = amountExpense;
    personAccount.expenses.push(newExpense);*/
}

//printPersonAccount();

// 21. Calculation with 'String literal'
var hisIncome = {
    salary:  4000,
    bonus: 10000,
    onlineCourse: 5500,
    sumOfIncome : function(){
        return `${this.salary+this.bonus+this.onlineCourse}`;
    }
}

console.log(hisIncome.sumOfIncome());


/******* JS Exercise: 1, Part 2 *******/
//1. 
/*
function twoLotteries(){
    var lottery = new Array(7);
    [...lottery].forEach(function(digit){
        digit = Math.floor(Math.random()*9)+1; 
        push.(digit);
                console.log(digit);
    })
    return console.log(lottery);
}

twoLotteries();
*/

function generateUUID(idLength = 10) {
    let id = new Array(idLength);
    
    // Generate random number or character
    let uuidArr = [...id].map( curr => {
    let randomNum = Math.floor(Math.random() * 36);
    let randomNumToStr = randomNum.toString(36);
    let isUppercase = Math.random() > 0.5;
    
    return (curr = isUppercase ? randomNumToStr.toUpperCase() : randomNumToStr);
    });
    
    // Join the uuid array
    let uuid = uuidArr.join("");
    
    return uuid;
    }

    console.log(generateUUID());