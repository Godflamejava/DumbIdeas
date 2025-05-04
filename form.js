const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");

const submitButton = document.getElementById("submit");
const container = document.getElementById('container');

const talk = document.getElementById('talk');

var torcher = getRandomInt(30,100); 

const arr_of_functions = [
    moveInput,
    eraseInput,
    ninjaInput,
    emptyInput,
    autoFillInput]

function resetInput (inputBox){
    var old_element = inputBox;
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);
}

function moveInput(inputBox) {
     if(torcher>0){
        console.log(torcher);
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const inputWidth = inputBox.offsetWidth;
    const inputHeight = inputBox.offsetHeight;

    const maxX = containerWidth - inputWidth;
    const maxY = containerHeight - inputHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    inputBox.style.left = `${randomX}px`;
    talk.innerHTML = "CATCH ME IF YOU CAN MOTHERFUCKER HEHEHEHE !"
    inputBox.style.top = `${randomY}px`;
    inputBox.focus();
    inputBox.blur();
    torcher=torcher-1;
     }
     else{
        resetInput(inputBox);
     }
}

function eraseInput(inputBox) {
    if(torcher>0){
        if(inputBox.value.length>2){
    inputBox.value="";
    inputBox.focus();
   talk.innerHTML = "NOPE YOU DON'T GET TO SAY ANYTHING HEHEHEHEHEHE !"
   torcher=torcher-1;
        }
    }
    else{
        resetInput(inputBox);
     }
}

function ninjaInput(inputBox) {
    if(torcher>0){
        inputBox.style.display = "none"
        inputBox.blur();
        setTimeout(()=> {inputBox.style.display = "initial";},getRandomInt(5000, 10000));
   talk.innerHTML = "NINJA MODE ACTIVATED !"
   torcher=torcher-1;
    }
    else{
        resetInput(inputBox);
     }
}

function emptyInput(inputBox) {
    if(torcher>0){
    inputBox.addEventListener('blur',() => {
        inputBox.value ="";
        talk.innerHTML = "YOU DIDN'T TYPE ANYTHING HEHEHEHEHEE !"
        torcher=torcher-1;
    });
    }
    else{
        resetInput(inputBox);
     }
}

function autoFillInput(inputBox) {
    if(torcher>0){
        inputBox.value = "I hate myself "
        inputBox.focus();
   talk.innerHTML = "I HATE YOU TOO, LOOOSER!"
   torcher=torcher-1;
    }
    else{
        resetInput(inputBox);
     }
}

function makeItSmaller(inputBox) {
    if(torcher>0){
        inputBox.style.width =`10px`;
        setTimeout(()=> {inputBox.style.width =`50%`;},getRandomInt(5000, 10000));
   talk.innerHTML = "GOOD LUCK TYPING WITH MICROSCOPE !"
   torcher=torcher-1;
    }
    else{
        resetInput(inputBox);
     }
}

function makeButtonMove() {
    if(torcher>0){
        console.log("button clciked");
        submitButton.style.left = `${Math.random() * 50}vw`;
        submitButton.style.top = `${Math.random() * 50}vh`;
   talk.innerHTML = "NOT TOO FAST BITCH !"
   torcher=torcher-1;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

firstNameInput.addEventListener('keydown',function(){arr_of_functions[getRandomInt(0,6)](firstNameInput);});
lastNameInput.addEventListener("keydown", function(){arr_of_functions[getRandomInt(0,6)](lastNameInput);});
emailInput.addEventListener("keydown", function(){arr_of_functions[getRandomInt(0,6)](emailInput);});
submitButton.addEventListener("mouseenter",makeButtonMove);
submitButton.addEventListener("click",makeButtonMove);
