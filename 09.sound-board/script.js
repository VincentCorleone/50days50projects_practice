const audios = document.querySelectorAll("audio")

const buttons = document.getElementById("buttons")

audios.forEach((audio)=>{
    console.log(audio.id)
    const btn = document.createElement('button')
    btn.classList.add("btn")
    btn.innerText = audio.id
    btn.addEventListener('click',()=>{
        stopSongs()
        audio.play()
    })
    buttons.appendChild(btn)
})

function stopSongs(){
    audios.forEach((audio)=>{
        audio.pause()
        audio.currentTime = 0
    })
}

