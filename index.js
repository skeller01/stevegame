//get game prompt library in the file 
var gamePrompt=require('game-prompt');

//Global variables,(e.g name)
var playerName;
var vehicleName;
var vehicleFuel = 1000; 
var currentLocation ="aa";

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

	gamePrompt(["Thank you again Captain "+playerName, "Your ship is named "+vehicleName,"This is VERY IMPORTANT, Captain. Your ship has 1000 gallons of fuel"],beginTravel);

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

		}else if(check.toLowerCase() === "m"){
			vehicleFuel=(vehicleFuel-20);
			currentLocation="m" ;
			gamePrompt("Flying to Mesnides...You used 20 gallons of gas. The "+ vehicleName +" now has"+vehicleFuel+ " gallons.");

		}else if(check.toLowerCase() === "l"){
			
		}else if(check.toLowerCase() === "k"){
			
		}else if(check.toLowerCase() === "a"){
			
		}else if(check.toLowerCase() === "c"){
			
		}else if(check.toLowerCase() === "s"){
			
		}else if(check.toLowerCase() === "g"){
			
		}else{
			gamePrompt("Sorry Captain, I did not understand you. I will return you to the main menu",beginTravel);
		}
	}
};


//call a function so we can begin the game 
startGame();