let point1 = {}
let point2 = {x:2, y:4}
console.log("point1, point2:",point1, point2);
point1.x = 2
console.log("point1:",point1);
/********************************************/
let point3 = new Object({x:2})
console.log("point3:",point3);
let point4 = Object.create({x:2, y:8})
console.log("point4.x + point4.y:",point4.x + point4.y);
/********************************************/
let book = {
    main_title: "Harry Potter",
    sub_title: "A pedra filosofal",
    author: {
        firstname: "J. K.",
        lastname: "Rowling"
    }
}
console.log("book:",book);
console.log("book.author.lastname:",book.author.lastname);
/********************************************/
let object = {x:2}
console.log("x" in object);
if ("x" in object){
    delete(object.x)
}
console.log("x" in object);
/********************************************/
let serialNumbers = {
    $n: 0,
    get next(){
        return this.$n = this.$n+1
    },
    set next(value){
        this.$n += value
    }
}
console.log("serialNumbers:",serialNumbers);
console.log("serialNumbers.next:",serialNumbers.next);