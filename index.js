//get game prompt library in the file 
var gamePrompt=require('game-prompt');

//Global variables,(e.g name)
var playerName;
var vehicleName;
var vehicleFuel = 1000; 
var currentLocation ="aa";
var artifacts = 0; 


//add "visited" trackers to reset the system

//start the game 
//collecting information and letting the pilot know their fuel levels
function startGame(){
	gamePrompt("S.R.S.V: Press Enter to Start and to Continue",intro);
};

function intro(){
	gamePrompt("You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an expedition to explore foreign planets. Your mission is to make contact with three alien life forms, acquire an artifact representative of their culture, and bring back your findings to Earth.",collectInfo);
}

//here we collect information about our user 
//and we use an array within the gamePrompt function
function collectInfo(){
	gamePrompt(["A voice comes over an intercom, please press enter to continue","'Please state the pilots name'"],collectName);
};

function collectName(name){
	playerName = name; 

	gamePrompt(["Thank you Captain "+playerName,"Please state your vehicle name for identity verification"],collectVehicleName);
};

function collectVehicleName(name){
	vehicleName=name;

	gamePrompt(["Thank you again Captain "+playerName, "Your ship is named "+vehicleName,"This is VERY IMPORTANT, Captain. Your ship has 1000 gallons of fuel","If you run out of fuel, you'll lose the game!!!","Collect 3 artifacts from around the galaxy and return to earth to win!"],beginTravel);

};

function beginTravel(){
	gamePrompt(["Where to Captain "+playerName+" ? Press Enter to see locations",
	"(E)arth (10 lightyears) Press Enter to See More Options", 
	"(M)esnides (20 lightyears) Press Enter to See More Options",
	"(L)aplides (50 lightyears) Press Enter to See More Options",
	"(K)iyturn (120 lightyears) Press Enter to See More Options",
	"(A)enides (25 lightyears) Press Enter to See More Options",
	"(C)ramuthea (200 lightyears) Press Enter to See More Options",
	"(S)meon T9Q (400 lightyears) Press Enter to See More Options",
	"(G)leshan 7Z9 (85 lightyears) This is the last option",
	"Please make selection? Type in the letter between the ()'s"],systemSelection)
};


// ********** Overall game controller for moving around 
// We install our game loss system in here as well 
function systemSelection(option){
	var check = option; 
	if(vehicleFuel<=0){
		gameOverLose();
	}

	else{


	if(currentLocation===check){
			gamePrompt("Sorry Captain, You're already there or have been there. I will return you to the main menu to make another choice",beginTravel);
			}

	else{
	
			if(check.toLowerCase() === "e"){
				vehicleFuel=(vehicleFuel-10);
				currentLocation="e" ;
				gamePrompt("Flying to Earth...You used 10 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToEarth);
			}
		else if(check.toLowerCase() === "m"){
			//need to add a 'visited' conditional
			vehicleFuel=(vehicleFuel-20);
			currentLocation="m" ;
				gamePrompt("Flying to Mesnides...You used 20 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.", goToMesnides);
			}
		else if(check.toLowerCase() === "l"){
			vehicleFuel=(vehicleFuel-50);
			currentLocation="l" ;
			gamePrompt("Flying to Laplides...You used 50 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToLaplides);
			}
		else if(check.toLowerCase() === "k"){
			vehicleFuel=(vehicleFuel-120);
			currentLocation="k" ;
			gamePrompt("Flying to Kiyturn...You used 120 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToKiyturn);
			}
		else if(check.toLowerCase() === "a"){
			vehicleFuel=(vehicleFuel-25);
			currentLocation="a";
			gamePrompt("Flying to Aenides...You used 25 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToAenides);
			}
		else if(check.toLowerCase() === "c"){
			vehicleFuel=(vehicleFuel-200);
			currentLocation="c" ;
			gamePrompt("Flying to Cramuthea...You used 200 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToCramuthea);
			}
		else if(check.toLowerCase() === "s"){
			vehicleFuel=(vehicleFuel-400);
			currentLocation="s" ;
			gamePrompt("Flying to Smeon T9Q...You used 400 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToSmeon);
			}
		else if(check.toLowerCase() === "g"){
			vehicleFuel=(vehicleFuel-85);
			currentLocation="g" ;
			gamePrompt("Flying to Gleshan 7Z9...You used 85 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToGleshan);
			}
		else{
			gamePrompt("Sorry Captain, I did not understand you. I will return you to the main menu",beginTravel);
		}
	}
	}
};


//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Mesnides
//Mesnides variables 
var visitedMes = 0;
var artifactMes=0;
var mesArtifact = 0; 
var mesPlanet = 0; 


//Mesnides Starter
function goToMesnides(){
		if(visitedMes===0){
			visitedMes=1;
			// artifacts=1;
			gamePrompt(["You've arrived at Mesnides. As you land, a representative of the Mesnidian people is there to greet you.","Welcome, traveler, to Mesnides"],mesSelect);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

 
//mesnides controller
function mesSelect(){
	gamePrompt(["How can we assist you?","Ask about (A)rtifact. Ask about other (P)lanets. (L)eave"],mesController);
};

//main mesnides controller
function mesController(choice){
	if(choice.toLowerCase() === "a" && artifactMes===0){
		artifactMes=1;
		artifacts=artifacts+1;
		gamePrompt(["Here, take this Myoin Horn, an ancient Mesnidian instrument.","Myoin Hord added to inventory"],mesSelect);
	}else if(choice.toLowerCase() === "p" && mesPlanet===0){
		mesPlanet=1;
		gamePrompt("Well, Laplides suffered from atomic war and has been uninhabited for centuries. You would do well to avoid it on your journey.",mesSelect);
	}else if(choice.toLowerCase() === "l"){
		gamePrompt("Roger that Captain!",beginTravel);

	}else{
		gamePrompt("Sorry Captain, we didn't understand your input or you have done this already. Please reselect",mesSelect);
	}


};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Laplides
//Laplides variables 
var visitedLap = 0;
// var artifactLsp=0;
// var mesArtifact = 0; 
// var lapPlanet = 0; 


//Laplides Starter
function goToLaplides(){
		if(visitedLap===0){
			visitedLap=1;
			// artifacts=1;
			gamePrompt("You enter orbit around Laplides. Looking down at the planet, you see signs of atomic war and realize there is no option but to turn around.",beginTravel);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Kiyturn
//Kiyturn variables 
var visitedKiy = 0;
var artifactKiy=0;
var kiyArtifact = 0; 
var kiyPlanet = 0; 


//Kiyturn Starter
function goToKiyturn(){
		if(visitedKiy===0){
			visitedKiy=1;
			// artifacts=1;
			gamePrompt(["You've arrived at Kiyturn. As you land, a representative of the Kiyturn people is there to greet you.","Hello, what brings you to Kiyturn? You're not here to cause trouble are you?"],kiySelect);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

 
//Kiyturn controller
function kiySelect(){
	gamePrompt(["How can we assist you?","Ask about (A)rtifact. Ask about other (P)lanets. (L)eave"],kiyController);
};

//main Kiyturn controller
function kiyController(choice){
	if(choice.toLowerCase() === "a" && artifactKiy===0){
		artifactKiy=1;
		artifacts=artifacts+1;
		gamePrompt(["Here, take this Kiyturn Glass Bowl, a symbol of our civilization.","Kiyturn Glass Bowl added to inventory."],kiySelect);
	}else if(choice.toLowerCase() === "p" && kiyPlanet===0){
		kiyPlanet=1;
		gamePrompt("I'm sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery.",kiySelect);
	}else if(choice.toLowerCase() === "l"){
		gamePrompt("Roger that Captain!",beginTravel);

	}else{
		gamePrompt("Sorry Captain, we didn't understand your input or you have done this already. Please reselect",kiySelect);
	}


};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Aenides
//Aenides variables 
var visitedAen= 0;
// var artifactLsp=0;
// var mesArtifact = 0; 
// var lapPlanet = 0; 


//Aenides Starter
function goToAenides(){
		if(visitedAen===0){
			visitedAen=1;
			// artifacts=1;
			gamePrompt("You discover upon arrival to Aenides that they are a hostile people. You attempt to land, but they begin to fire upon your S.R.S.V. and you are forced to retreat.",beginTravel);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Cramuthea
//Cramuthea variables 
var visitedCram= 0;

// var artifactLsp=0;
// var mesArtifact = 0; 
// var lapPlanet = 0; 


//Cramuthea Starter
function goToCramuthea(){
		if(visitedCram===0){
			visitedCram=1;
			var vehicleFuel=vehicleFuel+500;

			// artifacts=1;
			gamePrompt("Cramuthea has been abandoned due to global environmental disaster, but there are remnants of the people that left. You are able to refuel your ship (+500 gallons) and read a beacon signal that tells you the Cramuthean people have migrated to Smeon T9Q.",beginTravel);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************smeon
//Smeon variables 
var visitedSmeon = 0;
var artifactSmeon=0;
var SmeonArtifact = 0; 
var SmeonPlanet = 0; 


//Smeon Starter
function goToSmeon(){
		if(visitedSmeon===0){
			visitedSmeon=1;
			vehicleFuel=vehicleFuel+100;
			// artifacts=1;
			gamePrompt("The Cramuthean people, living on Smeon T9Q, are a friendly people that give you some fuel (+100 gallons) when you arrive.",SmeonSelect);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

 
//Smeon controller
function SmeonSelect(){
	gamePrompt(["How can we assist you?","Ask about (A)rtifact. Ask about other (P)lanets. (L)eave"],SmeonController);
};

//main Smeon controller
function SmeonController(choice){
	if(choice.toLowerCase() === "a" && artifactSmeon===0){
		artifactSmeon=1;
		artifacts=artifacts+1;
		gamePrompt(["they also give you a dried Cramun Flower from their home planet.","Cramun Flower added to inventory."],SmeonSelect);
	}else if(choice.toLowerCase() === "p" && SmeonPlanet===0){
		SmeonPlanet=1;
		gamePrompt("they warn you that the people of Aenides once tried to take over their home planet by force.",SmeonSelect);
	}else if(choice.toLowerCase() === "l"){
		gamePrompt("Roger that Captain!",beginTravel);

	}else{
		gamePrompt("Sorry Captain, we didn't understand your input or you have done this already. Please reselect",SmeonSelect);
	}


};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Gleshan
//Gleshan variables 
var visitedGleshan = 0;
var artifactGleshan=0;
var gleshanArtifact = 0; 
var gleshanPlanet = 0; 


//Gleshan Starter
function goToGleshan(){
		if(visitedGleshan===0){
			visitedGleshan=1;
			// vehicleFuel=vehicleFuel+100;
			// artifacts=1;
			gamePrompt("Gleshan 7Z9 is a poor country.",GleshanSelect);
		}else{
			gamePrompt(["You've already been here!","Where to next?"],beginTravel);
		}
};

 
//Gleshan controller
function GleshanSelect(){
	gamePrompt(["How can we assist you?","Ask about (A)rtifact. Ask about other (P)lanets. (L)eave"],GleshanController);
};

//main Gleshan controller
function GleshanController(choice){
	if(choice.toLowerCase() === "a" && artifactGleshan===0){
		// artifactGleshan=1;
		// artifacts=artifacts+1;
		gamePrompt(["sorry, we don't have any artifacts"],GleshanSelect);
	}else if(choice.toLowerCase() === "p" && GleshanPlanet===0){
		GleshanPlanet=1;
		gamePrompt("a wealthy people, the Cramuthean, once visited Gleshan 7Z9.",GleshanSelect);
	}else if(choice.toLowerCase() === "l"){
		gamePrompt("Roger that Captain!",beginTravel);

	}else{
		gamePrompt("Sorry Captain, we didn't understand your input or you have done this already. Please reselect",GleshanSelect);
	}


};

//+++++++++++++++++++++++++++++++++++++++These are the story functions 
//***********************************************Earth
//Earth variables 
// var visitedGleshan = 0;
// var artifactGleshan=0;
// var gleshanArtifact = 0; 
// var gleshanPlanet = 0; 


//Earth Starter
function goToEarth(){
		if(artifacts===3){
			// visitedGleshan=1;
			// vehicleFuel=vehicleFuel+100;
			// artifacts=1;
			gamePrompt("You have "+artifacts+" artifacts. You win the game!",gameOverWin);
		}else{
			vehicleFuel=vehicleFuel+10;
			gamePrompt("You have "+artifacts+" artifacts. You have been given 10 fuel. Come back with three artifacts and you win the game",beginTravel);
		}
};

 //Initiate the win sequence 
function gameOverWin(){

	gamePrompt("Press and hold cntrl+C to exit the game",gameOverWin);
}

// losing the game 
function gameOverLose(){
	gamePrompt("You are out of gas and lose the game. Start over",startGame)
}

//call a function so we can begin the game 
startGame();