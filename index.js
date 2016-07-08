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

function systemSelection(option){
	var check = option; 
	if(currentLocation===check){
		gamePrompt("Sorry Captain, You're already there. I will return you to the main menu to make another choice",beginTravel);
	}else{
		if(check.toLowerCase() === "e"){
			vehicleFuel=(vehicleFuel-10);
			currentLocation="e" ;
			gamePrompt("Flying to Earth...You used 10 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToEarth);

		}else if(check.toLowerCase() === "m"){
			//need to add a 'visited' conditional
			vehicleFuel=(vehicleFuel-20);
			currentLocation="m" ;
			gamePrompt("Flying to Mesnides...You used 20 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.", goToMesnides);

		}else if(check.toLowerCase() === "l"){
			vehicleFuel=(vehicleFuel-50);
			currentLocation="l" ;
			gamePrompt("Flying to Laplides...You used 50 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToLaplides);
			
		}else if(check.toLowerCase() === "k"){
			vehicleFuel=(vehicleFuel-120);
			currentLocation="k" ;
			gamePrompt("Flying to Kiyturn...You used 120 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToKiyturn);
			
		}else if(check.toLowerCase() === "a"){
			vehicleFuel=(vehicleFuel-25);
			currentLocation="a" ;
			gamePrompt("Flying to Aenides...You used 25 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToAenides);
			
		}else if(check.toLowerCase() === "c"){
			vehicleFuel=(vehicleFuel-200);
			currentLocation="c" ;
			gamePrompt("Flying to Cramuthea...You used 200 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToCramuthea);
			
		}else if(check.toLowerCase() === "s"){
			vehicleFuel=(vehicleFuel-400);
			currentLocation="s" ;
			gamePrompt("Flying to Smeon T9Q...You used 400 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToSmeon);
			
		}else if(check.toLowerCase() === "g"){
			vehicleFuel=(vehicleFuel-85);
			currentLocation="g" ;
			gamePrompt("Flying to Gleshan 7Z9...You used 85 gallons of gas. The "+ vehicleName +" now has "+vehicleFuel+ " gallons.",goToGleshan);
			
		}else{
			gamePrompt("Sorry Captain, I did not understand you. I will return you to the main menu",beginTravel);
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
		gamePrompt(,);
	}else if(choice.toLowerCase() === "p" && mesPlanet===0){
		mesPlanet=1;
		gamePrompt(,);
	}else if(choice.toLowerCase() === "l"){
		gamePrompt("Roger that Captain!",beginTravel);

	}else{
		gamePrompt("Sorry Captain, we didn't understand your input or you have done this already. Please reselect",mesSelect);
	}


};


//call a function so we can begin the game 
startGame();