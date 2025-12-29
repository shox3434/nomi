let yosh = +prompt("Yoshingizni kiriting")
let chipta = confirm("Chiptangiz bormi?")
let chiptaNarxi = 5

function kinoKirish(yosh, chipta, chiptaNarxi) {
    if (yosh < 7 ) {
        return console.log("Sizga kirish bepul")

    }
    else if (chipta === true) {
        return console.log(`Sizga 20% chegirma, chipta narxi: ${chiptaNarxi * 0.8} `)
    }

    else {
        return console.log(`Sizdan to'liq narx: ${chiptaNarxi} `)
    }
} kinoKirish(yosh, chipta, chiptaNarxi)
let natija = kinoKirish(yosh, chipta, chiptaNarxi)
console.log(natija);