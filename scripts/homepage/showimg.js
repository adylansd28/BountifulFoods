import fruits from '/json/fruits.json' assert { type: 'json'};

// Convert fruits.json into an interable object
let fruitString = JSON.stringify(fruits);
let fruitParse = JSON.parse(fruitString);
let fruitsArray = fruitParse.fruits;

// Get all fruits names
let fruitName = [];

fruitsArray.forEach(fruit => {

    fruitName.push(fruit.name)

});

// Get 8 random names from all fruits names
let choosenNames = [];
let newName = "";

for (let i = 0; i < 8; i++) {

    newName = fruitName[Math.floor(Math.random() * 39)]

    while (choosenNames.includes(newName)) {
        newName = fruitName[Math.floor(Math.random() * 39)]
    };
    
    choosenNames.push(newName);

};

// Get the 8 img elements

let images = document.querySelectorAll(".img-fruit");

//Set the data-src attribute

function setDataSrc (img, dataSrc) {
    img.setAttribute("data-src", `images/homepage/fruits/${dataSrc}.webp`);
}

for (let x = 0; x < 8; x++) {
    setDataSrc(images[x], choosenNames[x]);
}