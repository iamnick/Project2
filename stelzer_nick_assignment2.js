// Nick Stelzer
// July 12, 2012
// Project 2
// Typical start of a vacation day

// Variables
var breakfastFood = "Frosted Flakes",
	currentWeather = "sunny",
	idealWeather = "sunny",
	family = ["Papa", "Grandma", "Aunt Mary", "Aunt Sharon", "Mom", "Dad", "Nick", "Deanna", "Danielle"],
	cars = ["Grand Marquis", "Civic", "Saturn"]
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
		console.log("The weather looks good today, so we're going to go to the beach.");
		return ["the beach", 10];
	} else {
		console.log("The weather doesn't look ideal today, so we'll go visit Newport instead of the beach.");
		return ["Newport", 30];
	};
};

// Array Function
var getInCars = function (people, cars, numPeople) {
	var peopleInCar = "";
	console.log("It's time for us to head out.");
	for (var p = 0, c = 0, t = 1; p < numPeople; p++, t++) {	// p, c = indexes for people, cars arrays; t = counter for number of people in current car	
		peopleInCar += people[p] + ", ";	
		if (t === 5) {									
			console.log(peopleInCar + "got in the " + cars[c] + ". The " + cars[c] + " is now full.");
			c++;
			peopleInCar = "";		// resets string and counter for people in the car
			t=0;
		};
	};
	return (c+1)		// returns index of cars array, +1 because array starts at 0
};

// Number Function (passes an array with a # and string as argument)
var travel = function (destinationInfo) {
	var destination = destinationInfo[0],		// assign array to separate variables for easier to understand code
		totalTime = destinationInfo[1],
		timeLeft = totalTime
	;
	
	console.log("It's going to take " + totalTime + " minutes to get to " + destination + ".");
	while (timeLeft >= 0) {
		console.log("We've been driving for " + (totalTime - timeLeft) + " minutes, " + timeLeft + " to go.");
		timeLeft -= 5;
	};
	console.log("We've arrived at " + destination + "!");
};

// Main Code
haveBreakfast(breakfastFood);
console.log("We're using " + getInCars(family, cars, family.length) + " cars today.");
travel(whereAreWeGoingToday(currentWeather, idealWeather));


