"use strict";

function setupPlayer(){

	let playerOne = prompt ("Who is cooking today?");
	//let playerTwo = prompt ("Who is your cook off Challenger today?");
	let playerArray = [];
	let playerInitialscorce = 45;
	
	//add the player to the array

	playerArray.push(playerOne);
	playerArray.push(playerInitialscorce);
	//playerArray.push(playerTwo);
	//playerArray.push(playerInitialscorce);

	alert ("Welcome " + playerOne +" try and beat the clock!!!!");
	return playerArray;
}

// create a function to generte a random number

function TrowDice(dice){
	let randomNumber = Math.floor(Math.random()* dice);
	return randomNumber;

}

// create a function to create a meal 
function createPlayerMeals(playerArray){
    // create a mealplan array variable
    let playerMealArray = [];
     // set variable for players
     let playersDetails = playerArray;

     let playerOne = playersDetails[0];
     let playerOneScore =playersDetails[1];
    // let playerTwo = playersDetails[2];
    // let playerTwoScore = playersDetails[3];

     // create the variables // arrays for the dice;
    // 4 Dice
    let strachArray = ["Rice", "Pasta", "Spuds", "Beans"];
    // 6 Dice
     let mealArray = ["Indian", "Italian", "French", "Chinese", "British", "Mexican"];
    // 6 Dice testing
    //let mealArray = ["British", "British", "British", "British", "British", "British"];
    // 8 Dice
    let proteinArray = ["Salmon", "Beef", "Chicken", "Pork", "Tofu", "Lamb", "Shrimp", "Turkey"];
    // 10 Dice
    let techniqueArray = ["Boiled", "Barbecued", "Cassoled", "Braised", "Fried", "Grilled", "Poached", "Steamed", "Sauted", "Roast"];

    // 12 Dice
    let vegetablesArray = ["Asparagrus", "Kale", "Eggplant", "Turnip", "Green Beans", "Cabbage", "Zucchini", "Leek", "Pepper", "Brussel Sprouts", "Spinach", "Broccolini"];

				playerMealArray.push(playerOne);
    			playerMealArray.push(playerOneScore)

    		





		    	 let selectedCounty = mealArray[TrowDice(6)];
		         playerMealArray.push(selectedCounty);

		         let selecetdTechnique = techniqueArray[TrowDice(10)];
		         playerMealArray.push(selecetdTechnique);

		         let selectedProtein = proteinArray[TrowDice(8)];
		         playerMealArray.push(selectedProtein);

		         let selectedStrach = strachArray[TrowDice(4)];
		         playerMealArray.push(selectedStrach);

		         let selectedVegetable = vegetablesArray[TrowDice(12)];
		         playerMealArray.push(selectedVegetable);


    			return playerMealArray;


    	 }

 
       // return playerMealArray;
function alertPlayerTheirMeal(playerMealArray){



 alert( playerMealArray[0] + " Your challenge is to make a " + playerMealArray[3] + " " + playerMealArray[2] + " dish which includes " + playerMealArray[4] + ", " + playerMealArray[5] + " and " + playerMealArray[6] + "!!!!" );
 

 alert ("You have 45 Mins to make your meal before your guest arrives in an hour -- but be aware stuff happens ");

 return playerMealArray;
}




function checkForBritish(playerMealArray){

		
		 if ((playerMealArray.indexOf('British')) === 2) {
			alert("Sorry " + playerMealArray[0]  + " having to cook British food is going to add 10 mins extra to the cooking time.");
       		playerMealArray[1] += 10;
		} 
	
		informPlayersOfScore(playerMealArray);
		return playerMealArray;

}

function informPlayersOfScore(playerMealArray){
	alert(playerMealArray[0] + " You will now need " + playerMealArray[1] + " Mins to complete your dish");

}


function willGuestLikeMeal(playerMealArray) {

	let randomNumber = Math.floor(Math.random()* 7);
	let eightBall = '';		
	let playerQuestion = alert(playerMealArray[0] + "15 Mins have passed based on what you have compeleted so far let's find out if your eightball will like the dish?");
	switch(randomNumber) {
	  case 0:
	  eightBall = 'It is certain';// DO Nothing
	  break;
	  case 1:
	  eightBall = 'Is is decidedly so'; // -10 from score
	  break;
	  case 2:
	  eightBall = 'Reply hazy on this one'; // do nothing
	  break; 
	  case 3:
	  eightBall = 'Cannot predict now'; // do nothing
	  break; 
	  case 4:
	  eightBall = 'Don\'t count on it'; // add 10 mns to score
	  break; 
	  case 5:
	  eightBall =  'My sources say no'; // add 10 mins to score
	  break;
	  case 6:
	  eightBall = 'Outlook not so good'; // add 10 mins to score
	  break;
	  case 7:
	  eightBall = 'Signs point to yes'; // - 10 mins from score
	  break;
	  default:
	  eightBall ="whatever"; 

	}
	if (randomNumber == (4 || 5 || 6)) {
		alert("your eightball said " + eightBall + " you need to add 10 mins to your cooking time");
		playerMealArray[1] += 10;
		playerMealArray[1] -= 15;
		return playerMealArray;

	}
	else if(randomNumber == (1 || 7)){
		alert("Good News your eightball said " + eightBall + " you have gained 10 mins for doing a great job");
		playerMealArray[1] -= 10;
		playerMealArray[1] -= 15
		return playerMealArray;
	}
		alert("The eight ball said:" + eightBall + " you don't lose or gain anytime with that answer");
		playerMealArray[1] -=15;

		return playerMealArray;
	}

	function didYouHaveTime(playerMealArray){
		if (playerMealArray[1] <=0) {
			alert("You did well your guest will be very happy");
		}else
			alert("You ran out of time - try again");
	}








function runGame(){

let playerArray = setupPlayer();
let playerMealArray = createPlayerMeals(playerArray);
alertPlayerTheirMeal(playerMealArray);
checkForBritish(playerMealArray);
for (var i = 0; i <= 2; i++) {
	willGuestLikeMeal(playerMealArray);
	informPlayersOfScore(playerMealArray);
}
didYouHaveTime(playerMealArray);
}

runGame();