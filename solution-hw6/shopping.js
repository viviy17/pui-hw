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
//?? If null, use second value for the cart variable
const shoppingCart = JSON.parse(localStorage.getItem('storedRolls')) ?? [];
const cart = [];

//Create function to add cinnamon rolls (use "add" in sets, "push" in arrays)
function addNewRoll(rollType, rollGlazing, packSize, basePrice) { //declare function name and parameters

  const packingOptions = { 1: 1, 3: 3, 6: 5, 12: 10 }
  const packMultiple = packingOptions[packSize];
  const rollItem = new Roll(rollType, rollGlazing, packSize, packMultiple, basePrice); //declare variable roll item 
  cart.push(rollItem); //add rollItem variable to set "cart"
  return rollItem; //returns rollItem
}

for (const rollData of shoppingCart) {
  const newRoll = addNewRoll(rollData.type, rollData.glazing, parseInt(rollData.size), rollData.basePrice);
  // createElement(notecard);
}

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


//Create function to calculate price.
function calcPrice() {
  console.log("R2", result);
  const selectTotalPrice = document.querySelector(".total-price");
  selectTotalPrice.innerHTML = Math.abs(result.toFixed(2)).toFixed(2);
}

//Create a delete function to remove items in cart
function deleteRoll(rollItem) {
  console.log("delete roll here is RITEM", rollItem);
  rollItem.element.remove();

  cart.splice(cart.indexOf(rollItem), 1);

  let newResult = 0
  for (const rollItem of cart) {
    console.log(rollItem)
    newResult = newResult + (rollItem.multiple * rollItem.basePrice);
  }
  result = newResult

  calcPrice();

}

//stringify the roll array 'cart'
const cartString = JSON.stringify(cart);

//save the string
localStorage.setItem('Stored rolls', cart);

calcPrice();






