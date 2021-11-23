
if(5 > 3){
    console.log("is greater than")

}

var cat = "cat"
var dog = "dog"

if(cat.length === 3) {

    console.log("is the length") 
}

if (cat === dog) {
    console.log("They are the same")
} else {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12,
}

if (person.name[0] == 'B') {
    console.log(person.name + " is allowed to go to the movie")
}

if (person.name[0] == 'B' && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie")
}

if (1 === "1") {
    console.log("loose")
} else if (1 == "1") {
    console.log("abstract")
} else {
    console.log("not equal at all")
}

if (typeof dog === "string") {
    console.log("true")
}

if (typeof true === "boolean") {
    console.log("is boolean")
}

if (typeof randomVariable === "undefined") {
    console.log("Variable is undefined")
}

if ("s" > 12) {
    console.log("s is greater than 12")
}

var myNum = 7;

myNum % 2 === 0 ? console.log("Even") : console.log("Odd")