//17. DOM
const hexaGenerator = () => {
  hexa = "";
  hexa = hexa + Math.floor(Math.random() * 16777215).toString(16);
  if ((hexa.length = 6)) {
    return "#" + hexa;
  }
};

const createDivsSpansCopyBtns = () => {
  let colorInput = document.querySelector(".colorInput");
  
  colorBoard.innerHTML = "";

  if (colorInput.value >= 5) {
    // Array.apply(null, Array(parseInt(colorInput.value))).forEach((a) => {
    new Array(parseInt(colorInput.value)).fill(0).forEach((a) => {
      let div = document.createElement("div");
      div.classList.add("colorDiv");
      colorBoard.appendChild(div);

      //Add span inside each div
      let span = document.createElement("span");
      span.classList.add("span-textContext");
      div.appendChild(span);

      //Add copy button inside each div
      let copy = document.createElement("button");
      copy.textContent = "Copy";
      copy.classList.add("copy", "hide");
      div.appendChild(copy);
    }) 
  } else {
    alert("Please type more than 5");
  }
  colorInput.value = "";
};

const exampleFiveColors = () => {
  for (let i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.classList.add("colorDiv");
    colorBoard.appendChild(div);

    // Adds span inside each div
    let span = document.createElement("span");
    span.classList.add("span-textContent");
    div.appendChild(span);

    // Adds copy button inside each div
    let copy = document.createElement("button");
    copy.textContent = "Copy";
    copy.classList.add("copy", "hide");
    div.appendChild(copy);
  }
  addColorsHexaCodeToDiv();
};

const copyHexaToClipBoard = str => {
  const area = document.createElement("textarea");
  area.value = str;
  console.log("hello", area.value);
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
};

const addColorsHexaCodeToDiv = () => {
  let colordivs = document.querySelectorAll(".colorDiv");

  colordivs.forEach(eachDiv => {
    let hexaColor = hexaGenerator();

    //Assign background color to each div
    eachDiv.style.backgroundColor = hexaColor;
    /**
     * eachDiv.children returns HTML collections like array with
     * [
     * 	0: span.span-textContent
     *   1: button.copy
     * ]
     */
    // Assigns hexaColor value to span text content
    // eachDiv.children[0] === <span>hexaColor value</span>
    let spanElement = eachDiv.children[0];
    spanElement.textContent = hexaColor;

    // eachDiv.children[1] === <button class="copy">
    let eachDivButton = eachDiv.children[1];
    eachDivButton.addEventListener(
      "click",
      eachDivButton.addEventListener("click", () => {
        copyHexaToClipBoard(spanElement.textContent);
      })
    );
    
    if (eachDivButton.classList.contains("hide")) {
      eachDivButton.classList.remove("hide");
    }
  });
};

let colorGeneratorID;


const intervalColors = () => {  
  colorGeneratorID = setInterval(addColorsHexaCodeToDiv, 2000);
  console.log("here", colorGeneratorID);
};

function clearIntervalcolor() {
  clearInterval(colorGeneratorID);
  console.log("stop");
}

//Default example with Five colors
exampleFiveColors();
intervalColors();

const generatorButton = document.querySelector(".generatorBtn");
generatorButton.addEventListener("click", ()=>{
  createDivsSpansCopyBtns();
});

const stopButton = document.querySelector(".stopButton");
stopButton.addEventListener("click", clearIntervalcolor);


// a. -i Generating Hexa
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
