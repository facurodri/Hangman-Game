// create an array of word bank 
// get random word from array
// initialize array with spaces & dash based on the length of word-answersArr
// check player input is in computers choice
// if it is NOT store the letter in array of fails and deduct 1 point from turn

var names = ["Lionel Messi", "cristiano ronaldo", "Micheal Platini", "Luka Modric", "stanley matthews"];
var compRandom;
var usedletters = [];
var spacesArr = [];
var wrongLetters = [];
var tries = 5;
var wins = 0;
var loses = 0;
var fullName = [];

// function initializes program and gets a random word 
// & creates empty array with underscore 
function initializeProgram() {
    compRandom = (names[Math.floor(Math.random() * names.length)]);
    compRandom = compRandom.toUpperCase();
    spacesArr = [];
    wrongLetters = [];
    fullName = [];
    emptyName = [];
    
    emptyName = compRandom.split("");

    console.log(emptyName);
    
    for (i = 0; i < emptyName.length; i++) {
       
        if(emptyName[i] !== " "){
            spacesArr[i] = ("_");
            
        } else {
            spacesArr[i] = " ";          
        }  
    }   
    
    emptyName.push(spacesArr);
    
    emptyName = spacesArr.join(" ");
              
    // console.log(emptyName);
    console.log(compRandom);
    
    }

function startGame() {
    initializeProgram();
    $("#startBtn").hide();
    $("#restartBtn").hide();
    tries = 5;
    $(".keepscore").show();
    $("#chances-left").show();
    $(".wordSection").show();
    $("#chances-left").text(tries);
    $("#guessed-letters").text("");
    $("#nameArr").text(emptyName);
}

//this line creates listner function (checkKeyPress) everytime a keyup event happens. "Keyup" is my parameter
document.addEventListener("keyup", checkKeyPress, false);

// function validates to make sure they typed A-Z key otherwise it alerts its not valid key

function checkKeyPress(stroke) {

    if (stroke.keyCode >= "65" && stroke.keyCode <= "90") {
    
        checkForLetter(stroke.key.toUpperCase());
        // console.log(checkForLetter);
        usedletters.push(checkForLetter);
       

    } else {
        alert("That is not a letter! Try again using A-Z");

    }
}

//function checks for letter in word/location & updates spaceArr
//switching space for letter
function checkForLetter(letter) {
    
    // letter = letter.toUpperCase();
    if (compRandom.includes(letter)) {

        for (i = 0; i < compRandom.length; i++) {
            if (letter.toUpperCase() == compRandom[i]) {
                
                spacesArr[i] = letter;
                $("#nameArr").text(spacesArr);
                
                fullName.push(spacesArr[i]);

                console.log(fullName.length);
                console.log(spacesArr.length);
                
                
            }
        }

        
        if (compRandom.length === fullName.length) {
            
                console.log("winner")
                wins++;
                //show win
                $("#nameArr").text(compRandom);
                $("#wins").text(wins);
                $("#guessed-letters").text('');
                $("#restartBtn").show();
            

        }
    } else {
        if (!wrongLetters.includes(letter)) {
            tries -= 1;
            wrongLetters.push(letter.toUpperCase());
        }
        $("#guessed-letters").text(wrongLetters);

        $("#chances-left").text(tries);

        if (tries === 0) {
            $("#chances-left").hide();
            $("#nameArr").text(compRandom);
            loses++;
            $("#loses").text(loses);
            $("#restartBtn").show();

        }
    }
}
