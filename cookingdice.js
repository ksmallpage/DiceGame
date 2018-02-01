"use strict";


// create a function to generte a random number
function TrowDice(dice){
let randomNumber = Math.floor(Math.random()* dice);
return randomNumber;
}


// create a function to create a meal 
function createPlayerMeals(player){
    // create a mealplan array variable
    let playermealArray = [];
     // welcome the player and ask to select meal

     // create the variables // arrays for the dice;
    // 4 Dice
    let strachArray = ["Rice", "Pasta", "Spuds", "Beans"];
    // 6 Dice
    //let mealArray = ["Indian", "Italian", "French", "Chinese", "British", "Mexican"];
    // 6 Dice testing
    let mealArray = ["British", "British", "British", "British", "British", "British"];
    // 8 Dice
    let proteinArray = ["Salmon", "Beef", "Chicken", "Pork", "Tofu", "Lamb", "Shrimp", "Turkey"];
    // 10 Dice
    let techniqueArray = ["Boiled", "Barbecued", "Cassoled", "Braised", "Fried", "Grilled", "Poached", "Steamed", "Sauted", "Roast"];

    // 12 Dice
    let vegetablesArray = ["Asparagrus", "Kale", "Eggplant", "Turnip", "Green Beans", "Cabbage", "Zucchini", "Leek", "Pepper", "Brussel Sprouts", "Spinach", "Broccolini"];


    // select the meal build the meal array
         let selectedCounty = mealArray[TrowDice(6)];
         playermealArray.push(selectedCounty);

         let selecetdTechnique = techniqueArray[TrowDice(10)];
         playermealArray.push(selecetdTechnique);

         let selectedProtein = proteinArray[TrowDice(8)];
         playermealArray.push(selectedProtein);

         let selectedStrach = strachArray[TrowDice(4)];
         playermealArray.push(selectedStrach);

         let selectedVegetable = vegetablesArray[TrowDice(12)];
         playermealArray.push(selectedVegetable);

         //let playerScorce = playermealArray.push(45);

    // return array 
        return playermealArray;

}

function alertPlayerTheirMeal(player, playerArray){

 alert( player + " Your challenge is to make a " + playerArray[1] + " " + playerArray[0] + " dish which includes " + playerArray[2] + ", " + playerArray[3] + " and " + playerArray[4] + "!!!!" );
 alert ("You have 1 hour to make the meal before your guest arrives  but be aware stuff happens ");
}
 


function checkElementInArray(anArray, elementNumber, elementData){
   let ArraytoCheck = anArray;
   let ArrayElementNumeberToCheck = elementNumber;
   let ArrayDataToCheck = elementData;

    if (ArraytoCheck[elementNumber] === ArrayDataToCheck) {
        return true;
    }
        return false;
}
/// takes meal array and checks for British (true)
function changeIfBritish(Isinarray, playerMeal, player, score){
    let isBritish = Isinarray;


    while (isBritish === true){ // change to if else..

        alert("Sorry having to cook British food is going to add time -add 10 mins and we will see if we can give you something better");
        playerMeal = createPlayerMeals(player);
        alertPlayerTheirMeal(player, playerMeal);
        score += 10;
        isBritish = false;
    }
    return score;
}


function howMuchTimeToCook(playerOne, playerOneCookingTime,playerTwo,playerTwoCookingTime){
    alert(playerOne + " you need " + playerOneCookingTime + " Mins, " + playerTwo + " you need " + playerTwoCookingTime + " Mins to complete your meals");

}

function willYourGuestLikeIt() {

let userQuestion = alert("Will your guest like your meal?");
let randomNumber = Math.floor(Math.random()* 7);
let eightBall = '';
switch(randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'Is is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break; 
  case 3:
  eightBall = 'Cannot predict now';
  break; 
  case 4:
  eightBall = 'Don\'t count on it';
  break; 
  case 5:
  eightBall =  'My sources say no';
  break;
  case 6:
  eightball = 'Outlook not so good';
  break;
  case 7:
  eightball = 'Signs point to yes';
  break;
  default:
  eightball ="whatever";

}
alert(' The eight ball answered:' + eightBall);

}



//checkIfBritish(checkElementInArray(playerOneMeal, 0, "British"));


//////////////////////// *************************  //////////////////////////////////////


// set up the  players and their variables;
let playerOne = prompt ("Who is cooking today?");
let playerTwo = prompt ("Who is your cook off Challenger today?");
alert ("Welcome " + playerOne + " and "  + playerTwo  + " may the best chef win!!!!");
// create a array to store the meal we are going to make 
let playerOneMeal = createPlayerMeals(playerOne);
let playerTwoMeal = createPlayerMeals(playerTwo);
let playerOneScore = 45;
let playerTwoScore = 45;
alertPlayerTheirMeal(playerOne,playerOneMeal);

playerOneScore = changeIfBritish(checkElementInArray(playerOneMeal, 0, "British"), playerOneMeal, playerOne, playerOneScore);

alertPlayerTheirMeal(playerTwo,playerTwoMeal);

playerTwoScore = changeIfBritish(checkElementInArray(playerTwoMeal, 0, "British"), playerTwoMeal, playerTwo, playerTwoScore);

howMuchTimeToCook(playerOne,playerOneScore,playerTwo,playerTwoScore);

willYourGuestLikeIt();



function runGame() {

}
// if element is english have player try again and add to score

// have players sabatage each others meals 


// if they go over an hour after 3 sabotages they loose..
