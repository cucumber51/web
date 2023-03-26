let user = document.querySelector(".inp1");
let score_counter = document.querySelector(".score_counter")
let record_counter = document.querySelector(".record")
let bm = document.querySelector(".bm")
let record = document.querySelector(".record")
let d = document.querySelector(".chislo")
let life=7;
let c = document.querySelector(".myButton2");
let f = document.querySelector(".myButton");
score_counter.innerHTML = life  
a = Math.trunc(Math.random()*100);
console.log(a)
function check_record(){
    if (record_counter.innerHTML =="-"){
        record_counter.innerHTML = 7-life+1
    }
    else{
        if(record_counter.innerHTML>7-life)
        record_counter.innerHTML = 7-life+1
    }

}
function myFunction(){
    
    
    if (a<user.value){
        console.log('загаданное число меньше')
        life--
        score_counter.innerHTML = life
        bm.innerHTML="загаданное число меньше" 
    }
    if (a>user.value){
        console.log('загаданное число больше')
        life--
        score_counter.innerHTML = life
        bm.innerHTML="загаданное число больше"  
    }
    if (a==user.value){
        d.innerHTML=a
        alert('угадал')
        check_record()
        f.disabled = true
        

    }
    if (life<=0){
        alert("Вы проиграли")
    }
    
    
    console.log(life)
}

function repeat(){
    user.value = ""
    life = 7
    document.querySelector(".chislo").innerHTML = "?"
    document.querySelector(".bm").innerHTML = "заданное число больше/меньше"
    a = Math.trunc(Math.random()*100);
    console.log(a)
    f.disabled = false
    document.querySelector(".score_counter").innerHTML = 7
}