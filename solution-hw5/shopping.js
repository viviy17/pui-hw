//Parse the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("rolls")

//Create a class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice){
    this.type= rollType;
    this.glazing= rollGlazing;
    this.size= packSize;
    this.basePrice= basePrice;
    }
  }

//Create object for rolls
const originalRoll= new Roll("Original", "Sugar Milk", 1, 2.49);
const walnutRoll= new Roll("Walnut", "Vanilla Milk", 12, 39.90);
const raisinRoll= new Roll("Raisin", "Sugar Milk", 3, 8.97);
const appleRoll= new Roll("Apple", "Original", 3, 10.47);

console.log(originalRoll);
console.log(walnutRoll);
console.log(raisinRoll);
console.log(appleRoll);


