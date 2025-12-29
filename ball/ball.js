let hozirgiball = +prompt("avvalgi balingizni kiriting");
let yangiball = +prompt("yangiballni kiriting");    

function ball(x, y) {
    if (x < 0) {
        return console.log("natija xato");
        
    }
    else if (x + y >= 100) {
        return console.log("yutdingi");

    }
    else{
        return console.log("yutqazding");
    }
} 
ball(hozirgiball, yangiball);

let natija = ball(hozirgiball, yangiball);
console.log(natija);