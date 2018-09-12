//17. DOM

// a. -i
/*
const hexaGenerator = ()=>{
    let hexaArr = new Array(6);


    for(let i = 0; i < 8; i++){
        hexaArr.push(Math.floor(Math.random() * 10));
    }
        

    for(let i =0; i < 8; i++){
        hexaArr[i] = Math.floor(Math.random() * 10);
    }
    
    let hexaArrWithValue = [...hexaArr].map( 
        el => el = (Math.floor(Math.random() * 16)).toString(16));
    
    let hexaWithsharp = '#'+ hexaArrWithValue.join("");

    return hexaWithsharp;
};
*/
const hexaGenerator = () => {
    hexa = "";
    hexa = hexa + Math.floor(Math.random() * 16777215).toString(16);
    if(hexa.length = 6){
        return "#" + hexa;
    }
};

const createColorDivs = () => {
  let size = document.querySelector(".colorInput").value;
  colorBoard.innerHTML = "";

  if (size >= 5) {
    for (let i = 0; i < size; i++) {
      let div = document.createElement("div");
      div.classList.add("colorDiv");
      colorBoard.appendChild(div);
    }
  } else {
    alert("Please type more than 5");
  }
  document.querySelector(".colorInput").value = "";
};

const exampleFiveColors = ()=>{
    for (let i = 0; i <5; i++) {
        let div = document.createElement("div");
        div.classList.add("colorDiv");
        colorBoard.appendChild(div);
    }
}

const copyHexaToClipBoard = str => {
    const area = document.createElement('textarea');
    area.value = str;
    console.log("hello", area.value);
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area); 
}

let hexaColor = [];

const addColorsHexaCodeToDiv = () => {
  let colordivs = document.querySelectorAll(".colorDiv");
  
  colordivs.forEach((eachDiv, index) => {
    hexaColor[index] = hexaGenerator();
    //console.log("hexaColor[index]",hexaColor);
    eachDiv.style.backgroundColor = eachDiv.textContent = hexaColor[index];
    // Add copy button
    let copy = document.createElement("button");
    copy.textContent = "Copy";
    copy.classList.add("copy");
    eachDiv.appendChild(copy); 
    
    // document.querySelector('.copy').addEventListener("click", ()=>{
    // copyHexaToClipBoard(hexaColor[index]);
    // })
  });
};
console.log('hexaColor-1', hexaColor);

//Default example with Five colors
exampleFiveColors();
addColorsHexaCodeToDiv();

let copyButtons = document.querySelectorAll(".copy");
copyButtons.forEach((eachButton, index)=>{
    //console.log("copy-Button-index", eachButton);
    eachButton.addEventListener("click", ()=>{
        //console.log("from click", hexaColor[index], index);
        copyHexaToClipBoard(hexaColor[index]);
    })
})

/*
const addCopybuttonToDiv = ()=>{
    let copy = document.createElement("copy");
    copy.textContent = "Copy";
    copy.classList.add("copy");
    div.appendChild(copy);
}
*/
const generatorButton = document.querySelector(".generatorBtn");

let colorGeneratorID;

const intervalColors = () => {
  createColorDivs(); 
  colorGeneratorID = setInterval(addColorsHexaCodeToDiv, 2000);
  console.log("here", colorGeneratorID);
};

generatorButton.addEventListener("click", intervalColors);

const stopButton = document.querySelector(".stopButton");

function clearIntervalcolor() {
  clearInterval(colorGeneratorID);
  console.log("stop");
}

stopButton.addEventListener("click", clearIntervalcolor);

/*

function clearIntervalcolor(){
    clearInterval(colorGenerator);
}
stopButton.addEventListener('click', clearIntervalcolor);
/*

/*
const multiHexaGenerator = () => {
    let size = document.querySelector('.colorInput').value;
    console.log("size test",size);
    let multiHexaStore = [];
    for(let i=0; i < size; i++){
        multiHexaStore.push(hexaGenerator());
    }
    
    //document.querySelector('.colorInput').value = "";
    return multiHexaStore;
}

// a. -ii , -iii, -iv.

const displayHexaColor = () => {
    let multiHexadecimal = multiHexaGenerator();
    colorBoard.innerHTML = ""; // clear the previous color
    multiHexadecimal.forEach(function(eachHexa){
        let div = document.createElement('div');
        div.classList.add('colorDiv','hexaColor');
        div.textContent = eachHexa;
        div.style.height = "5rem";
        div.style.lineHeight = "5rem";
        div.style.paddingLeft = "3rem";
        div.style.backgroundColor = eachHexa;
        colorBoard.style.borderRadius = "10%";
        colorBoard.appendChild(div);
    })
    return multiHexadecimal;
}


//Buttons & Click Events
const generatorButton = document.querySelector('.generatorBtn');
const stopButton = document.querySelector('.stopButton');


let colorGenerator;

function intervalColors(){
    colorGenerator = setInterval(displayHexaColor, 2000);
}


function clearIntervalcolor(){
    clearInterval(colorGenerator);
}

generatorButton.addEventListener('click', intervalColors);
stopButton.addEventListener('click', clearIntervalcolor);

//displayHexaColor();
//colorInterval()

*/
