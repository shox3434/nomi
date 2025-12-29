
let count = document.querySelector('.count')
let plus = document.querySelectorAll('.plus')
let minus = document.querySelectorAll('.minus')
let jami = document.querySelector('.count_with_price')
let buyurtma = document.querySelector('.order')

plus[0].onclick = function() {
    count.textContent = Number(count.textContent) + 1
    jami.textContent = "$" + (5.99 * Number(count.textContent)).toFixed(2)
}
minus[0].onclick = function() {
    if (Number(count.textContent) > 0) {
        count.textContent = Number(count.textContent) - 1
        jami.textContent = "$" + (5.99 * Number(count.textContent)).toFixed(2)
    }       
}
buyurtma.onclick = function() {
    alert("Siz " + count.textContent + " ta burger buyurtma qildingiz. Jami summa: " + jami.textContent)
}

// End of loyiha1/loyiha1.js