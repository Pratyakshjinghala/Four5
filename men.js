let icon = document.querySelector(".icon")
let ul = document.querySelector("ul")

icon.addEventListener("click",()=>{
    ul.classList.toggle("showdata")
})




// cARD jss // 

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let mencontainer = document.querySelector(".men-container")

let itemImg = document.getElementById("itemImg")
console.log(crd)

crd.forEach(function(currentvalue){
    currentvalue.addEventListener("click",function(){
        itempage.style.display="flex";
        mencontainer.style.display="none";
       
        let imgsrc = currentvalue.firstElementChild.src
        itemImg.src = imgsrc 

    })
})