//Parse the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("rolls");



//Create a class for rolls
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

/*
//Create a set
const rollSet= new Set();

//Create function to add cinnamon rolls (use "add" in sets, "push" in arrays)
function addNewRoll (rollType, rollGlazing, packSize, basePrice) { //declare function name and parameters
  const rollItem = new Roll(rollType, rollGlazing, packSize, basePrice); //declare variable roll item 
  rollSet.add(rollItem); //add rollItem variable to set "rollSet"
  return rollItem; //returns rollItem
}


//add a call to function createElement
for (const rollItem of rollSet){
  createElement(rollItem);
}

//add createElement function
function createElement (rollItem) { 
  const template = document.querySelector('#roll-template'); //select template ID in HTML file
  const clone = template.content.cloneNode(true); //copy content inside template using cloneNode method. This does a deep copy, including notecard and child elements.
  rollItem.element = clone.querySelector('.shopping-container-1');
  const shoppingContainerElement = document.querySelector('.shopping-container');
  console.log("createElement function works");
}


//create updateElement function
function updateElement(rollItem) {
  const noteImageElement = rollItem.element.querySelector('.shopping-container-1');
  const noteBodyElement = rollItem.element.querySelector('.shopping-description');
  noteImageElement.src = rollItem.noteimageURL;
  noteBodyElement.innerText = rollItem.noteBody;
}
*/