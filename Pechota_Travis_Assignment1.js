/* Travis Pechota
24 November 2012
Project 1
Work Day 
*/

var today = 'Tuesday',
	goToWork = "\"I don't want to go to work.\"",
	thingsToOrganize = 5
	allDone = 0
	timeToGo = true 
	noMore = "There's no more work to do."
;

console.log("Today is " + today + ".");
console.log("I wake up and say " + goToWork);
console.log("There is only " + thingsToOrganize + " thing to do.");
console.log("Is everything done? " + timeToGo + ". Let's go home.");

if (timeToGo === true) {
	if (allDone <= thingsToOrganize) {
		console.log("I get to go home! " + noMore)
	} else {
		console.log("Still more to do.")
	}
} else {
	if (today !== "Tuesday") {
		console.log("I get to sleep in!")
	} else {
		console.log(goToWork)
	}
}