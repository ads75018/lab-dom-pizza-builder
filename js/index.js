// Write your Pizza Builder JavaScript in this file.
const btnPepperoni = document.querySelector(".btn.btn-pepperoni");
const btnMush = document.querySelector(".btn.btn-mushrooms");
const btnPepper = document.querySelector(".btn.btn-green-peppers");
const btnSauce = document.querySelector(".btn.btn-sauce");
const btnCrust = document.querySelector(".btn.btn-crust");

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
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
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
  if (state.pepperoni) btnPepperoni.classList.add("active");
  else btnPepperoni.classList.remove("active");
  if (state.mushrooms) btnMush.classList.add("active");
  else btnMush.classList.remove("active");
  if (state.greenPeppers) btnPepper.classList.add("active");
  else btnPepper.classList.remove("active");
  if (state.whiteSauce) btnSauce.classList.add("active");
  else btnSauce.classList.remove("active");
  if (state.glutenFreeCrust) btnCrust.classList.add("active");
  else btnCrust.classList.remove("active");
}

function renderPrice() {
  let total = 10;
  if (state.pepperoni) {
    total += ingredients.pepperoni.price;
  }
  if (state.mushrooms) {
    total += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    total += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    total += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    total += ingredients.glutenFreeCrust.price;
  }

  document.querySelector(".panel.price > strong").textContent = `$` + total;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
btnPepperoni.addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

btnMush.addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

btnPepper.addEventListener("click", () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

btnSauce.addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

btnCrust.addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
