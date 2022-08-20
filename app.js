console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
// Exercise 1 //

let min = 1;
let max = 100; 
let numToGuess = 33;

let input =  prompt(`Guess a whole number betwen ${min} and ${max}`); 

if (input > max / input < min) { 
  alert(
    `Your guess was not a whole number between $(min) and $(max). 
     Try again.`)
  
} else {
  if (numToGuess > input) {
    alert("too low");
  } else if (numToGuess < input) {
    alert("too high");
  } else {
    alert("correct");
  }
 }
  




let favNumber = 7
let input2 = alert("What is your favorite number?")

if (input2<favNumber) {
  console.log("TooLow");
} 
  if (input2>favNumber) {
    console.log("TooHigh");
    }
 if (input2 == (favNumber)) {
  console.log("Congratulations!");
 }
  


// Exercise 2 //

let birthMonth = prompt(
  "Enter your birth month: \n Format Examples: ('January, July, December')"
);

birthMonth = birthMonth.toLowerCase(); 

switch (birthMonth) {
  case "december":
  case "january":
  case "february":
    alert("Winter");
    break;
  case "march": 
  case "april":
  case "may":
    alert("Spring");
    break;
  case "june":
  case "july":
  case "august":
    alert ("Summer");
    break;
  case "september":
  case "october":
  case "november":
    alert ("Fall");
    break;
  default:
    alert(
      "Not a valid month. Check the spelling for the entire month name and try again."
    ); 
}

    
























let birthMonth2 = window.prompt("What is your birth month number?\n (ex: January = 1")
birthMonth2 = parseInt(birthMonth2);
switch((birthMonth)) {
  case 1: 
  case 2:
  case 3:
    console.log("Your birth month is in Winter");
    break;

  case 4:
  case 5:
  case 6:
    console.log("Your birth month is in Spring");
    break;

  case 7:
  case 8:
  case 9:
    console.log("Your birth month is in Summer");
    break;

  case 10:
  case 11:
  case 12:
    console.log("Your birth month is in Fall");
    break;
    default:
      console.log("Your month doesn't fall in the Gregorian calendar.");
}

let birthMonth3 = prompt("What is your birth month number?")
birthMonth3 = birthMonth.number 

if (monthNum == 12 || monthNum == 1 || monthNum == 2) {
  console.log("Winter");
} else if (monthNum == 3 || monthNum == 4 || monthNum == 5) {
  console.log("Spring");
} else if (monthNum == 6 || monthNum == 7 || monthNum == 8) {
  console.log("Summer");
} else if (monthNum == 9 || monthNum == 10 || monthNum == 11) {
  console.log("Fall"); 
} else {
  console.log("Your month doesn't fall in the Gregorian Calendar.");
}
 