//17. DOM 

//Create Input div, generate button, Input for number of colors
//Create HTML elements
const colorWrapper = document.createElement('div');
const colorInputDiv = document.createElement('div');
const inputBtnDiv = document.createElement('div');
const title = document.createElement('h1');
const colorInput = document.createElement('input');
const generatorButton = document.createElement('button');
const stopButton = document.createElement('button');
const colorBoard = document.createElement("div");

//Give styles
colorWrapper.setAttribute('class','colorWrapper');
colorInputDiv.setAttribute('class','colorInputDiv');
title.setAttribute('class', 'title');
inputBtnDiv.setAttribute('class','inputBtnDiv');
colorInput.setAttribute('class','colorInput');
generatorButton.setAttribute('class','generatorBtn');
stopButton.setAttribute('class','stopButton');
title.textContent = "Hexadecimal Color Generator";
generatorButton.textContent = "Generate";
stopButton.textContent = "Stop";
colorBoard.setAttribute('class','colorBoard');
colorBoard.style.padding = "3rem";

//Add Elements
document.body.appendChild(colorWrapper);
colorWrapper.appendChild(colorInputDiv);
colorInputDiv.appendChild(title);
colorInputDiv.appendChild(inputBtnDiv);
inputBtnDiv.appendChild(colorInput);
inputBtnDiv.appendChild(generatorButton);
inputBtnDiv.appendChild(stopButton);
colorWrapper.appendChild(colorBoard);
console.log("colorBoard",colorBoard);

// a. -i
const hexaGenerator = ()=>{
    //let hexaArr = [];
    let hexaArr = new Array(6);

    /*
    for(let i = 0; i < 8; i++){
        hexaArr.push(Math.floor(Math.random() * 10));
    }*/
        
   /*
    for(let i =0; i < 8; i++){
        hexaArr[i] = Math.floor(Math.random() * 10);
    }*/

    let hexaArrWithValue = [...hexaArr].map( 
        el => el = (Math.floor(Math.random() * 16)).toString(16))
    
    let hexaWithsharp = '#'+ hexaArrWithValue.join("");
    //console.log(hexaWithsharp);
    return hexaWithsharp;
}

console.log(document.querySelector('.colorInput').value);
const multiHexaGenerator = () => {
    let size = document.querySelector('.colorInput').value;
    let multiHexaStore = [];
    for(let i=0; i< size; i++){
        multiHexaStore.push(hexaGenerator());
    }
    return multiHexaStore;
}

// a. -ii , -iii, -iv.

const displayHexaColor = () => {
    let multiHexadecimal = multiHexaGenerator();
    colorBoard.innerHTML = ""; // clear the previous color
    multiHexadecimal.forEach(function(eachHexa){
        let div = document.createElement('div');
        div.textContent = eachHexa;
        div.style.height = "5rem";
        div.style.lineHeight = "5rem";
        div.style.paddingLeft = "3rem";
        div.style.backgroundColor = eachHexa;
        colorBoard.style.borderRadius = "10%";1
        colorBoard.appendChild(div);
    })
    return multiHexadecimal;
}



let colorInterval = setInterval(displayHexaColor, 200);

generatorButton.addEventListener('click', ()=>{
    displayHexaColor();
})

stopButton.addEventListener('click', ()=>{
    clearInterval(colorInterval)
})

//displayHexaColor();
//colorInterval()