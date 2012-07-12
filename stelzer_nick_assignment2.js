// Nick Stelzer
// July 12, 2012
// Project 2
// Typical start of a vacation day

// Variables
var breakfastFood = "Frosted Flakes",
	currentWeather = "sunny",
	idealWeather = "sunny",
	destinationInfo = [],
	family = ["Papa", "Grandma", "Aunt Mary", "Aunt Sharon", "Mom", "Dad", "Nick", "Deanna", "Danielle"],
	cars = ["Grand Marquis", "Civic"]
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

// Array Function
var getInCars = function (people, cars, numPeople) {
	for (var p = 0, c = 0, t = 1; p < numPeople; p++, t++) {		
		console.log(people[p] + " got into the " + cars[c] + ".");	
		if (t === 5) {												
			console.log("The " + cars[c] + " is full.");								
			c++;
			t=0;
		};
	};
};


// Main Code
haveBreakfast(breakfastFood);
destinationInfo = whereAreWeGoingToday(currentWeather, idealWeather);
getInCars(family, cars, family.length);


