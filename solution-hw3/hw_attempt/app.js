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
  let finalPrice = (2.49 + glazingPrice) * packSize;

  console.log("glaze price is: ", glazingPrice);
  console.log("pack size is: ", packSize);
  console.log("final price is: ", finalPrice);
  display(finalPrice).toFixed(2);
}


function display(finalPrice) {
  let selectTotalPrice = document.querySelector("#totalPrice");
  selectTotalPrice.innerHTML = finalPrice;
  console.log(selectTotalPrice);
}


































