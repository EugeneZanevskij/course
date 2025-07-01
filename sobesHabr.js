// 1
var a; //undefined
let b; //undefined
const c = 12; // обязаны пронициализировать
// 2
// && - and - и
console.log(2 && 'Fg' && '') //при первом попадании лживого значения сразу же вернет его
console.log(2 && 'Fg' && 'Her') //при первом попадании лживого значения сразу же вернет его иначе вернет последнее

// 3
// || - or - или
console.log(2 || 'Fg' || '') //при первом попадании трушного значения сразу же вернет его
console.log(0 || 'Fg' || 'Her') //Fg

//4
+"5"
//parseInt()

//e.stopPropagation() - остановить распространение события (как при погружении, так и при всплытии)

//8
// itemSpan.addEventListener("click", (e) => {
//   e.stopPropagation()
//   console.log('bitch1')
// })
// itemSpan.addEventListener("click", (e) => {
//   e.stopPropagation()
//   console.log('bitch2')
// }, {capture: true}) //отлов события при погружения

// 11
// const obj = {}
// console.log(obj)
// console.log(obj.someprop) //значение не задано - undefined
// console.log(obj.someprop.x) //к x внутри undefined

//12
const div = document.querySelector('div.div');
console.log(div);
div.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("Событие дива")
    console.log("target", e.target)
    console.log("current target", e.currentTarget)
})
const p = document.querySelector('p.p');
console.log(p);
p.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Событие параграфа")
    console.log("target", e.target)
    console.log("current target", e.currentTarget)
})

// 18
//var - поднимается объявление
//let и const - нет

//function expression - не поднимается
//function declaration -  поднимается (слово function)
console.log(sum)
var sum = () => {
    console.log(2)
    return 3
}
console.log(sum)
console.log(sum())

sum = 5
console.log(sum)

function sum1 (a = 5) {
    return a
}
console.log(sum1())
console.log(sum1(6))

//19
// цепочка областей видимости
// внутренняя область видимости -> внешняя область видимости -> глобальная область видимости

// глобальная область видимости
var variable1 = 'Comrades'
var variable2 = 'Sayonara'

function outer() {
    // внешняя область видимости
    var variable1 = 'World'

    function inner() {
        // внутренняя область видимости
        var variable2 = 'Hello'
        console.log(variable2 + ' ' + variable1)
    }
    inner()
}
outer()
// в консоль выводится 'Hello World',
// потому что variable2 = 'Hello' и variable1 = 'World' являются ближайшими
// к внутренней области видимости переменными

// //35
// [1, 4, 6, 8].map(x => x*2) // [2, 8, 12, 16]
// [1, 4, 6, 8].filter(x => x>5) // [6, 8]


const sumWithInitial = [1, 2, 3, 4].reduce((accumulator, number) => accumulator + number, 0);
console.log(sumWithInitial)

//1 итерация accumulator 1 array [2, 3, 4]
//2 итерация accumulator 1+2=3 array [3, 4]
//3 итерация accumulator 3+3=6 array [4]
//4 итерация accumulator 6+4=10 array []

//arguments
function sum1 (a, b = 10) {
    console.log('0', arguments[1])
    return a + b
}
console.log(sum1())
console.log(sum1(6))
console.log(sum1(6, 1))
console.log(sum1(6, 1, 5, 678))