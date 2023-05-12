const button = document.querySelector("button")
const input = document.querySelector("input")

button.addEventListener("click",()=>{
    button.classList.toggle("active")
    input.classList.toggle("active")
})