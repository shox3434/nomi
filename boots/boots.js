

let user = prompt("Enter degree: ");

console.log(typeof(user));

if (user === "") {
    console.log("you did't enter nothing!")
}


else {
        if (isNaN(user)  === false ) {
    
}
let harorat = Number(user)
if (harorat > 30){
    console.log("wather is very hot, drink more water!")
}

if (harorat < 0){
    console.log("wather is very cool, more wear!")
}

if (harorat > 0 && harorat < 30 ){
    console.log("wather is normal, you can go outside!")
}



    console.log("place enter degree only number!")
}


// let user = +prompt("Enter value");

// console.log(typeof(user))

// if (user % 2 == 0)  {
//     console.log("bu juft son");
// }
// else if (user % 2 != 0) {
//     console.log("bu toq")
// }
// else {
//     console.log("malumot notogri")
// }