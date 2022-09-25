/*-------PART 1: CREATING CINNAMON CONSTRUCTOR AND OBJECTS-------*/

//Constructor function for cinnamon roll objects
function cinnamonRoll (glazingOptions, glazingPrice) {
  this.glazingOptions= glazingOptions;
  this.glazingPrice=glazingPrice;
}

// Create objects for cinnamon roll glazing options
const original= new cinnamonRoll ("Keep original", 0.00)
const sugar= new cinnamonRoll ("Sugar milk", 0.00)
const vanilla= new cinnamonRoll ("Vanilla milk", 0.50)
const chocolate= new cinnamonRoll ("Double chocolate", 1.50)


/*-------PART 2: CREATE DYNAMIC DROPDOWN MENU FOR GLAZING OPTIONS-------*/


// When the page loads, find the select element.
let selectGlazingOptions = document.querySelector('#glazingOptions');

// Add original cinnamon roll object to the dropdown menu
var option = document.createElement('option');
option.text = original.glazingOptions;
selectGlazingOptions.add(option);


// Add sugar milk cinnamon roll object to the dropdown menu
var option = document.createElement('option');
option.text = sugar.glazingOptions;
selectGlazingOptions.add(option);

// Add vanilla milk cinnamon roll object to the dropdown menu

var option = document.createElement('option');
option.text= vanilla.glazingOptions;
selectGlazingOptions.add(option);


//Add double chocolate cinnamon roll object to the dropdown menu
var option= document.createElement('option');
option.text= chocolate.glazingOptions;
selectGlazingOptions.add(option);


/*-------PART 3: CREATE CONSTRUCTOR AND OBJECTS FOR PACKING OPTIONS-------*/

//Constructor for pack options
function packingOptions (packSize, priceAdaption){
  this.packSize=packSize;
  this.priceAdaption=priceAdaption;
}

// Create objects for pack options
const packOne = new packingOptions (1, 1)
const packThree = new packingOptions (3, 3)
const packSix = new packingOptions (6, 5)
const packTwelve = new packingOptions (12, 10)


/*-------PART 4: CREATE DYNAMIC DROPDOWN FOR PACKING OPTIONS-------*/

// When the page loads, find the select element.
let selectPackingOptions = document.querySelector('#packingOptions');

// Add packOne object to the dropdown menu
var option = document.createElement('option');
option.text = packOne.packSize;
selectPackingOptions.add(option);


// Add packThree object to the dropdown menu
var option = document.createElement('option');
option.text = packThree.packSize;
selectPackingOptions.add(option);

// Add packSix object to the dropdown menu

var option = document.createElement('option');
option.text = packSix.packSize;
selectPackingOptions.add(option);


//Add packTwelve object to the dropdown menu
var option = document.createElement('option');
option.text = packTwelve.packSize;
selectPackingOptions.add(option);


function glazingChange(element) {
  // get value of selected glazing option
  const priceChange = element.value;
  
// add your code to do update the price ...
}










/* Declare arrays for glazing option, glazing price, pack options, and pack size

const glazingPrice = [0.00, 0.00, 0.50, 1.50];
const packingOptions= [1, 3, 5, 10];
const packSize= [1, 3, 6, 12];
const basePrice=2.49
const glazingOptions = ['Keep original', 'Sugar milk', 'Vanilla milk', 'Chocolate milk'];

//Create objects for each flavor
const original = {
  glazingOptions: "Keep original",
  glazingPrice: 0.00, 
  basePrice: 2.49,
  fullName: function (){
    return this.glazingOptions;
  }
}



document.getElementById("glazingOptions").innerHTML = original.fullName();

/*
const sugar = {
  glazingOptions: "Sugar milk",
  glazingPrice: 0.00, 
  basePrice: 2.49,
}

const vanilla = {
  glazingOptions: "Vanilla milk",
  glazingPrice: 0.50, 
  basePrice: 2.49,
}

const chocolate = {
  glazingOptions: "Chocolate milk",
  glazingPrice: 1.50, 
  basePrice: 2.49,
}
*/

/*For Loop calculates total price
for (i=0; i < glazingOptions.length; i++){
  if (glazingOptions[i]=='Keep original') {
  totalPrice= (basePrice[i]+glazingPrice[i]) * packPrice[i];
}
  
  else if (glazingOptions[i] == 'Sugar milk') {
  totalPrice= (basePrice[i]+glazingPrice[i]) * packPrice[i]; 
}

  else if (glazingOptions[i] == 'Vanilla milk') {
  totalPrice= (basePrice[i]+glazingPrice[i]) * packPrice[i];
}

  else if (glazingOptions[i] == 'Vanilla milk') {
  totalPrice= (basePrice[i]+glazingPrice[i]) * packPrice[i]}
}
*/


/*Create dropdown menu for glazing Options*/ 














