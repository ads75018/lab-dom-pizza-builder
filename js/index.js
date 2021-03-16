const btnPepperoni = document.querySelector(".btn.btn-pepperoni");
const btnMush = document.querySelector(".btn.btn-mushrooms");
const btnPepper = document.querySelector(".btn.btn-green-peppers");
const btnSauce = document.querySelector(".btn.btn-sauce");
const btnCrust = document.querySelector(".btn.btn-crust");
const pepText = document.querySelector(".panel.price li");
const mushText = document.querySelector(".panel.price li:nth-child(2)");
const pepperText = document.querySelector(".panel.price li:nth-child(3)");
const sauceText = document.querySelector(".panel.price li:nth-child(4)");
const crustText = document.querySelector(".panel.price li:nth-child(5)");

let basePrice = 10;

let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

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
      pepText.style.textDecoration = "none";
    } else {
      onePep.style.visibility = "hidden";
      pepText.style.textDecoration = "line-through";
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
      mushText.style.textDecoration = "none";
    } else {
      oneMush.style.visibility = "hidden";
      mushText.style.textDecoration = "line-through";
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = "visible";
      pepperText.style.textDecoration = "none";
    } else {
      oneGreen.style.visibility = "hidden";
      pepperText.style.textDecoration = "line-through";
    }
  });
}

function renderWhiteSauce() {
  let sauce = document.querySelector(".sauce");
  let whitesauce = document.querySelector(".sauce-white");
  if (!state.whiteSauce && whitesauce) {
    whitesauce.className = "sauce";
    sauceText.style.textDecoration = "line-through";
  } else if (state.whiteSauce) {
    sauce.className = "sauce sauce-white";
    sauceText.style.textDecoration = "none";
  }
}

function renderGlutenFreeCrust() {
  let gluten = document.querySelector(".crust");
  let glutenFree = document.querySelector(".crust-gluten-free");

  if (!state.glutenFreeCrust && glutenFree) {
    glutenFree.className = "crust";
    crustText.style.textDecoration = "line-through";
  } else if (state.glutenFreeCrust) {
    gluten.className = "crust crust-gluten-free";
    crustText.style.textDecoration = "none";
  }
}

function renderButtons() {
  if (state.pepperoni) {
    btnPepperoni.classList.add("active");
  } else {
    btnPepperoni.classList.remove("active");
  }
  if (state.mushrooms) {
    btnMush.classList.add("active");
  } else {
    btnMush.classList.remove("active");
  }
  if (state.greenPeppers) {
    btnPepper.classList.add("active");
  } else {
    btnPepper.classList.remove("active");
  }
  if (state.whiteSauce) {
    btnSauce.classList.add("active");
  } else {
    btnSauce.classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    btnCrust.classList.add("active");
  } else {
    btnCrust.classList.remove("active");
  }
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
