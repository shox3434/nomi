let saved = JSON.parse(localStorage.getItem("token"))

if(saved){
   fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => getdata(data.products))
}

else{
   alert= "royhatdan oting"
   window.location.href = "../cars/login.html"
}




let $div = document.getElementById("containar")

let searchInp = document.querySelector(".inp")

const truncate = (text, limit) =>{
   if(text.length > 20){
      return text.slice(0,limit) + "..." 
    }

    else{
      return text
    }
}

function getdata(item){

   $div.innerHTML = ""

item.map(mahsulot => {

 

    let newLi = document.createElement("li")

    newLi.innerHTML = `
   
   <div class="card">
     <a href="./single.html?card-id=${(mahsulot.id)}">
     
        <img src="${mahsulot.thumbnail}" alt="">
    

    <div class="card_body">
    <h1 class="card_title">${mahsulot.title}</h1>
    <p class="card_description">${truncate(mahsulot.description,50)}</p>
    <p class="card_rating">${"⭐".repeat(Math.round(mahsulot.rating))}</p>
    <h5 class="card_price">${mahsulot.price}</h5>
    </div>
    </a>
    </div>

     
    
    `
      $div.appendChild(newLi)
 
})

 
}

searchInp.addEventListener("input", (e) => {
   console.log(e.target.value);
fetch(`https://dummyjson.com/products/search?q=${e.target.value.toLowerCase()}`)
.then(res => res.json())
.then(data =>{
      getdata(data.products)
});
})