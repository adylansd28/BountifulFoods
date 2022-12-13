import fruits from '/json/fruits.json' assert { type: 'json'};

// Get Elements from DOM
const select1P = document.querySelector(".select1-p");
const select2P = document.querySelector(".select2-p");
const select3P = document.querySelector(".select3-p");;

// Convert fruits.json into an interable object
let fruitString = JSON.stringify(fruits);
let fruitParse = JSON.parse(fruitString);
let fruitsArray = fruitParse.fruits;

// Get all fruits names
let fruitName = [];

fruitsArray.forEach(fruit => {

    fruitName.push(fruit.name)

});

// Create Labels
let label1 = document.createElement("label");
label1.setAttribute("for", "select1");
label1.textContent = "Fruit 1:";

let label2 = document.createElement("label");
label2.setAttribute("for", "select2");
label2.textContent = "Fruit 2:";

let label3 = document.createElement("label");
label3.setAttribute("for", "select3");
label3.textContent = "Fruit 3:";

// Create Select Elements
let select1 = document.createElement("select");
select1.setAttribute("name", "select1");
select1.setAttribute("id", "select1");
select1.setAttribute("class", "select1")

let select2 = document.createElement("select");
select2.setAttribute("name", "select2");
select2.setAttribute("id", "select2");
select2.setAttribute("class", "select2");

let select3 = document.createElement("select");
select3.setAttribute("name", "select3");
select3.setAttribute("id", "select3");
select3.setAttribute("class", "select3");

let optionArray = []

// Create Option Elements
fruitName.forEach( name => {

    let newOption = document.createElement("option");
    newOption.setAttribute("value", name);
    newOption.textContent = name;

    optionArray.push(newOption);

});

optionArray.forEach(option => {
    select1.appendChild(option);
    select2.appendChild(option.cloneNode(true));
    select3.appendChild(option.cloneNode(true));
});

select1P.appendChild(label1);
select1P.appendChild(select1);
select2P.appendChild(label2);
select2P.appendChild(select2);
select3P.appendChild(label3);
select3P.appendChild(select3);