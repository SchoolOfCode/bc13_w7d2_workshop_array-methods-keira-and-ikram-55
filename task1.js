const cats = ["tony", "daisy", "socks", "rockie" ];

//Version 1
/*const capitalisedCats = cats.map(animal => capitalised(animal))
console.log(capitalisedCats)

function capitalised (word){
    return word.toUpperCase()
}
*/
//Version 2
/*const capitalisedCats = cats.map(function (element) {
    return element.toUpperCase()
})*/

//Version 3
const capitalisedCats = cats.map(element => element.toUpperCase())
console.log(capitalisedCats)
// first writing a basic function
// instert the function into map
