let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(filteredB)
  console.log(bListAnimals);

function filteredB(word){
  return word.startsWith("b")
}



/*animals.filter((element) => filteredB(element))
console.log(bListAnimals);


}

//start function
// use .filter and add the function within it

/*take in each word
check if the word start with 'b'
if so, add it to the new filtered array*/