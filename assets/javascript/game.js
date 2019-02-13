// create an array of word bank 
// get random word from array
// initialize array with spaces & dash based on the length of word-answersArr
// create foreach ("_,") spaces
// check player input is in computers choice
// if it is NOT store the letter in array of fails and deduct 1 point from turn

var names = ["berni","facu","phil","adam"];
var compRandom;
var spacesArr = [];
// function initializes program and gets a random word 
// & creates empty array with underscore 
function initializeProgram() {
    compRandom = (names[Math.floor(Math.random() * names.length)]);
    for (i = 0; i < compRandom.length; i++) {
        spacesArr[i]= "_";
    }
    console.log(compRandom);
}
//runs program
initializeProgram();
//this line creates listner function (checkKeyPress) everytime a keyup event happens. "Keyup" is my parameter
document.addEventListener("keyup", checkKeyPress, false);
// function validates to make sure they typed A-Z key otherwise it alerts its not valid key
function checkKeyPress(stroke) {
    if (stroke.keyCode >= "65" && stroke.keyCode <= "90") {
        checkForLetter(stroke.key);
        } else {
        alert("That is not a letter! Try again using A-Z");
    }
}
//function checks for letter in word/location & updates spaceArr
//switching space for letter
function checkForLetter (letter){
    if (compRandom.includes(letter)){
        for (i=0; i < compRandom.length; i++){
            if( compRandom[i]== letter ) {
                spacesArr[i]= letter;
            }
        }
    }
printAns();
}
// function prints letter into space array for holding
//needs to print 
function printAns (){
    var wordAns= "";
    for( i =0; i< spacesArr.length; i++){
        wordAns = wordAns + spacesArr[i];
    }
}

// check for wrong letters/path
// write to the screen
// give points 
