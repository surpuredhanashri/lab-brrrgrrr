// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderIngredientsBoard()
{
  var x = document.getElementsByClassName("items");

  if(state.Patty)
    x[0].style.display="inherit";
  else
    x[0].style.display="none";

  if(state.Cheese)
    x[1].style.display="inherit";
  else
    x[1].style.display="none";

  if(state.Tomatoes)
    x[2].style.display="inherit";
  else
   x[2].style.display="none";

  if(state.Onions)
    x[3].style.display="inherit";
  else
    x[3].style.display="none";

  if(state.Lettuce)
    x[4].style.display="inherit";
  else
    x[4].style.display="none";
}

function renderPrice()
{
  const submitButton = document.querySelector(".Rectangle5")
  var sum = 0;
  if(state.Patty)
    sum = sum + parseInt(ingredients.Patty);

    if(state.Cheese)
    sum = sum + parseInt(ingredients.Cheese);

    if(state.Tomatoes)
    sum = sum + parseInt(ingredients.Tomatoes);

    if(state.Onions)
    sum = sum + parseInt(ingredients.Onions);

    if(state.Lettuce)
    sum = sum + parseInt(ingredients.Lettuce);

    submitButton.onclick = (evt) =>
    {
      document.querySelector(".price-details").innerHTML = sum;
    }
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    var element=document.querySelector(".btn-patty");
    element.classList.add("active");
  } else {
    patty.style.display = "none";
    var element=document.querySelector(".btn-patty");
    element.classList.remove("active");

  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
    var element=document.querySelector(".btn-cheese");
    element.classList.add("active");
  } else {
    cheese.style.display = "none";
    var element=document.querySelector(".btn-cheese");
    element.classList.remove("active");
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
    var element=document.querySelector(".btn-tomatoes");
    element.classList.add("active");
  } else {
    tomatoes.style.display = "none";
    var element=document.querySelector(".btn-tomatoes");
    element.classList.remove("active");
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
    var element=document.querySelector(".btn-onions");
    element.classList.add("active");
  } else {
    onions.style.display = "none";
    var element=document.querySelector(".btn-onions");
    element.classList.remove("active");
  }
  
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    var element=document.querySelector(".btn-lettuce");
    element.classList.add("active");
  } else {
    lettuce.style.display = "none";
    var element=document.querySelector(".btn-lettuce");
    element.classList.remove("active");
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
    state.Cheese = !state.Cheese;
    renderAll();
  };

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
    state.Tomatoes = !state.Tomatoes;
    renderAll();
  };


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
    state.Onions = !state.Onions;
    renderAll();
  };


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
    state.Lettuce = !state.Lettuce;
    renderAll();
  };


//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients