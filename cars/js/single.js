let url = location.search;

let id = new URLSearchParams(url).get("card-id");
let update = document.querySelector(".edit");
let udalit = document.querySelector(".delete");

let single_img = document.querySelector(".single_img");
let single_title = document.querySelector(".single_title");
let single_description = document.querySelector(".single_description");
let single_price = document.querySelector(".single_price");

let updateImg = document.querySelector("#inpImg");
let updateName = document.querySelector("#inpName");
let updateDesc = document.querySelector("#inpDesc");
let updatePrice = document.querySelector("#inpPrice");
let updateBtn = document.querySelector(".updateBtn");

function renderProduct(product) {
  single_img.src = product.thumbnail;
  single_title.textContent = product.title;
  single_description.textContent = product.description;
  single_price.textContent = product.price + " $";
}

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((data) => {
    renderProduct(data); // Kelgan ma'lumotni ekranga chiqaramiz

    // Inputlarni ham joriy ma'lumot bilan to'ldirib qo'yish (foydalanuvchiga qulay bo'ladi)
    updateImg.value = data.thumbnail;
    updateName.value = data.title;
    updateDesc.value = data.description;
    updatePrice.value = data.price;
  });

updateBtn.addEventListener("click", () => {
  let updatePro = {
    thumbnail: updateImg.value,
    title: updateName.value,
    description: updateDesc.value,
    price: updatePrice.value,
  };

  fetch(`https://dummyjson.com/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatePro),
  })
    .then((res) => res.json())
    .then((data) => {
      alert = "Yangilandi";

      renderProduct(data);
    });
});


udalit.addEventListener("click", () => {
    if(confirm("Haqiqattanham o'chirmoqchimisz")){
       fetch(`https://dummyjson.com/products/${id}`,{
        method: "DELETE",
       })
       .then(res => res.josn)
       .then(data => {
        console.log("ochirilidi", data);
        alert = ("Mahsulot O'chirildi ");
        window.location.href = "./index.html"
        
       })
      
    }
});
