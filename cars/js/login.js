let name = document.querySelector(".inpname")
let parol = document.querySelector(".inpPass")
let btn = document.getElementById("send")


btn.addEventListener("click",(e)=>{
 e.preventDefault()
 let user = {
        username: name.value,
        password: parol.value
}



fetch('https://dummyjson.com/auth/login',{

method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify(user)

})
.then(res=>res.json())
.then(data=>{
   if(data.accessToken){ 
    localStorage.setItem("token",JSON.stringify(data.accessToken))
    window.location.href = "../cars/index.html"
   }

   else if(user.username == "shakh" && user.password == "kingdav"){
        alert ("Adminga kirdingiz")     
        window.location.href = "./admin.html"  
    }

    else if (user.username == "" && user.password == ""){
        alert ("Maydonlarni toldiring")
    }
   

   else{
    alert = ("royxatdan otishingiz kerak")
   }
})


})