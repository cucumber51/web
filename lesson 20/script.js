//let a = [1920,"Иван",true];
//a.push("хоршее число");//.append
//console.log(a);
//a.pop()
//a.unshift(202)//добавление в начало
//a.shift()//удаление первого элемента
//console.log(a.indexOf("Иван"))//поиск индекса элемента, -1 если не найдет элемент
//console.log(a.includes(1920));//проверяет есть ли элемент в списке

//let teacher = {
//    firstname:"Антон",
//    age: 0,
//    job: "учитель веб-разработки и питона",
//    students:[1,2,3,4,5,6,],
//    hasdriverlicense:true,
//    birthday:1999,
//    calcage: function(birthday){
//        return 2023 - this.birthday
//    }
//};
//console.log(teacher.firstname);
//console.log(teacher["students"]);
//teacher.location = "Новосиюирск";//добавление
//teacher["workplace"] = "movavi";
//console.log(teacher.calcage())
//delete teacher.firstname
//console.log("location" in teacher)

}
let person1 = {
    ves:78,
    hight:1.69,
    name:"qw1",
    imt:function(){
        return this.ves/(this.hight**2)
    }
}

let person2 = {
    ves:92,
    hight:1.95,
    name:"qw2",
    imt:function(){
        return this.ves/(this.hight**2)
    }
}

console.log(imt())