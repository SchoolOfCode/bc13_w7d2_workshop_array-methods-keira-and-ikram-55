const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(animal => capitalised(animal))
console.log(capitalisedCats)
function capitalised (word){
return word.toUpperCase()
}

// first writing a basic function
// instert the function into map
