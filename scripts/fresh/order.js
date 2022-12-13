import fruits from '/json/fruits.json' assert { type: 'json'};

// Get Local Storage

let orders = [];

// Convert fruits.json into an interable object
let fruitString = JSON.stringify(fruits);
let fruitParse = JSON.parse(fruitString);
let fruitsArray = fruitParse.fruits;

// Order Button
const orderBTn = document.querySelector("#order");
let today = new Date();
today = `${today.getMonth()}/${today.getDay()}/${today.getFullYear()} - ${today.getHours()}:${today.getMinutes()}`;
let orderDiv = document.querySelector("#div-current-order");

// Outputs
let outName = document.querySelector(".name-order");
let outEmail = document.querySelector(".email-order");
let outPhone = document.querySelector(".phone-order");
let outDate = document.querySelector(".date-order");
let fruit1 = document.querySelector(".selected-fruit1");
let fruit2 = document.querySelector(".selected-fruit2");
let fruit3 = document.querySelector(".selected-fruit3");
let spIn = document.querySelector(".show-sp-in");
let showCarbohydrates = document.querySelector(".carbohydrates");
let showProteins = document.querySelector(".proteins");
let showFat = document.querySelector(".fat");
let showSugar = document.querySelector(".sugar");
let showCalories = document.querySelector(".calories");

function getCarbohydrates (fruit) {

    let carbohydrates = 0;

    for (let i = 0; i < 39; i++) {

        if (fruitsArray[i].name == fruit) {

            carbohydrates = fruitsArray[i].nutritions.carbohydrates;
            return carbohydrates

        }

    }

}

function getProtein (fruit) {

    let proteins = 0;

    for (let i = 0; i < 39; i++) {

        if (fruitsArray[i].name == fruit) {
            
            proteins = fruitsArray[i].nutritions.protein;
            return proteins

        }

    }

}

function getFat (fruit) {

    let fat = 0;

    for (let i = 0; i < 39; i++) {

        if (fruitsArray[i].name == fruit) {
            
            fat = fruitsArray[i].nutritions.fat;
            return fat

        }

    }

}

function getSugar (fruit) {

    let sugar = 0;

    for (let i = 0; i < 39; i++) {

        if (fruitsArray[i].name == fruit) {
            
            sugar = fruitsArray[i].nutritions.sugar;
            return sugar

        }

    }

}

function getCalories (fruit) {

    let calories = 0;

    for (let i = 0; i < 39; i++) {

        if (fruitsArray[i].name == fruit) {
            
            calories = fruitsArray[i].nutritions.calories;
            return calories

        }

    }

}

function getComponents (newFruit) {

    let components = [

        +getCarbohydrates(newFruit),
        +getProtein(newFruit),
        +getFat(newFruit),
        +getSugar(newFruit),
        +getCalories(newFruit)

    ];

    return components
}

function orderNow () {

    // Inputs
    let inputName = document.querySelector("#name");
    let inputEmail = document.querySelector("#email");
    let inputPhone = document.querySelector("#phone");
    let select1 = document.querySelector(".select1");
    let select2 = document.querySelector(".select2");
    let select3 = document.querySelector(".select3");
    let spInInput = document.querySelector("#special-instructions");

    outName.textContent = inputName.value;
    outEmail.textContent = inputEmail.value;
    outPhone.textContent = inputPhone.value;
    outDate.textContent = today;

    let select1Val = select1.options[select1.selectedIndex].value;
    let select2Val = select2.options[select2.selectedIndex].value;
    let select3Val = select3.options[select3.selectedIndex].value

    fruit1.textContent = select1Val;
    fruit2.textContent = select2Val;
    fruit3.textContent = select3Val;

    spIn.textContent = spInInput.value;

    let Fruit1Components = getComponents(select1Val);
    let Fruit2Components = getComponents(select2Val);
    let Fruit3Components = getComponents(select3Val);

    let totalCarbohydrates = Fruit1Components[0] + Fruit2Components[0] + Fruit3Components[0];
    let totalProteins = Fruit1Components[1] + Fruit2Components[1] + Fruit3Components[1];
    let totalFat = Fruit1Components[2] + Fruit2Components[2] + Fruit3Components[2];
    let totalSugar = Fruit1Components[3] + Fruit2Components[3] + Fruit3Components[3];
    let totalCalories = Fruit1Components[4] + Fruit2Components[4] + Fruit3Components[4];

    showCarbohydrates.textContent = totalCarbohydrates.toFixed(2);
    showProteins.textContent = totalProteins.toFixed(2);
    showFat.textContent = totalFat.toFixed(2);
    showSugar.textContent = totalSugar.toFixed(2);
    showCalories.textContent = totalCalories.toFixed(2);

    orderDiv.removeAttribute("class");

    if (JSON.parse(localStorage.getItem('orders')) == null || JSON.parse(localStorage.getItem('orders')) == undefined) {
        orders = [];
    } else {
        orders = JSON.parse(localStorage.getItem('orders'));
    };

    orders.push([select1Val, select2Val, select3Val]);
    localStorage.setItem("orders", JSON.stringify(orders));
    console.log(localStorage.getItem("orders"));

};

orderBTn.addEventListener("click", orderNow);