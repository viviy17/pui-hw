//Create a class for rolls
class Roll {
  constructor(rollType, rollGlazing, packSize, packMultiple, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.multiple = packMultiple;
    this.basePrice = basePrice;
    this.element = null;
  }

  createElement() {
    const template = document.querySelector('#roll-template'); //select template ID in HTML file
    const clone = template.content.cloneNode(true); //copy content inside template using cloneNode method. This does a deep copy, including notecard and child elements.
    this.element = clone.querySelector('.shopping-container'); //clone div class container shopping-container

    const btnRemove = this.element.querySelector('.remove'); //select garbage icon to delete
    btnRemove.addEventListener('click', () => { //add event listener with arrow function
      deleteRoll(this);
    });

  }

  updateElement() {
    const rollNameElement = this.element.querySelector('.roll-name');
    const rollFlavorElement = this.element.querySelector('.roll-flavor');
    const rollSizeElement = this.element.querySelector('.roll-size');
    const rollPriceElement = this.element.querySelector('.roll-price')
    const subTotal = (this.basePrice * this.multiple).toFixed(2);

    rollNameElement.innerText = this.type;
    rollFlavorElement.innerText = this.glazing;
    rollSizeElement.innerText = this.size;
    rollPriceElement.innerText = subTotal;

    const rollImgElement = this.element.querySelector('.roll-img')
    rollImgElement.src = 'images/' + this.type.toLowerCase() + '-cinnamon-roll.jpg'
  }

}

//Create a set
const cart = new Set();

//Create function to add cinnamon rolls (use "add" in sets, "push" in arrays)
function addNewRoll(rollType, rollGlazing, packSize, packMultiple, basePrice) { //declare function name and parameters
  const rollItem = new Roll(rollType, rollGlazing, packSize, packMultiple, basePrice); //declare variable roll item 
  cart.add(rollItem); //add rollItem variable to set "cart"
  return rollItem; //returns rollItem
}

//Create object for rolls
addNewRoll("Original", "Sugar Milk", 1, 1, 2.49);
addNewRoll("Walnut", "Vanilla Milk", 12, 10, 3.99);
addNewRoll("Raisin", "Sugar Milk", 3, 3, 2.99);
addNewRoll("Apple", "Original", 3, 3, 3.49);

//Declare a variable rollContainer pulling div class roll container
const rollContainer = document.querySelector('.roll-container')

//add a call to function createElement

let result = 0

for (const rollItem of cart) {
  rollItem.createElement();
  rollItem.updateElement();
  rollContainer.prepend(rollItem.element); //prepend to rollContainer
  result = result + (rollItem.multiple * rollItem.basePrice)
  console.log("roll item multiple is: ", rollItem.multiple)
  console.log("roll item base price is: ", rollItem.basePrice)
  console.log("roll subtotal is: ", rollItem.multiple * rollItem.basePrice)
  console.log(result);
}


//Create a delete function to remove items in cart
function deleteRoll(rollItem) {
  // const element= document.querySelector('.shopping-container');
  // console.log(rollItem);
  // console.log(rollItem.element);
  rollItem.element.remove();
  cart.delete(rollItem);
  result = result - (rollItem.multiple * rollItem.basePrice);
  calcPrice()
}

//find a bun to see if matches all the attributes of the bun and then remove it


//Create function to calculate price.
function calcPrice() {
  const selectTotalPrice = document.querySelector(".total-price");
  selectTotalPrice.innerHTML = Math.abs(result.toFixed(2)).toFixed(2);
}


