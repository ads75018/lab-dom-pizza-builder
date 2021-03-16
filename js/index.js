const pepText = document.querySelector(".panel.price li");
const mushText = document.querySelector(".panel.price li:nth-child(2)");
const pepperText = document.querySelector(".panel.price li:nth-child(3)");
const sauceText = document.querySelector(".panel.price li:nth-child(4)");
const crustText = document.querySelector(".panel.price li:nth-child(5)");
const objBtn = {
  pepperoni: document.querySelector(".btn.btn-pepperoni"),
  mushrooms: document.querySelector(".btn.btn-mushrooms"),
  greenPeppers: document.querySelector(".btn.btn-green-peppers"),
  whiteSauce: document.querySelector(".btn.btn-sauce"),
  glutenFreeCrust: document.querySelector(".btn.btn-crust"),
};
const objRender = {
  pepperoni: renderPepperoni,
  mushrooms: renderMushrooms,
  greenPeppers: renderGreenPeppers,
  whiteSauce: renderWhiteSauce,
  glutenFreeCrust: renderGlutenFreeCrust,
  buttons: renderButtons,
  price: renderPrice,
};
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
const stateKeys = Object.keys(state);

function renderEverything() {
  for (const key in objRender) {
    if (Object.hasOwnProperty.call(objRender, key)) {
      const fun = objRender[key];
      fun();
    }
  }
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
  for (const key of stateKeys) {
    let btn = objBtn[key];
    console.log(state[key]);
    if (state[key]) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }
}

function renderPrice() {
  let total = 10;
  for (const key in state) {
    if (Object.hasOwnProperty.call(state, key)) {
      const currentState = state[key];

      if (state[key]) {
        total += ingredients[key].price;
      }
    }
  }
  document.querySelector(".panel.price > strong").textContent = `$` + total;
}

renderEverything();

for (const key of stateKeys) {
  let btn = objBtn[key];
  btn.addEventListener("click", () => {
    console.log(state[key], !state[key], objRender[key]);
    state[key] = !state[key];
    objRender[key]();
    objRender.buttons();
    objRender.price();
  });
}
