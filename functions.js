window.addEventListener("load", pageSetUp);

var pizzas = ["Cheese", 5.00 ,"Pepperoni", 6.00 , "Meat Lovers", 8.00 , "Vegetarian", 7.00 , "Buffalo Chicken", 10.00]

function pageSetUp(){
    for (i=0; i<10; i++){
    document.getElementById("1-10").innerHTML += `<option value="${i}">${i}</option>`;
    }
    for (j=0; j<pizzas.length - 1; j++){
        document.getElementById("Type").innerHTML += `<option value="${pizzas[j]}">${pizzas[j]}</option>`;
        j++;
    }
}