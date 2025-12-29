let num1 = +prompt("birinchi sonni kiriting:");
let num2 = +prompt("ikkinchi sonni kiriting:");
let amal = prompt("amalni kiriting (+, -, *, /):");

function hisobla (a, b, amal) {
    if (amal === "+") {
        return a + b;
    } else if (amal === "-") {
        return a - b;
    } else if (amal === "*") {
        return a * b;
    } else if (amal === "/") {
        return a / b;
    }
}
hisobla(num1, num2, amal);
let natija = hisobla(num1, num2, amal);
alert(natija);