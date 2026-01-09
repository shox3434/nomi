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
   else{
    alert = "royxatdan otishingiz kerak"
   }
})
//     if(localname.toLowerCase() == ism.toLowerCase() && localpass.trim() == pass){
//         alert("siz Ro'yxatdan o'tdingiz")
//         localStorage.setItem("token",JSON.stringify({localname,localpass}))
//         window.location.href = "./index.html"
//     }
//     else if(localpass == "" && localname == ""||localpass.length<8){
//         alert("siz Nimadur Yozishingiz kerak yoki parol kam kiritingiz")
//     }
//     else{
//         alert("qandaydur xatolik bor")
//     }
//    localname = ""
//     localpass = ""

})