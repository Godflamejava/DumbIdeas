const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");

const submitButton = document.getElementById("submit");
const container = document.getElementById('container');

const talk = document.getElementById('talk');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');

var torcher = getRandomInt(30,100); 

const arr_of_functions = [
    moveInput,
    eraseInput,
    ninjaInput,
    emptyInput,
    autoFillInput]

    const arr_of_character_interaction=[
        {
        'audio':'do_you_always_dissapoint_like_this.wav',
        "message":"Do you always dissapoint like this"
        },
        {
         'audio':'i_m_the_final_boss_of_user_input.wav',
        "message":"I m the final boss of user input"
        },
        {
         'audio':'i_saw_your_webcam_unfourtunate.wav',
        "message":"I saw your webcam unfortunate"
        },
         {
         'audio':'is_that_your_nomrla_face_or_lighting.wav',
        "message":"Is that your normal face or lighting"
        },
         {
         'audio':'submit_again_i_dare_you.wav',
        "message":"Subit again, I dare you"
        },
         {
         'audio':'that_was_pathetic_try_again_worm.wav',
        "message":"That was pathetic try again worm"
        },         
        {
         'audio':'why_do_you_even_try.wav',
        "message":"Why do you even try"
        },        
        {
         'audio':'you_are_not_a_user_you_are_victim.wav',
        "message":"You are not a user you are victim"
        },        
        {
         'audio':'you_are_not_submitting_you_are_surrendering.wav',
        "message":"You are not submitting you are surrendering"
        },
        {
         'audio':'you_missed_again_impressive.wav',
        "message":"You missed again impressive"
        }
    ]

function resetInput (inputBox){
    var old_element = inputBox;
var new_element = old_element.cloneNode(true);
old_element.parentNode.replaceChild(new_element, old_element);
}
function addCharcter(){
     audio1.src = "resouces/evil_laugh_2.wav";
      const k = arr_of_character_interaction[getRandomInt(0,9)];
          audio2.src = "resouces/"+k.audio;
          talk.innerHTML = k.message;
     audio1.play();
     audio1.onended = function (){
          audio2.play();
     }
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
addCharcter();
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
addCharcter();
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
addCharcter();
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
addCharcter();
        torcher=torcher-1;
    });
    }
    else{
        resetInput(inputBox);
     }
}

function autoFillInput(inputBox) {
    if(torcher>0){
        inputBox.value = "I m gay :)"
        inputBox.focus();
addCharcter();
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
addCharcter();
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
addCharcter();
   torcher=torcher-1;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

firstNameInput.addEventListener('keydown',function(){arr_of_functions[getRandomInt(0,4)](firstNameInput);});
lastNameInput.addEventListener("keydown", function(){arr_of_functions[getRandomInt(0,4)](lastNameInput);});
emailInput.addEventListener("keydown", function(){arr_of_functions[getRandomInt(0,4)](emailInput);});
submitButton.addEventListener("mouseenter",makeButtonMove);
submitButton.addEventListener("click",makeButtonMove);
