const hamburger=document.querySelector("#hamburger")
const menu=document.querySelector("#menu")
const smartLinks = document.querySelectorAll("#smartlink")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    console.log("hahahahahah")
    hamburger.classList.toggle("color")
})

smartLinks.forEach(link=>{
    link.addEventListener("click", ()=>
    menu.classList.toggle("hidden"))
})