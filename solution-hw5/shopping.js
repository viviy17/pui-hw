//Create a class for rolls
class Roll {
  constructor(rollType, rollGlazing, packSize, packMultiple, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.multiple= packMultiple;
    this.basePrice = basePrice;
  }
  
  createElement() {
    const template = document.querySelector('#roll-template'); //select template ID in HTML file
    const clone = template.content.cloneNode(true); //copy content inside template using cloneNode method. This does a deep copy, including notecard and child elements.
    this.element = clone.querySelector('.shopping-container'); //clone div class container shopping-container
  }

  updateElement() {
    const rollNameElement = this.element.querySelector('.roll-name');
    const rollFlavorElement = this.element.querySelector('.roll-flavor');
    const rollSizeElement= this.element.querySelector('.roll-size');
    const rollPriceElement=this.element.querySelector('.roll-price')
  
    rollNameElement.innerText = this.type;
    rollFlavorElement.innerText= this.glazing;
    rollSizeElement.innerText= this.size;
    rollPriceElement.innerText= (this.basePrice*this.multiple).toFixed(2);

    const rollImgElement = this.element.querySelector('.roll-img')
    rollImgElement.src = 'images/' + this.type.toLowerCase() + '-cinnamon-roll.jpg'
  }

}

//Create a set
const rollSet = new Set();

//Create function to add cinnamon rolls (use "add" in sets, "push" in arrays)
function addNewRoll(rollType, rollGlazing, packSize, packMultiple, basePrice) { //declare function name and parameters
  const rollItem = new Roll(rollType, rollGlazing, packSize, packMultiple, basePrice); //declare variable roll item 
  rollSet.add(rollItem); //add rollItem variable to set "rollSet"
  return rollItem; //returns rollItem
}

//Create object for rolls
addNewRoll("Original", "Sugar Milk", 1, 1, 2.49);
addNewRoll("Walnut", "Vanilla Milk", 12, 10, 3.99);
addNewRoll("Raisin", "Sugar Milk", 3, 3, 2.99);
addNewRoll("Apple", "Original", 3, 3, 3.49);

//Declare a variable pulling div class roll container
const rollContainer = document.querySelector('.roll-container')

//add a call to function createElement
for (const rollItem of rollSet) {
  rollItem.createElement();
  rollItem.updateElement()
  rollContainer.prepend(rollItem.element);
}

//Create a delete function to remove items in cart
function deleteRoll () {
  const element= document.querySelector('.shopping-container');
  element.remove();
}


//Create function to calculate price.
function calcPrice() {
  let selectGlazingOptions = document.querySelector('#glazingOptions');
  let selectPackingOptions = document.querySelector('#packingOptions');
  let glazingPrice = glazingOptions[selectGlazingOptions.value];
  let packSize = packingOptions[selectPackingOptions.value];
  let finalPrice = 
  display(finalPrice);
}


function display(finalPrice) {
  let selectTotalPrice = document.querySelector("#totalPrice");
  selectTotalPrice.innerHTML = '$'+ finalPrice.toFixed(2);
  console.log(selectTotalPrice);
}

