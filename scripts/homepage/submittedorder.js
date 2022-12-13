let currentOrders = localStorage.getItem("orders");
const showingDiv = document.querySelector("#storaged-orders");
const showingInnerDiv = document.querySelector("#inner-storaged-orders");
const weather = document.querySelector("#div-weather");

if (currentOrders != null && currentOrders != undefined) {

    currentOrders = JSON.parse(currentOrders);
    
    for (let i = 0; i < currentOrders.length; i++) {

        let newP = document.createElement("p");
        newP.textContent = `${i + 1}. ${currentOrders[i][0]} + ${currentOrders[i][1]} + ${currentOrders[i][2]}`;
        showingInnerDiv.appendChild(newP);

    }

    showingDiv.removeAttribute("class");
    weather.removeAttribute("class");

}