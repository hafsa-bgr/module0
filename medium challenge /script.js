"use strict";
document.getElementById("bereken").addEventListener("click", function () {
    let getal1 = document.getElementById("getal1").value.trim();
    let getal2 = document.getElementById("getal2").value.trim();
    let resultaatElement = document.getElementById("resultaat");

    console.log("Getal1:", getal1);
    console.log("Getal2:", getal2);

    if (isNaN(getal1) || isNaN(getal2) || getal1 === "" || getal2 === "") {
        resultaatElement.textContent = "Voer geldige getallen in.";
        return;
    }

    let num1 = parseFloat(getal1);
    let num2 = parseFloat(getal2);

    console.log("Num1:", num1);
    console.log("Num2:", num2);

    let som = num1 + num2;

    resultaatElement.textContent = "Resultaat: " + som;
});