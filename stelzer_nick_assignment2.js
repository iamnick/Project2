// Nick Stelzer
// July 12, 2012
// Project 2
// Typical start of a vacation day

// Variables
var breakfastFood = "Frosted Flakes",
	currentWeather = "sunny",
	idealWeather = "sunny",
	destinationInfo = [],
	family = ["Papa", "Grandma", "Aunt Mary", "Aunt Sharon", "Mom", "Dad", "Nick", "Deanna", "Danielle"]
;
	


// Procedure
var haveBreakfast = function (food) {
	if (food === "Frosted Flakes") {
		console.log("I'm having " + food + " for breakfast today, which is my favorite cereal!");
	} else {
		console.log("I'm having " + food + " for breakfast today.");
	};
};

// Boolean Function 
var whereAreWeGoingToday = function (currentWeather, idealWeather) {
	if (currentWeather === idealWeather) {
		console.log("The weather looks good today, so I think we'll go to the beach.");
		return ["beach", 10];
	} else {
		console.log("The weather doesn't look ideal today, maybe we'll go visit Newport instead.");
		return ["Newport", 30];
	};
};


// Main Code
haveBreakfast(breakfastFood);
destinationInfo = whereAreWeGoingToday(currentWeather, idealWeather);



