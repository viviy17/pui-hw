
//Parse the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("rolls");

document.querySelector(".gallery-description").innerText = rollType + " " + "Cinnamon Roll"
document.querySelector(".border").src = rolls[rollType].imageFile;
document.querySelector("#totalPrice").innerText = "$" + rolls[rollType].basePrice;

//Create dictionaries with key value pairs 
const glazingOptions = { "Keep original": 0.00, "Sugar milk": 0.00, "Vanilla milk": 0.50, "Double chocolate": 1.50 }
const packingOptions = { 1: 1, 3: 3, 6: 5, 12: 10 }

//Resource: Stack Overflow https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
//Create a for loop to update dropdown menu for glazing options.
let selectGlazingOptions = document.querySelector('#glazingOptions');

for (const [key, value] of Object.entries(glazingOptions)) {
  var opt = document.createElement('option');
  opt.value = [key];
  opt.innerText = [key];
  selectGlazingOptions.appendChild(opt);
}

//Create a for loop to update dropdown menu for packing options.
let selectPackingOptions = document.querySelector('#packingOptions');

for (const [key, value] of Object.entries(packingOptions)) {
  var opt = document.createElement('option');
  opt.value = [key];
  opt.innerText = [key];
  selectPackingOptions.appendChild(opt);
}

//Create function to calculate price.
function calcPrice() {
  let selectGlazingOptions = document.querySelector('#glazingOptions');
  let selectPackingOptions = document.querySelector('#packingOptions');
  let glazingPrice = glazingOptions[selectGlazingOptions.value];
  let packSize = packingOptions[selectPackingOptions.value];
  let finalPrice = (rolls[rollType].basePrice + glazingPrice) * packSize;
  display(finalPrice);
}

function display(finalPrice) {
  let selectTotalPrice = document.querySelector("#totalPrice");
  selectTotalPrice.innerHTML = '$' + finalPrice.toFixed(2);
  console.log(selectTotalPrice);
}


//Create a class in global scope
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

//Create an empty array for cart in global scope
const cart = [];

//Create function add to cart.
function addToCart() {
  //?? If null, use second value for the cart variable
  const cart = JSON.parse(localStorage.getItem('storedRolls')) ?? [];

  //Create a roll object
  let newRoll = new Roll(rollType, selectGlazingOptions.value, selectPackingOptions.value, rolls[rollType].basePrice)

  //Create original roll object
  const originalRoll = new Roll("Original", "Sugar Milk", 1, rolls[rollType].basePrice);


  //add to cart
  cart.push(newRoll);

  // console.log("This is the cart", cart);
  saveToLocalStorage();
}

//Create function save to local storage
function saveToLocalStorage() {
  //stringify the roll array 'cart'
  const cartString = JSON.stringify(cart);
  //save the string
  localStorage.setItem('storedRolls', cartString);
  //print stored rolls data
  console.log("Contents saved to local storage: ", localStorage.getItem('storedRolls'))
}

//Accumulate list 
if (localStorage.getItem('storedRolls') != null) {
  saveFromLocalStorage();
}














