//Объекты
//https://learn.javascript.ru/object

let person = { //объект
    name: "Eugene",
    age: 22,
    '1': 4,
    education: "GrSU",
    "has children": false
};
console.log(person.age) // получение хначения по ключу
person.health = 80; // перезаписать значение / добавить свойство
console.log(person)
delete person.health; // удалить пару ключ-значение (свойство)
console.log(person['1']);

console.log(Object.keys(person)) //получить массив ключей
console.log(Object.values(person)) //получить массив значений
console.log(Object.entries(person)) //получить массив свойств (вложенный в массив массив)