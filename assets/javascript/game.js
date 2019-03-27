// create an array of word bank 
// get random word from array
// initialize array with spaces & dash based on the length of word-answersArr
// create foreach ("_,") spaces
// check player input is in computers choice
// if it is NOT store the letter in array of fails and deduct 1 point from turn

var names = ["berni", "facu", "phil", "adam"];
var compRandom;
var usedletters = [];
var spacesArr = [];
var guessedLetter = [];
var wrongLetters = [];
var tries = 5;
var wins = 0;
var loses = 0;
var fullName = [];

// function initializes program and gets a random word 
// & creates empty array with underscore 
function initializeProgram() {

    compRandom = (names[Math.floor(Math.random() * names.length)]);

    for (i = 0; i < compRandom.length; i++) {
        spacesArr[i] = "_";
        console.log(spacesArr);
    }
    wrongLetters =[];
    fullName = [];
    $("#guessed-letters").text(" ");
    $("#nameArr").text(spacesArr);
    console.log(compRandom);
}

function restartGame() {
    // restartGame().show();
    tries = 5;
    $("#chances-left").text(tries);
    initializeProgram();
    
    $("#nameArr").text();
    $("#guessed-letters").text(" ");
    $("#startBtn").show();
    
    $("#restartBtn").show();

}

//runs program
// initializeProgram();

//this line creates listner function (checkKeyPress) everytime a keyup event happens. "Keyup" is my parameter
document.addEventListener("keyup", checkKeyPress, false);

// function validates to make sure they typed A-Z key otherwise it alerts its not valid key

function checkKeyPress(stroke) {

    if (stroke.keyCode >= "65" && stroke.keyCode <= "90") {
        checkForLetter(stroke.key);
        console.log(stroke.key);
        usedletters.push(checkForLetter);

    } else {
        alert("That is not a letter! Try again using A-Z");
        console.log(stroke.key);
    }
}

//function checks for letter in word/location & updates spaceArr
//switching space for letter
function checkForLetter(letter) {
    if (compRandom.includes(letter)) {

        for (i = 0; i < compRandom.length; i++) {
            // console.log(compRandom);
            if (compRandom[i] == letter) {
                spacesArr[i] = letter;

                if (letter === spacesArr[i]) {
                    debugger;
                    guessedLetter.push(letter);

                    // spacesArr.push([i]);
                }
                $("#nameArr").text(spacesArr);
                console.log(spacesArr);
                fullName[i] = letter;
                console.log(fullName);
            }

        } if (compRandom.length === fullName.length) {
            console.log("you win");
            wins++;
            $("#wins").text(wins);
            $("#restartBtn").show();
            // restartGame();
        }
    }
    else {
        tries -= 1;
        debugger;
        wrongLetters.push(letter);
        $("#guessed-letters").text(wrongLetters);
        $("#chances-left").text(tries);
        if (tries === 0) {
            // alert("You lose");
            $("#nameArr").text(compRandom);
            loses ++;
            $("#loses").text(loses);
           
            $("#restartBtn").show();
        }
    }
}


function startGame() {
    initializeProgram();
    $("#startBtn").hide();
    tries = 5;
    $("#chances-left").text(tries);
    $("#guessed-letters").text(" ");
    $("#nameArr").text(spacesArr);
}


// function prints letter into space array for holding
//needs to print 
// function printAns (){
//     var wordAns= "";
//     for( i =0; i < spacesArr.length; i++){
//         wordAns = wordAns + spacesArr[i];
//     }
// }

// check for wrong letters/path
// write to the screen
// give points 
