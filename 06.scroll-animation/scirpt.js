const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll", scrolled)

scrolled()

function scrolled(){
    let height = window.innerHeight;

    boxes.forEach((box)=>{
        let boxTop = box.getBoundingClientRect().top
        if(boxTop < height*4/5){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
}