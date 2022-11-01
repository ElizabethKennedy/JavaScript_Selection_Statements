console.log("Hello World!\n==========\n");
console.log("Exercise #1:\n==========\n");
  faveNum=7;
  let min= 1;
  let max= 10;
    let answer= prompt(`Guess a number from ${min}-${max} `);
    parseInt(answer);
    if (isNaN(answer)|| answer> max||answer<min){
   console.log("out of range guess");
       }

 else if(answer <faveNum){
console.log("You have guessed too low");
}
else if (answer>faveNum)
{
  console.log("You have guessed too high ");
}
else{
  console.log("Lucky you! You have guessed correctly.");
}

console.log("Exercise #2:\n==========\n");


birthMonth=prompt("What is your birth month number 1-12?");
birthMonth=parseInt(birthMonth);
switch(birthMonth){
  case 12:
  case 1:
  case 2:
        console.log("Your birth month in Winter"); 
        break;

  case 3:
  case 4:
  case 5:
        console.log("Your birth month is in Spring"); 
        break;

  case 6:
  case 7:
  case 8:
        console.log("Your birth month is in Summer"); 
        break;

  case 9:
  case 10:
  case 11:
        console.log("Your birth month is in Autumm"); 
        break;
 default: 
 console.log("Your birth month falls outside of the Gregorian calendar");
}


console.log("Exercise #3:\n==========\n");


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId)
{
  case "01":
            type="Tank top";
        break;    

  case "02":
              type = "T-Shirt";
         break;     
   case "03": 
              type = "Long Sleeve";
              break;  
    case "04":
             type == "Sweat Shirt";
             break;  
    default:
              type = "Other";            
}

switch(colorId){
  case "BL": 
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD": 
    color = "Red";
    break;
  case"PU":
    color = "Purple";
    break;
   default:
    color = "White";

}


switch(sizeId){
  case "S":
  size = "Small";
  break;
case "M":
  size = "Medium";
  break;

case "L":
  size = "Large";
 break;
case "XL":
  size = "Extra Large";
break;
default:
  size = "One Size Fits All";
}





console.log(`Product: ${size} ${color} ${type}`);