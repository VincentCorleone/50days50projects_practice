const textarea = document.querySelector("textarea")
const mountPoint = document.getElementById("tags")

console.log(textarea)

textarea.addEventListener("keyup",(event)=>{
    mountTags()

    if(event.key == "Enter"){
        randomSelect()
    }
})

function mountTags(){
    const tags = textarea.value.split(",").filter((e)=>e.trim()!="").map((tag)=>tag.trim());
    mountPoint.innerHTML=""
    tags.forEach((tag)=>{
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag")
        tagEl.innerText = tag
        mountPoint.appendChild(tagEl)
    })
}

function randomSelect(){
    const interval = setInterval(()=>{
        const tags = document.querySelectorAll(".tag")
        var i = Math.floor(Math.random() * tags.length)
        tags[i].classList.add("highlight")
        setTimeout(()=>{
            tags[i].classList.remove("highlight")
        },100)
    },100)

    const times = 30

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const tags = document.querySelectorAll(".tag")
            var i = Math.floor(Math.random() * tags.length)
            tags[i].classList.add("highlight")
        })
    },times * 100)
}