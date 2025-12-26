let kampyuter = Math.floor(Math.random(10)*10)
let invalue = +prompt("Kompyuter oylagan sonni toping?")

if (kampyuter == invalue){
    alert(`Siz yutdingiz! kompyuter oylagan edi ${kampyuter} ni, siz oyladingiz ${invalue}`);
    
}

else if (kampyuter != invalue){
    alert(`siz yutkazdingiz! kompyuter oylagan edi ${kampyuter} ni, siz oyladingiz ${invalue}`);
    
}

else{
    alert("son kiriting!");
    
}