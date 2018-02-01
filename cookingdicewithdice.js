"use strict";





// create a function to generte a random number single dice




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
    let mealArray = ["Indian", "Italian", "French", "Chinese", "British", "Mexican"];
    // 8 Dice
    let proteinArray = ["Salmon", "Beef", "Chicken", "Pork", "Tofu", "Lamb", "Shrimp", "Turkey"];
    // 10 Dice
    let techniqueArray = ["Boiled", "Barbecued", "Cassoled", "Braised", "Fried", "Grilled", "Poached", "Steamed", "Sauted", "Roast"];

    // 12 Dice
    let vegetablesArray = ["Asparagrus", "Kale", "Eggplant", "Turnip", "Green Beans", "Cabbage", "Zucchini", "Leek", "Pepper", "Brussel Sprouts", "Spinach", "Broccolini"];


    // select the meal build the meal array
         let selectedCountry = mealArray[TrowDice(6)];
         playermealArray.push(selectedCountry);

         let selecetdTechnique = techniqueArray[TrowDice(10)];
         playermealArray.push(selecetdTechnique);

         let selectedProtein = proteinArray[TrowDice(8)];
         playermealArray.push(selectedProtein);

         let selectedStrach = strachArray[TrowDice(4)];
         playermealArray.push(selectedStrach);

         let selectedVegetable = vegetablesArray[TrowDice(12)];
         playermealArray.push(selectedVegetable);

    // return array 
        return playermealArray;

}

function alertPlayerTheirMeal(player, playerArray){

 alert( player + " Your challenge is to make a " + playerArray[1] + " " + playerArray[0] + " dish which includes " + playerArray[2] + ", " + playerArray[3] + " and " + playerArray[4] + "!!!!" );
}
 alert ("You have 1 hour to make the meal before your guest arrive  but be aware stuff happens ");


function checkifEnglish(){


}

function howMuchTimeToCook() {

}

function stuffHappens() {

}






//////////////////////// *************************  //////////////////////////////////////


// set up the  players and their variables;
let playerOne = prompt ("Who is cooking today?");
let playerTwo = prompt ("Who is your cook off Challenger today?");
alert ("Welcome " + playerOne + " and "  + playerTwo  + " may the best chef win!!!!");


// create a array to store the meal we are going to make 


//let playerOneMeal = createPlayerMeals(playerOne);
//let playerTwoMeal = createPlayerMeals(playerTwo);
//alertPlayerTheirMeal(playerOne,playerOneMeal);
//alertPlayerTheirMeal(playerTwo,playerTwoMeal);