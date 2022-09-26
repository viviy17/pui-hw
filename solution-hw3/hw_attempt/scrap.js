/*-------PART 1: CREATING CINNAMON CONSTRUCTOR AND OBJECTS-------*/

//Constructor function for cinnamon roll objects
function cinnamonRoll (glazingOptions, glazingPrice) {
    this.glazingOptions= glazingOptions;
    this.glazingPrice=glazingPrice;
  }
  
  // Objects for cinnamon roll glazing options
  /*const original= new cinnamonRoll ("Keep original", 0.00)
  const sugar= new cinnamonRoll ("Sugar milk", 0.00)
  const vanilla= new cinnamonRoll ("Vanilla milk", 0.50)
  const chocolate= new cinnamonRoll ("Double chocolate", 1.50)
  
  {original.glazingOptions, original.}*/
  
  
  
  
  
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
  
  // Objects for pack options
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
  
  //JS Tutorial for Beginners resource: https://www.youtube.com/watch?v=kzFJ7St_ma8
  
  
  function selectedGlaze() 
  {
    var selectedGlaze = document.getElementById("glazingOptions").value;
    console.log(selectedGlaze, this);
  }
  
  function selectedPack() 
  {
    var selectedPack = document.getElementById("packingOptions").value;
    console.log(selectedPack);
  
  }
  
  
  
  /*
  function getTotal() 
  
  {
  let arrayPackSize= [1, 3, 6, 12];
  let arrayPriceAdaption= [1, 3, 5, 10];
  let arrayGlazingPrice = [0.00, 0.00, 0.50, 1.50];
  let arrayGlazingOptions = ['Keep original', 'Sugar milk', 'Vanilla milk', 'Chocolate milk'];
  let basePrice=2.49
  
  
  for (i=0; i<arrayGlazingOptions.length; i++){
  
    if selectedPack == 
  
  
  
  }
  
  
  }
  
  */
  
  
  
  
  
  
  
  /*
  function glazingChange(element) {
    // get value of selected glazing option
    const priceChange = element.value;
    
  // add your code to do update the price ...
  }
  
  
  //Calculate Total Price
  /*
  const arrayGlazingPrice = [0.00, 0.00, 0.50, 1.50];
  const arrayPackingOptions= [1, 3, 5, 10];
  const arrayPackSize= [1, 3, 6, 12];
  const basePrice=2.49
  const arrayGlazingOptions = ['Keep original', 'Sugar milk', 'Vanilla milk', 'Chocolate milk'];
  
  function getTotal() {
  
  
  
    /*
  
    for (i=0; i < arrayGlazingOptions.length; i++){
    if (arrayGlazingOptions[i]=='Keep original') {
    totalPrice= (basePrice+glazingPrice[i]) * packPrice[i];
  }
    
    else if (arrayGlazingOptions[i] == 'Sugar milk') {
    totalPrice= (basePrice+glazingPrice[i]) * packPrice[i]; 
  }
  
    else if (arrayGlazingOptions[i] == 'Vanilla milk') {
    totalPrice= (basePrice+glazingPrice[i]) * packPrice[i];
  }
  
    else if (arrayGlazingOptions[i] == 'Vanilla milk') {
    totalPrice= (basePrice+glazingPrice[i]) * packPrice[i]}
  
    console.log("total price is: " + totalPrice)
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
  
  
  /* Declare arrays for glazing option, glazing price, pack options, and pack size
  
  
  
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