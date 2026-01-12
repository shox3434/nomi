
let diiv = document.querySelector("#container")

let signOut = document.querySelector(".btn")




fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data => getUsers(data.users));



function getUsers(item){
    item.map(u=>{
     let tr = document.createElement("tr")

     tr.className= "tbody_tr";

       tr.innerHTML = `<tr class="tbody_tr">
                    <td><img src="${u.image}" alt="" class="tbody_img"></td>
                    <td class="tbody_name">${u.firstName}</td>
                    <td class="tbody_email">${u.email}</td>
                    <td class="tbody_phone">${u.phone}</td>
                    <td class="tbody_delete"><i class="bi bi-trash delete" id="ochirish"></i></td>
        </tr>`

        let udalit = tr.querySelector(".delete");

        udalit.addEventListener("click", () => {
    if(confirm("Haqiqattanham o'chirmoqchimisz")){
       fetch(`https://dummyjson.com/products/${id}`,{
        method: "DELETE",
       })
       .then(res => res.josn)
       .then(data => {
        console.log("ochirilidi", data);
        alert = ("Mahsulot O'chirildi ");
        window.location.href = "./admin.html"
        
       })
      
    }
});

          diiv.appendChild(tr)
    })
    
  
}



signOut.addEventListener("click", () => {
   localStorage.removeItem("token")
   alert("Siz tizimdan chiqdingiz")
   setTimeout(()=>{
      window.location = "./login.html"
   }, 1500)
})



// udalit.addEventListener("click", () => {
//     if(confirm("Haqiqattanham o'chirmoqchimisz")){
//        fetch(`https://dummyjson.com/products/${id}`,{
//         method: "DELETE",
//        })
//        .then(res => res.josn)
//        .then(data => {
//         console.log("ochirilidi", data);
//         alert = ("Mahsulot O'chirildi ");
//         window.location.href = "./admin.html"
        
//        })
      
//     }
// });