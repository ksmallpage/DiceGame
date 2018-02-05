"use strict";

function setupPlayer(){

	let playerOne = prompt ("Who is cooking today?");
	let playerArray = [];
	let playerInitialscorce = 45;
	
	playerArray.push(playerOne);
	playerArray.push(playerInitialscorce);

	alert ("Welcome " + playerOne +" try and beat the clock!!!!");
	return playerArray;
}


function TrowDice(dice){
	let randomNumber = Math.floor(Math.random()* dice);
	return randomNumber;

}

function createPlayerMeals(playerArray){

    let playerMealArray = [];
     let playersDetails = playerArray;

     let playerOne = playersDetails[0];
     let playerOneScore =playersDetails[1];

    let strachArray = ["Rice", "Pasta", "Potatoes", "Beans"];

     let mealArray = ["Indian", "Italian", "French", "Chinese", "British", "Mexican"];
    // 6 Dice testing for British
    //let mealArray = ["British", "British", "British", "British", "British", "British"];

    let proteinArray = ["Salmon", "Beef", "Chicken", "Pork", "Tofu", "Lamb", "Shrimp", "Turkey"];

    let techniqueArray = ["Boiled", "Barbecued", "Cassoled", "Braised", "Fried", "Grilled", "Poached", "Steamed", "Sauted", "Roast"];

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

 
function alertPlayerTheirMeal(playerMealArray){



 alert( playerMealArray[0] + " Your challenge is to make a " + playerMealArray[3] + " " + playerMealArray[2] + " dish which includes " + playerMealArray[4] + ", " + playerMealArray[5] + " and " + playerMealArray[6] + "!!!!" );
 

 alert ("You have 45 Mins to make your meal before your guest arrives in an hour. Your progress will be checked every 15 mins to see how you are doing. ");

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
	alert(playerMealArray[0] + " You will need " + playerMealArray[1] + " Mins to fully complete your dish");

}


function willGuestLikeMeal(playerMealArray) {

	
	let eightBall = '';	
	let randomNumber = Math.floor(Math.random()* 7);	
	let playerQuestion = alert(playerMealArray[0] + "15 Mins Check !!! Based on what you have compeleted so far let's find out if your guest is going to like the meal. We will use an eightball to find out.");
	switch(randomNumber) {
	  case 0:
	  eightBall = 'It is certain';
	  break;
	  case 1:
	  eightBall = 'Is is decidedly so'; 
	  break;
	  case 2:
	  eightBall = 'Reply hazy on this one';
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
	  eightBall = 'Outlook not so good'; 
	  break;
	  case 7:
	  eightBall = 'Signs point to yes';
	  break;
	  default:
	  eightBall ="whatever"; 

	}
	if (Number(randomNumber) == ( 4 || 5 || 6 )) {
		alert("your eightball said " + eightBall + " Not so Good is it - add 10 mins to your cooking time");
		playerMealArray[1] += 10;
		playerMealArray[1] -= 15;
		return playerMealArray;

	}
	else if(Number(randomNumber) == ( 0 || 1 || 7 )){
		alert("Good News your eightball said " + eightBall + " so you get a  10 mins bonus for being a great chef.");
		playerMealArray[1] -= 10;
		playerMealArray[1] -= 15
		return playerMealArray;
	}
	else
		alert("The eightball said:" + eightBall + " you don't lose or gain anytime with that answer");
		playerMealArray[1] -=15;

		return playerMealArray;
	}

	function didYouHaveTime(playerMealArray){
		if (playerMealArray[1] <=0) {
			alert("You Made it - EnJoy the meal!!!!!");
		}else
			alert("You ran out of time - your guest is on the fence about your skills");
			return playerMealArray;
	}

	function finalChanceToImpress(playerMealArray){
		if(playerMealArray[1] >0){
			alert(" Well you did not made the meal in time but maybe your guest will still come back.");
			let randomNumber = Math.floor(Math.random()* 2);
				if (randomNumber === 0){
					alert("Even tho you did not make the meal in time - I still loved the food, Nice Work");
				}
				else
					alert("Chef - Your food is the tastes like the horses ass -I am out of here!!")
		}	
				else alert("Chef You are the best your food is the Greatest. ");
}








function runGame(){

let playerArray = setupPlayer();
let playerMealArray = createPlayerMeals(playerArray);
alertPlayerTheirMeal(playerMealArray);
checkForBritish(playerMealArray);
for (var i = 0; i <= 2; i++) { // make this into a function
	willGuestLikeMeal(playerMealArray);
	informPlayersOfScore(playerMealArray);
}
didYouHaveTime(playerMealArray);
finalChanceToImpress(playerMealArray);
}

runGame();