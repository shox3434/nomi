let url = location.search

let id = new URLSearchParams(url).get("card-id")


let single_img = document.querySelector(".single_img")
let single_title = document.querySelector(".single_title")
let single_description = document.querySelector(".single_description")
let single_price = document.querySelector(".single_price")

fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data => {
  single_img.src = `${data.thumbnail}`
  single_title.textContent = `${data.title}`
  single_description.textContent = `${data.description}`
  single_price.textContent = `${data.price}`
});

