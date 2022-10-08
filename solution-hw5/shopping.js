// //Parse the URL parameter and store the current roll type as a variable
// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const rollType = params.get("rolls");



//Create a class for rolls
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }

  createElement() {
    const template = document.querySelector('#roll-template'); //select template ID in HTML file
    const clone = template.content.cloneNode(true); //copy content inside template using cloneNode method. This does a deep copy, including notecard and child elements.
    this.element = clone.querySelector('.shopping-container');
    const shoppingContainerElement = document.querySelector('.shopping-container');
  }

  updateElement() {
    // const noteImageElement = this.element.querySelector('.shopping-container-1');
    const rollNameElement = this.element.querySelector('.roll-name');
    // noteImageElement.src = this.noteimageURL;
    rollNameElement.innerText = this.type;
    const rollImgElement = this.element.querySelector('.roll-img')
    rollImgElement.src = 'images/' + this.type.toLowerCase() + '-cinnamon-roll.jpg'
  }
}

//Create a set
const rollSet = new Set();

//Create object for rolls
addNewRoll("Original", "Sugar Milk", 1, 2.49);
addNewRoll("Walnut", "Vanilla Milk", 12, 39.90);
addNewRoll("Raisin", "Sugar Milk", 3, 8.97);
addNewRoll("Apple", "Original", 3, 10.47);




//Create function to add cinnamon rolls (use "add" in sets, "push" in arrays)
function addNewRoll(rollType, rollGlazing, packSize, basePrice) { //declare function name and parameters
  const rollItem = new Roll(rollType, rollGlazing, packSize, basePrice); //declare variable roll item 
  rollSet.add(rollItem); //add rollItem variable to set "rollSet"
  return rollItem; //returns rollItem
}

const rollContainer = document.querySelector('.roll-container')

//add a call to function createElement
for (const rollItem of rollSet) {
  rollItem.createElement();
  rollItem.updateElement()
  rollContainer.prepend(rollItem.element);
}


