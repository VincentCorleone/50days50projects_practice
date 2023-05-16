const background = document.querySelector(".background")
const percentage = document.querySelector('.percentage')


var timer = setInterval(blur,30)

var counter = 0

function blur(){
    counter++;
    if(counter>99){
        clearInterval(timer)
    }

    percentage.innerText = counter + "%"
    percentage.style.opacity = (100-counter) / 100;

    background.style.filter = `blur(${(100-counter)/100*30}px)`
}