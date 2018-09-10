/******* JS Exercise: 1, Part I *******/

"use strict";
// 1. Variable 
// 1-a. 
let firstName = "TTiBBo";
let lastName = "Park";
let maritalStatus; 
const COUNTRY = Symbol();
let age = null;

//1-b.
//let firstName = "TTiBBo", lastName = "Park", maritalStatus = "Single", country = "Finland", age = 3;


//1-c.
var myAge = 25;
var yourAge = 30;

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");

//2. Data Types
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof maritalStatus);
console.log(typeof COUNTRY);
console.log(typeof age);

//3. String
var company = "Integrify Academy";
console.log("a : " + company);
console.log("b : length " + company.length); //emtpy space is also counted
console.log("c : toUpperCase " + company.toUpperCase());
console.log("d : toLowerCase " + company.toLowerCase());
console.log("e : slice " + company.slice(0, 9));
console.log("e : substr " + company.substr(0, 9));
console.log("e : substring " + company.substring(0, 9));
console.log("f : include " + company.includes("Academy"));
console.log("g : split " + company.split(""));
// console.log(+company[1]);
console.log("h : split " + company.split(" "));
let companyWithSplit = company.split(" ");
console.log(companyWithSplit);
console.log(company.split(" "));
console.log(
  "h : split+replace " + company.replace(companyWithSplit[0], "Microsoft")
);
let companiesOfIT = "Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon";
console.log("i : split for companies >> " + companiesOfIT.split(","));
console.log("j : replace " + company.replace("Integrify", "Microsoft"));
console.log("k : charAt " + company.charAt(company.length - 7));
console.log("k : chaCoderAt " + company.charCodeAt(company.length - 7));
console.log("m : indexOf " + company.indexOf("e"));
console.log("n : lastIndexOf " + company.lastIndexOf("e"));
console.log("o : trim " + company.trim());
console.log("p : startsWith " + company.startsWith("I")); //Case sensitive
console.log("q : endsWith " + company.endsWith("y"));
console.log("r : match " + company.match(/[Aa]/g));
let company1 = "Integrify";
let company2 = "Academy";
console.log("s : concat " + company1.concat(company2));
console.log("t : " + company.repeat(5));

// 4. 
// 4-a. 
console.log(true || true);
console.log(true && true);
console.log(3 > 2);

//4-b.
console.log(false || false);
console.log(false && true);
console.log(3 < 2);

//5.
let operandOne = 4;
let operandTwo = 3;

console.log(operandOne + operandTwo);
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne % operandTwo);
console.log(operandOne = operandOne++);

// 11-c.
while(operandOne<10){
  console.log("++ operator ",operandOne++);
}
while(operandTwo > 0){
  console.log("-- operator ",operandTwo--);
}

// 6. Comparison Operators
console.log("4 > 3", (4 > 3));
console.log("4 < 3", (4 < 3));
console.log("4 <= 3", (4 <= 3));
console.log("4 == 4", (4 == 4));
console.log("4 != 4 ", (4 != 4));
console.log("4 == '4'", (4 == '4'));
console.log("4 === 4", (4 === 4));
console.log("4 !== 4",(4 !== 4));

// 7. Logical Operators
console.log("4 > 3 && 10 < 12", (4 > 3 && 10 < 12));
console.log("4 > 3 && 10 > 12", (4 > 3 && 10 > 12));
console.log("4 > 3 || 10 < 12", (4 > 3 || 10 < 12));
console.log("4 > 3 || 10 > 12", (4 > 3 || 10 > 12));
console.log("!(4 > 3) ", !(4 > 3));
console.log("!(4 < 3)", (!(4 < 3)));
console.log("!(false)", (!(false)));
console.log("!(4 > 3 && 10 < 12)",(!(4 > 3 && 10 < 12)));
console.log("!(4 > 3 && 10 > 12)", (!(4 > 3 && 10 > 12)));

// 8 Conditional
// 8-a.
function findDriveAge() {
  var yourAge = prompt("Enter your age.");
  var leftAge = 18 - yourAge;

  if (yourAge >= 18) {
    document.getElementById("demo").innerHTML = "You are old enough to drive.";
    console.log("You are old enough to drive.");
  } else {
    document.getElementById("demo").innerHTML =
      "You are left with " + leftAge + " to drive.";
    console.log("You are left with " + leftAge + " to drive.");
  }
}

// findDriveAge();

//8-b.
function findAgeDifference() {
  var myAge = prompt("Enter my age.");
  var yourAge = prompt("Enter your age.");
  var ageDiff = Math.abs(yourAge - myAge);
  if (yourAge > myAge) {
    console.log("You are " + ageDiff + " older than me.");
  } else if (yourAge < myAge) {
    console.log("I am " + ageDiff + " older than you.");
  } else {
    console.log("You and I, we have same age");
  }
}

// findAgeDifference();

//9. Ternary Operator
let a = 4;
let b = 3;

console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

// 10. Array
function arrExcercise() {
  var itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
  ];
  console.log("a. : " + itCompanies);
  console.log("b. : " + itCompanies.length);
  console.log("c. : " + itCompanies[0]);
  console.log("c. : " + itCompanies[1]);
  console.log("c. : " + itCompanies[2]);
  console.log("c. : " + itCompanies[3]);
  console.log("c. : " + itCompanies[4]);
  console.log("c. : " + itCompanies[5]);
  console.log("c. : " + itCompanies[6]);
  console.log("d. : " + itCompanies.toString().toUpperCase());
  console.log(
    "e. with comman & space : " +
      itCompanies.join(", ") +
      " are big IT companies."
  );
  console.log("f. sort : " + itCompanies.sort());
  console.log("g. reverse : " + itCompanies.reverse());
}

arrExcercise();

//. 11 Loop
// 11-a.
function interateNums1(){
  let i = 0;
  let numArr = [];
  while(i<=10){
    numArr.push(i);
    i++;
  }
  console.log("numArr",numArr);
}

interateNums1();

function interateNums2(){
  let i = 0;
  let numArr = [];
  do{
    numArr.push(i);
    i++;
  }while(i<=10)

  console.log("numArr",numArr);
}

interateNums2();

// 11-b.
function interateNums3(){
  let i = 10;
  let numArr = [];
  while(i>=0){
    numArr.push(i);
    i--;
  }
  console.log("numArr",numArr);
}

interateNums3();

function interateNums4(){
  let i = 10;
  let numArr = [];
  do{
    numArr.push(i);
    i--;
  }while(i>=0);
  console.log("numArr",numArr);
}

interateNums4();


// 12.
// 12-a.
function fullname(){
  let firstName = "HyeSoo";
  let lastName = "Park";
  return firstName + lastName;
}

console.log(fullname());

//12-b.
function fullnameWithParam(firstName, lastName){
  return firstName + lastName;
}

console.log(fullnameWithParam("HyeSoo","Park"));

//12-c.
function addNumbers(num1, num2){
 return num1+num2;
}

console.log(addNumbers(2,4));

//12-d.
function capitalizeItems() {
  var itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
  ];
  /* iterating items in array with for loop
     for(var i =0; i < itCompanies.length; i++){
        var itCompanitesCap = [];
        itCompanitesCap.push(itCompanies[i].toUpperCase()); 
        //document.getElementById("demo").innerHTML = itCompanitesCap.toString();   
    }
    return itCompanitesCap;  */

  // iterating items in array with 'for of'
  var itCompaniesCap = [];
  for (var i of itCompanies) {
    itCompaniesCap.push(i.toUpperCase());
  }
  console.log("Cap with itCompanies : " + itCompaniesCap.join(", "));
}

capitalizeItems();

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];
function printArray(arr) {
  console.log("printArray" + arr);
}
printArray(itCompanies);

//12-e.
function reverseArray(arr) {
  var reversedCompanies = [];

  //reversing with for of & unshift
  /*  for(var i of arr){
        reversedCompanies.unshift(i);
    }
    return console.log(reversedCompanies); */

  //reversing with for & from last item
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedCompanies.push(arr[i]);
    console.log(reversedCompanies, "test");
  }
  return console.log(reversedCompanies);
}

reverseArray(itCompanies);

//12-f.
function capitalizeArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].toUpperCase());
  }
}

capitalizeArray(itCompanies);

//12-g.
function removeItem(arr) {
  arr.splice(2, 2);
  return console.log(arr);
}

removeItem(itCompanies);

//12-h.
function addItem(arr,newItem) {
  arr.splice(1, 0, newItem);
  return console.log(arr);
}

addItem(itCompanies, "Naver");

//12-i.
let numArray = [2, 5, 7, 8, 9, 13,70];

function sumOfNumbers1(numArr) {
  var sumNum = 0;
  numArr.forEach(function(element) {
    sumNum += element;
  });
  return sumNum;
}

console.log("sum Of Numbers with forEach:" + sumOfNumbers1(numArray));

function sumOfNumbers2(numArr) {
    return numArr.reduce(function(acc, curr) {
        return acc + curr;
    });
}

console.log("sum Of Numbers with reduce :" + sumOfNumbers2(numArray));

//12-j.
function numOfOdds(numArr) {
  var sumOodNum = 0;
  for (var i of numArr) {
    if (i % 2 === 1) {
      sumOodNum += i;
    }
  }
  return sumOodNum;
}

console.log("sum Of Odds : " + numOfOdds(numArray));

//12-k.
function sumOfEven(numArr) {
  let sumOfEven = 0;
  const filteredEvenNum = numArr.filter(function(num) {
    return num % 2 === 0;
  });
  filteredEvenNum.forEach(function(evenNum) {
    sumOfEven += evenNum;
  });
  return console.log("sum of Even : " + sumOfEven);
}

sumOfEven(numArray);

//12-l.
function evensAndOdds(numArr) {
  var evenCounts = 0;
  var oddCounts = 0;

  numArr.forEach(function(num) {
    if (num % 2 === 0) {
      evenCounts += 1;
    } else if (num % 2 === 1) {
      oddCounts += 1;
    }
  });
  return console.log(
    `The number of odd are ${oddCounts}\n` +
      `The number of even are ${evenCounts}`
  );
}

evensAndOdds(numArray);

// 12-m.
function randomHexaNumberGenerator() {
  let hexaCode = "";
  const lettersNumbers = "0123456789abcdef";

  for (var i = 0; i < 6; i++) {
    hexaCode += lettersNumbers[Math.floor(Math.random() * 16)];
  }
  return console.log("Random HexaCode : ", hexaCode);
}

randomHexaNumberGenerator();

// 12-n.
function userIdGenerator() {
  let userId = "";
  const lettersNumbers =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lengthOfnumLet = lettersNumbers.length;

  for (var i = 0; i < 7; i++) {
    userId += lettersNumbers[Math.floor(Math.random() * lengthOfnumLet)];
  }
  return console.log("ID from Generator: ", userId);
}

userIdGenerator();

// 12-o.
function userIdGeneratorByUserInput() {
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

function generateUUID(idLength = 10) {
    let id = new Array(idLength);
    
    // Generate random number or character
    let uuidArr = [...id].map(curr => {
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

//12-p.
function rgbColorGenerator() {
  let rgb = new Array();
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return console.log(`rgb (${rgb})`);
}

rgbColorGenerator();

function rgbColorGenerator2() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return console.log(`rgb2 (${rgb})`);
}

rgbColorGenerator2();

// 13.
var personAccount = {
  firstName: "Hyesoo",
  lastName: "Park",
  incomes: [
    { income: 10000, description: "salary" },
    { income: 5000, description: "freelance" },
    { income: 3000, description: "stock" }
  ],
  expenses: [
    { expense: 500, description: "electricity" },
    { expense: 100, description: "water" },
    { expense: 40, description: "coffee" }
  ],
  totalIncome() {
    let sumIncomes = 0;
    for (let i of this.incomes) {
      sumIncomes += parseInt(i['income']);
    }
    return sumIncomes;
  },
  /*To sum up values contained in an array of objects 
  you must supply an initial value so that each item passes through your function.*/
  totalExpense() {
    return this.expenses.reduce(function(acc, curr){
        return acc + curr.expense;
    },0)
  },
  accountBalance() {
    let balance = this.totalIncome() - this.totalExpense();
    return balance;
  },
  accountInfo() {
    let info = "";
    info = ` First Name: ${this.firstName},\n 
             Last Name: ${this.lastName},\n
             Bank: 'Nordea',\n 
             AccountNum : 123455666,\n 
             Balance : ${this.accountBalance()}`;
    return info;
  },
  addIncome() {
    const income = parseInt(prompt("How much is the income?"));
    const description = prompt("What kind of income?");
    this.incomes.push({income, description});
    return this.incomes;
  },
  addExpense() {
    const expense = parseInt(prompt("How much is the expense?"));
    const description = prompt("Where did you spend?");
    this.expenses.push({expense, description});
    return this.expenses;
  }
};

function printPersonAccount() {
  console.log(personAccount.addIncome());
  console.log(personAccount.addExpense());
  console.log("TotalIncome : " + personAccount.totalIncome());
  console.log("TotalExpense : " + personAccount.totalExpense());
  console.log("TotalBalance : " + personAccount.accountBalance());
  console.log("*AccountInfo :\n" + personAccount.accountInfo());
  /*
    let typeNewExpense = prompt("Where did you spend?");
    let amountExpense = parseInt(prompt("How much is the expense?"));
    let newExpense = new Object();
    newExpense[typeNewExpense] = amountExpense;
    personAccount.expenses.push(newExpense);*/
}

//printPersonAccount();

//14. 28/08/2018 04:08
function dispalyDateTime() {
  let now = new Date();
  let day = now.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let month = now.getMonth();
  if (month < 10) {
    month = "0" + month;
  }
  let year = now.getFullYear();
  let hours = now.getHours();
  if (hours < 10) {
    hours = "0" + month;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
}

dispalyDateTime();

// 15. Calculation with 'String literal'
var hisIncome = {
  salary: 4000,
  bonus: 10000,
  onlineCourse: 5500,
  sumOfIncome: function() {
    return `${this.salary + this.bonus + this.onlineCourse}`;
  }
};

console.log(hisIncome.sumOfIncome());

//16. Functional Programming
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// 16-a. 

const randomArr=["Moomin", 2, true, {1: "hei", 2: "lol"},[1, "many", false], "wow"];
function getStringLists(arr){
    let stringList = arr.filter(element=> {
        if(typeof element === 'string'){
            return element;
        }
    });
    return stringList;
}

console.log(getStringLists(randomArr));

// 16-b.
function categorizeCountries(arr){
    let pattern = /.+lands/g;
    const listWithPattern = arr.filter(function(country){
        return pattern.test(country);
    })
    return listWithPattern;
    
}
console.log(categorizeCountries(countries));

//16-c. 
//With Destructuring
function getFirstTenCountries1(arr){
    let one,two,three,four,five,six,seven,eight,nine,ten,rest;
    [one,two,three,four,five,six,seven,eight,nine,ten, ...rest] = arr;
    let firstTenCountries = [one,two,three,four,five,six,seven,eight,nine,ten];
    console.log("Frst Ten Countries with destructuring: ",firstTenCountries);
}

getFirstTenCountries1(countries);

//With filter fn & index
function getFirstTenCountries2(arr){
    let tenCountriesArr = [];
    tenCountriesArr = arr.filter((curr, index)=>{
        if(index<=10) return curr})
    console.log("First Ten Countries with filter: ",tenCountriesArr);
    }

getFirstTenCountries2(countries);

//16-d.
//With slice
function getLastTenCountries1(arr){
    let arrMinusTen = parseInt(arr.length - 10)     ;
    console.log("length", arrMinusTen);
    console.log("ten", arr.slice(1,4));
    console.log("Last ten countries", arr.slice(arrMinusTen, arr.length));
}

getLastTenCountries1(countries);

//16-e
function groupBy(arr){
    return arr.reduce((acc, el)=>{

        let key = el.charAt(0);
        //solution 1. acc[key] = acc[key] || [];
        //solution 2. * associative array
        acc[key] != null ? acc[key].push(el) : acc[key] = [];

      //solution 3.
      /*   if (acc[key] != null) {
            acc[key].push(el); 
        } else {
            acc[key] = [];
        } */
        // acc[key].push(el);
        /* acc[key].map(
            () => {console.log(key, acc[key].length)});
        console.log('Object keys', Object.keys(acc));
        console.log('Object values', Object.values(acc));
        console.log('Object entries', Object.entries(acc)); */

        return acc;
    },{})}

function countPrintByGroup(acc){
  let highestNum = 0;
  let count;
  let firstletterWithHighestNum;
  for(const [key, value] of Object.entries(acc)){
    count = value.length;
    console.log(`Group by : ${key}, Count: ${value.length}\nCountries: ${value}`);
    console.log("count", value.length);
    if(highestNum < count){
      highestNum = count;
      firstletterWithHighestNum = key;
    }
  }
  console.log("highestNum", highestNum);
  
   /*    for(let i=0; i< Object.values(acc).length; i++){
        if(Object.values(acc)[i] != 0){
            console.log(`Group by: ${Object.keys(acc)[i]}, Count : ${Object.values(acc)[i].length}`);
            console.log(`ex -> ${Object.values(acc)[i]}`);
        }   
    }  */
    return console.log(`${firstletterWithHighestNum} has the highest numbers which is ${highestNum}`);
}

//console.log("We are here with countries",groupBy(countries));
//console.log(countPrintByGroup(groupBy(countries)));
