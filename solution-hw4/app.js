//These are tests to check objects are functioning. 
//console.log(rolls);
//console.log(rolls["Apple"]);
//console.log(rolls["Apple"].imageFile);



//Parse the URL parameter and store the current roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("rolls");

document.querySelector(".gallery-description").innerText=rollType + " " + "Cinnamon Roll"
document.querySelector(".border").src=rolls[rollType].imageFile;
document.querySelector("#totalPrice").innerText="$"+rolls[rollType].basePrice;








//Create function to add cart.
function addToCart(){
    console.log("Function is running")

    //Create a class
    class Roll {
      constructor(rollType, rollGlazing, packSize, basePrice){
      this.type= rollType;
      this.glazing= rollGlazing;
      this.size= packSize;
      this.basePrice= basePrice;
      }
    }

    //Create a roll object
    let newRoll= newRoll("Dark-Chocolate", "Sugar-milk", 3, 2.49)

    //Create an empty array for cart
    const cart=[];

    //add to cart
    cart.push(newRoll);

    //console log
    console.log(cart);
}

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
  selectTotalPrice.innerHTML = '$'+ finalPrice.toFixed(2);
  console.log(selectTotalPrice);
}





















