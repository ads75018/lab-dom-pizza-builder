// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushroom) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  }); // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = "visible";
    } else {
      oneGreen.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector(".sauce");
  let whitesauce = document.querySelector(".sauce-white");

  if (!state.whiteSauce && whitesauce) {
    whitesauce.className = "sauce";
  } else {
    if (state.whiteSauce) sauce.className = "sauce sauce-white";
  }
}

function renderGlutenFreeCrust() {
  let gluten = document.querySelector(".crust");
  let glutenFree = document.querySelector(".crust-gluten-free");

  if (!state.glutenFreeCrust && glutenFree) {
    glutenFree.className = "crust";
  } else {
    if (state.glutenFreeCrust) gluten.className = "crust crust-gluten-free";
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
const btnPepperoni = document.querySelector(".btn.btn-pepperoni");
btnPepperoni.addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  if (state.pepperoni) btnPepperoni.classList.add("active");
  else btnPepperoni.classList.remove("active");
  renderEverything();
});

const btnMush = document.querySelector(".btn.btn-mushrooms");
btnMush.addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  if (state.mushrooms) btnMush.classList.add("active");
  else btnMush.classList.remove("active");
  renderEverything();
});

const btnPepper = document.querySelector(".btn.btn-green-peppers");
btnPepper.addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  if (state.greenPeppers) btnPepper.classList.add("active");
  else btnPepper.classList.remove("active");
  renderEverything();
});

const btnSauce = document.querySelector(".btn.btn-sauce");
btnSauce.addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  if (state.whiteSauce) btnSauce.classList.add("active");
  else btnSauce.classList.remove("active");
  renderEverything();
});

const btnCrust = document.querySelector(".btn.btn-crust");
btnCrust.addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  if (state.glutenFreeCrust) btnCrust.classList.add("active");
  else btnCrust.classList.remove("active");
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
