let score_counter = document.querySelector(".score_counter")
let record_counter = document.querySelector(".record")
let bm = document.querySelector(".bm")
let record = document.querySelector(".record")
let d = document.querySelector(".chislo")
let life=7;
score_counter.innerHTML = life  
const a = Math.trunc(Math.random()*100);
console.log(a)
function check_record(){
    if (record_counter.innerHTML =="-"){
        record_counter.innerHTML = 7-life
    }
    else{
        if(record_counter.innerHTML>7-life)
        record_counter.innerHTML = 7-life
    }

}
function myFunction(){
    let c = document.querySelector(".myButton2").value;
    let user = document.querySelector(".inp1").value;
    if (a<user){
        console.log('загаданное число меньше')
        life--
        score_counter.innerHTML = life
        bm.innerHTML="загаданное число меньше" 
    }
    if (a>user){
        console.log('загаданное число больше')
        life--
        score_counter.innerHTML = life
        bm.innerHTML="загаданное число больше"  
    }
    if (a==user){
        d.innerHTML=a
        alert('угадал')
        check_record()
        

    }
    if (life<=0){
        alert("Вы проиграли")
    }
    
    
    console.log(life)
}