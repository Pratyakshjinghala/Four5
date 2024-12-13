let icon = document.querySelector(".icon")
let ul = document.querySelector("ul")

icon.addEventListener("click",()=>{
    ul.classList.toggle("showdata")
})

// card and crd js

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let container = document.querySelector(".container")

let itemImg = document.getElementById("itemImg")
console.log(crd)

crd.forEach(function(currentvalue){
    currentvalue.addEventListener("click",function(){
        itempage.style.display="flex";
        container.style.display="none";
       
        let imgsrc = currentvalue.firstElementChild.src
        itemImg.src = imgsrc 

    })
})