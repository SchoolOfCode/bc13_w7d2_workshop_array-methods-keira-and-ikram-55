let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

//Declare 4 new variables
let mupltipleThree = 3;
let mutipleFive = 5;
let multipleSixty = 60;
let multipleNinety = 90;

// go through each of the number of the someNumbers array 
// check whether they are multiple of 3, 5 ,60 ,90  .some()
// if at leat one multiple --> true
// if not then --> false

//for 3
let numbersThree = someNumbers.some(number3)
console.log(numbersThree);

function number3(three){
    if (three % 3 == 0)
    {
    return true;
    }
    else {
        return false;
    }
} 

/* -->using variables
let numbersThree = someNumbers.some(number3)
console.log(numbersThree);

function number3(three){
    if (three % mupltipleThree == 0)
    { return true;}
    else {return false;}
} */

//5
let numbersFive = someNumbers.some(number5)
console.log(numbersFive);

function number5(five){
    if (five % mutipleFive == 0)
    {
    return true;
    }
    else {
        return false;
    }
} 

//60
let numbersSixty = someNumbers.some(number60)
console.log(numbersSixty);

function number60(sixty){
    if (sixty % multipleSixty == 0)
    {
    return true;
    }
    else {
        return false;
    }
} 