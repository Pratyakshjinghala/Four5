let icon = document.querySelector(".icon")
let ul = document.querySelector("ul")

icon.addEventListener("click",()=>{
    ul.classList.toggle("showdata")
})



// cARD jss // 

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage")
let Kidscontainer = document.querySelector(".Kids-container")

let itemImg = document.getElementById("itemImg")
console.log(crd)

crd.forEach(function(currentvalue){
    currentvalue.addEventListener("click",function(){
        itempage.style.display="flex";
        Kidscontainer.style.display="none";
       
        let imgsrc = currentvalue.firstElementChild.src
        itemImg.src = imgsrc 

    })
})