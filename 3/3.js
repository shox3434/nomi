let narx = +prompt("Mahsulot narxini kiriting:");
let son = +prompt("Nechta mahsulot olmoqchisiz?");

function Hisobla(k, q) {
    return k * q;
}
Hisobla(narx, son);
let jami = Hisobla(narx, son)

alert(`Sizning jami to'lovingiz: ${jami} so'm`);