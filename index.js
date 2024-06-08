// adding mouse events

document.body.querySelector(".w").addEventListener("click",()=>{
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
    document.querySelector(".w").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".w").classList.remove("pressed")
    }
})

document.body.querySelector(".a").addEventListener("click",()=>{
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play()
    document.querySelector(".a").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".a").classList.remove("pressed")
    }
})

document.body.querySelector(".s").addEventListener("click",()=>{
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play()
    document.querySelector(".s").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".s").classList.remove("pressed")
    }
})

document.body.querySelector(".d").addEventListener("click",()=>{
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play()
    document.querySelector(".d").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".d").classList.remove("pressed")
    }
})

document.body.querySelector(".j").addEventListener("click",()=>{
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play()
    document.querySelector(".j").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".j").classList.remove("pressed")
    }
})

document.body.querySelector(".k").addEventListener("click",()=>{
    var audio = new Audio("sounds/snare.mp3")
    audio.play()
    document.querySelector(".k").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".k").classList.remove("pressed")
    }
})

document.body.querySelector(".l").addEventListener("click",()=>{
    var audio = new Audio("sounds/crash.mp3")
    audio.play()
    document.querySelector(".l").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".l").classList.remove("pressed")
    }
})

// adding keyboard events

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("w")){
        var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
    document.querySelector(".w").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".w").classList.remove("pressed")
    }
    }    
})

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("a")){
        var audio = new Audio("sounds/tom-2.mp3")
    audio.play()
    document.querySelector(".a").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".a").classList.remove("pressed")
    }
    }    
})

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("s")){
        var audio = new Audio("sounds/tom-3.mp3")
    audio.play()
    document.querySelector(".s").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".s").classList.remove("pressed")
    }
    }    
})

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("d")){
        var audio = new Audio("sounds/tom-4.mp3")
    audio.play()
    document.querySelector(".d").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".d").classList.remove("pressed")
    }
    }    
})

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("j")){
        var audio = new Audio("sounds/kick-bass.mp3")
    audio.play()
    document.querySelector(".j").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".j").classList.remove("pressed")
    }
    }    
})

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("k")){
        var audio = new Audio("sounds/snare.mp3")
    audio.play()
    document.querySelector(".k").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".k").classList.remove("pressed")
    }
    }    
})

document.addEventListener("keydown",(e)=>{
    if (e.key.startsWith("l")){
        var audio = new Audio("sounds/crash.mp3")
    audio.play()
    document.querySelector(".l").classList.add("pressed")
    setTimeout(hidden, 100 )
    function hidden(){
        document.querySelector(".l").classList.remove("pressed")
    }
    }    
})

