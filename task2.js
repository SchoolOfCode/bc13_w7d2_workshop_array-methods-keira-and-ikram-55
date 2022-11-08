let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];

//Version 1
/*let bListAnimals = animals.filter(filteredB)
  console.log(bListAnimals);

function filteredB(word){
  return word.startsWith("b")
}*/

//Simplified version
let bListAnimals = animals.filter(word => word.startsWith("b"))
console.log(bListAnimals)

//start function
// use .filter and add the function within it

/*take in each word
check if the word start with 'b'
if so, add it to the new filtered array*/