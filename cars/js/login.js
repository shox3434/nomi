let name = document.querySelector(".inpname")
let parol = document.querySelector(".inpPass")
let btn = document.getElementById("send")

btn.addEventListener("click",(e)=>{
 e.preventDefault()
    let ism  = "Muhammad"
    let pass  = "Muhammad2002"
let localname = name.value
let localpass = parol.value

    
    if(localname.toLowerCase() == ism.toLowerCase() && localpass.trim() == pass){
        alert("siz Ro'yxatdan o'tdingiz")
        localStorage.setItem("token",JSON.stringify({localname,localpass}))
        window.location.href = "./index.html"
    }
    else if(localpass == "" && localname == ""||localpass.length<8){
        alert("siz Nimadur Yozishingiz kerak yoki parol kam kiritingiz")
    }
    else{
        alert("qandaydur xatolik bor")
    }
   localname = ""
    localpass = ""

})