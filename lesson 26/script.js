const drumBtn = document.querySelectorAll(".drum")
const numberBtn = document.querySelectorAll(".drum").length

for (i=0;i<numberBtn;i++){
    drumBtn[i].addEventListener("click",function(){
        const btnInnerHtml = drumBtn[i].innerHTML;
        makeSound(btnInnerHtml)
    
    })
}

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})

const makeSound = (key) => {
    switch(key){
        case "w":
            const w_sound = new Audio("sounds/drum1.mp3")
            w_sound.play();
            case "a":
                const a_sound = new Audio("sounds/drum1.mp3")
                a_sound.play();
            case "d":
            const d_sound = new Audio("sounds/drum1.mp3")
            d_sound.play();
    }
}