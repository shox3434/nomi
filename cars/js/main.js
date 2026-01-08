
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => getdata(data.products))

let $div = document.getElementById("containar")
function getdata(item){
 for (let i = 0; i < item.length; i++){
    
    let mahsulot = item[i]

    let newLi = document.createElement("li")

    newLi.innerHTML = `
    
   <div class="card">
    
    <a href="./single.html?card-id=${mahsulot.id}"> 
        <img src="${mahsulot.thumbnail}" alt="">
     </a>

    <div class="card_body">
    <h1 class="card_title">${mahsulot.title}</h1>
    <p class="card_description">${mahsulot.description}</p>
    <h5 class="card_price">${mahsulot.price}</h5>
    </div>
    </div>

    
    `
    $div.appendChild(newLi) 
 }

}
    

