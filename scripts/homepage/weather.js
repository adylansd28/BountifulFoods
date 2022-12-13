// Current Weather Elements
let currentTemperature = document.querySelector(".current-temperature");
let currentHumidity = document.querySelector(".current-humidity");
let currentCondition = document.querySelector(".current-condition");
let currentCaption = document.querySelector(".current-caption");

// Day 1 Forecast Elements
let day1Temperature = document.querySelector(".day1-temperature");
let day1Humidity = document.querySelector(".day1-humidity");
let day1Condition = document.querySelector(".day1-condition");
let day1Caption = document.querySelector(".day1-caption");

// Day 2 Forecast Elements
let day2Temperature = document.querySelector(".day2-temperature");
let day2Humidity = document.querySelector(".day2-humidity");
let day2Condition = document.querySelector(".day2-condition");
let day2Caption = document.querySelector(".day2-caption");

// Day 3 Forecast Elements
let day3Temperature = document.querySelector(".day3-temperature");
let day3Humidity = document.querySelector(".day3-humidity");
let day3Condition = document.querySelector(".day3-condition");
let day3Caption = document.querySelector(".day3-caption");

// Fetch response from API Weather
async function apiFetch() {

    try {

        //Url to get response about Carlsbad
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=69cb885e3688c3992b0fe4571e137a3b`;

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();
            display(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }

};

function display (data) {

    // Get Weather Condtion Icons
    let currentIcon = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let day1Icon = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    let day2Icon = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    let day3Icon = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;

    // Display Current Weather
    currentTemperature.innerHTML = data.list[0].main.temp;
    currentHumidity.innerHTML = data.list[0].main.humidity;
    currentCondition.setAttribute("src", currentIcon);
    currentCondition.setAttribute("alt", data.list[0].weather[0].description);
    currentCaption.textContent = data.list[0].weather[0].description;

    //Display Forecast Weather 1 Day
    day1Temperature.innerHTML = data.list[8].main.temp;
    day1Humidity.innerHTML = data.list[8].main.humidity;
    day1Condition.setAttribute("src", day1Icon);
    day1Condition.setAttribute("alt", data.list[8].weather[0].description);
    day1Caption.textContent = data.list[8].weather[0].description;

    //Display Forecast Weather 2 Days
    day2Temperature.innerHTML = data.list[16].main.temp;
    day2Humidity.innerHTML = data.list[16].main.humidity;
    day2Condition.setAttribute("src", day2Icon);
    day2Condition.setAttribute("alt", data.list[16].weather[0].description);
    day2Caption.textContent = data.list[16].weather[0].description;

    //Display Forecast Weather 3 Days
    day3Temperature.innerHTML = data.list[24].main.temp;
    day3Humidity.innerHTML = data.list[24].main.humidity;
    day3Condition.setAttribute("src", day3Icon);
    day3Condition.setAttribute("alt", data.list[24].weather[0].description);
    day3Caption.textContent = data.list[24].weather[0].description;

}

apiFetch();