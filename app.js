var selector=document.querySelector(".selector");
var list=document.getElementById("list");
var options=document.querySelectorAll(".options");
var selectorArea=document.getElementById("selectorArea");
var arrowIcon=document.getElementById("arrowIcon")

selector.addEventListener("click", ()=>{
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
})

for (option of options){
    option.addEventListener("click",function(){
        selectorArea.innerHTML=this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
        
    })
        
}

