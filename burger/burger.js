let burgersoni = +prompt("Nechta burger olasiz?");
let colasoni = +prompt("Nechta cola olasiz?");
let kupon = confirm("Kuponingiz bormi?");

function umumiynarx(burger, cola, kupon) {
    let burgerNarxi = 25000;
    let colaNarxi = 10000;
    let kuponChegirma = 10000;

    let summa = burgersoni * burgerNarxi + colasoni * colaNarxi;
    if (kupon === true) {
        summa -= kuponChegirma;
         return summa;
    }
    

    else if (kupon === false) {
        return summa;
    }   

    else {
        return "Noto'g'ri ma'lumot kiritildi";
    }
} umumiynarx(burgersoni, colasoni, kupon);
alert("Umumiy narx: " + umumiynarx(burgersoni, colasoni, kupon) + " so'm");