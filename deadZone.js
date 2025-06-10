//var
//let
//const

//HOISTING - всплытие

console.log(pasha);
console.log("step", step);
console.log(write1);
console.log(write2);

//все выше item - её временная мертвая зона
const item = {
    name: "Labubu",
    price: 30
};

item.name = "Kinchu";

const qwerty = "qwerty";

// qwerty = ""

console.log(item);

var pasha = 0;
let anton = 0;
 

//Function Declaration - всплывает
function write () {
    console.log(1)
}

//Function Expression - не всплывает
var write1 = function() {
    console.log(2)
}

var write2 = () => {
    console.log(3)
}

//Зоны видимости переменных

// глобальная
// функциональная
// блочная

// var - функциональная
// let - блочная
// const - блочная

//инкремент: ++i (префиксный) i++ (постфиксный)
//вычисление происходит сразу на месте и уже новое значение участвует в подсчете
//вычисляет после

for (let i = 0; i <= 4; i++) {
    console.log(i)
    for (let j = 0; j <= 4; j++) {
        console.log("j", j)
        // console.log("i", i)
    }
    // console.log(j)
}

// console.log(i)

function a () {
    console.log(1)
    const fuck = "FUCK";
    console.log(fuck)
}

let happiness = -1;

if (happiness < 0) {
    const result = "Bitch have fun";
    console.log(result);
}

// console.log(result)

//проверка вар на блочную область видимости - нет

for (var step = 1; step < 20; step+=2) {
    console.log('step', step);
}

console.log('step Outside', step);

for (var step = 1; step < 20; step+=2) {
    console.log('step', step);
}

console.log('step Outside', step);

function temperature () {
    var degrees = 45;
    console.log("degrees", degrees)
}

temperature()

console.log("degrees outside", degrees)

console.log(myFunction()); // Результат?
function myFunction() {
  return "Function called!";
}