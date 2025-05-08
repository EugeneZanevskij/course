// console.log(1);

// const nameStudent = "Женя";
// function printNameBySymbol (name) {
//     let i = 0;
//     while (i < name.length) {
//       console.log(name[i]);
//       i = i + 1;
//     }
//   };

// printNameBySymbol(nameStudent);

// const nameStuden = "Женя";
// function printReversedWordBySymbol (name) {
//     let i = name.length - 1; //3
//     while (i >= 0) {
//         console.log(name[i]); //я н е Ж
//         i = i - 1; //-1
//     }
// };

// printReversedWordBySymbol(nameStuden);
  
// // чему равно i при котором мы зайдем последний раз в цикл?
// // i = name.length - 1
// // ЖЕНЯ
// // 1234
// // 0123

// // querySelector
// // getElementById

// // document.querySelector(".name").textContent = name;

// function countChars (str, char) {
//     let i = 0;
//     let count = 0;
//     while (i < str.length) {
//         if (str[i].toLowerCase() === char.toLowerCase()) {
//             count = count + 1;
//         }
//         i = i + 1;
//     }
  
//     return count;
// };
// //"".toLowerCase()
// //"".toUpperCase()
// //Обновить, чтобы не учитывался регистр

// console.log(countChars('FEa err tgfd lpte', 'E'));
// console.log(countChars('fea err tgfd lpte', 'e'));
  
// //переворот слова
// function reverse (str) {
//     let i = 0;
//     let result = '';
//     while (i < str.length) {
//         if (i%2 === 0) {
//             //Выполняется только при условии кратности на 2
//         }
//         result = `${str[i]}${result}`; // 'ниждЮ'
//         i = i + 1; // 5
//     }
  
//     return result;
// };

// console.log(reverse("Юджин"));

// let i = 0;
// console.log(i % 2 === 0)

// //Женя
// //1234 - символы
// //0123 - индексы

// // Реализуйте функцию even(), которая возвращает новую 
// // строку, состоящую из чётных символов исходной строки.
// //четный символ === нечетный индекс

// function even (str) {
//     let i = 0;
//     let result = "";

//     while (i < str.length) {
//         //str[0] str[2] str[4]
//         if (i % 2 !== 0) { // проверка на нечетность
//             result += str[i];
//         }
//         //Увеличчение на 1
//         i += 1;
//         // i = i + 1;
//         // i++;
//         // ++i;
//     }

//     return result;
// }

// function filterString (str, char) {
//     let i = 0;
//     let result = '';

//     while (i < str.length) { // .. < 8
//         if (str[i] !== char) { // .. !== 'z'
//             result += str[i]; //" Zorro"
//         }

//         i+=1; //6
//     }
//     return result;
// }

// console.log(filterString('zz Zorro', 'z'))


//ИНКРЕМЕНТ И ДЕКРЕМЕНТ

// let x = 0;
// x++;
// x++;
// ++x;
// x--;

//Инкремент
// console.log(x); //2
// console.log(++x); //3
// console.log(x); //3
// console.log(x++ +1); //3
// console.log(x); //4

// console.log(x); //2
// console.log(--x); //1
// console.log(x); //1
// console.log(x--); //1
// console.log(x); //0

// function makeItFunny(text, number) {
//     let i = 0;
//     let result = '';

//     while (i < text.length) {
//         // if (i % n === n-1) {
//         if (++i % number === 0) { //++2 % 3 === 0
//             // i = 3 
//             // при N=3 
//             // символы - 3, 6, 9, ...
//             // i = 2, 5, 8, ...
//             // 2 : 3 = 0 (ост.2)
//             // 5 : 3 = 1 (ост.2)
//             // 8 : 3 = 2 (ост.2)
//             result += text[i-1].toUpperCase();
//         } else {
//             result += text[i-1];
//         }
//     }

//     return result;
// }

// console.log(makeItFunny('I never look back', 3));

// ++x;
// x++;


// function hasChar (text, symbol) {
//     let i = 0;
//     let result = false;

//     while (i < text.length) {
//         if (text[i] === symbol) {
//             result = true;
//             break;
//         }
//         i++;
//     }
//     return result;
// }

// console.log(hasChar("dsh", "s"));

// function reverseString (str) {
//     let result = '';
//     for (let i = 0; i < str.length; i += 1) {
//         result = `${str[i]}${result}`;
//     }

//     return result;
// };

// for (let i = 0; i < 5; i++) alert( i );

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i);
// }
// let i = 0;
// while (i < 3) {
//     // alert( `number ${i}!` );
//     i++;
// }

// while (true) {
//     let num = +prompt("Enter number");
//     if (num > 100) break;
// }

// for (let i = 0; i <= 100; i+=2) {
//     console.log(i);
// }

// let a = 1;
// let sum = 0;

// while (a <= 100) {
//     sum = sum + a;
//     a++;
// }

// console.log(sum);

// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }

// console.log(sum);

// do {

// } while ();

// let result = "";
// let i = 0;

// do {
//   i = i + 1; //1
//   result = result + i; //'1'
// } while (i > 5000000);

// while (i > 5) {
//     i = i + 1;
//     result = result + i;
// }

// console.log(result);

//22.04.2025
// домашка 1

// Задача №1. Список квадратов

// Выведите все точные квадраты натуральных чисел, не превосходящие данного числа N.
// Входные данные
// Задано единственное целое число N 
// Выходные данные
// Необходимо вывести  все точные квадраты натуральных чисел, не превосходящие данного числа N.

// function squareList (number) {
//     for (let i = 1; i**2 < number;i++) {
//         console.log(i**2);
//     }
//     for (let i = 1; i < number;i++) {
//         if (i**2 >= number) {
//             break;
//         }
//         console.log(i**2);
//     }
// }

// squareList(25);

// Задача 2
// Пользователь вводит натуральные числа по одному на каждой строке. Когда ему надоедает, то он вводит 0. Найти количество введенных чисел (0 не считается)


// let count = 0;
// while (true) {
//     let number = +prompt("Enter number");
//     if (number === 0) {
//         break;
//     }
//     count++;
// }

// console.log(count);

// let k = +prompt("Enter num1");
// let n = +prompt("Enter num2");

//7
//17 - final

//7 = 7*1
//14 = 7*2

//21 = 7*3 --- нет
// for (let i = 1; k*i <= n; i++) {
//     console.log(k*i);
// }

// let first = +prompt("Введите первое число: ");
// let second = +prompt("Введите второе число: ");

// for (let i = 1; i <= second; i++) {
//   if (!(first >= 1 && first <= 10)){
//     console.log("Некорректное первое значение");
//     break;
//   } else if(!(second >= 0 && second <=100)){
//     console.log("Некорректное второе значение");
//     break;
//   }
//   if((first % i) === 0 || (i % first) === 0){
//     console.log(i);
//   }
// }

//k = 10
//кратные 10
//от 1 до 9


// function countNaturalNumber(){
//     let count = 0;
//     let number = 0;

//     do{
//         number = +prompt('Введите натуральные число: ')

//         if(number !== 0 && number > 0){
//             count++
//         }

//     } while (number !==0);

//     return count;
// }

// let result = countNaturalNumber();
// console.log('Кол-во введенных натуральных чисел: ' + result)

//Функция - сумма от 1 до n

// function summa (n) {
//     let sum = 0;
//     for (let i = 1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(summa(100));

// {i} * 5 = {i*5}
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 =
// 4 * 5 = 
// 5 * 5 =
// 6 * 5 =


//Таблица умножения
function multiplyTable () {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * 5 = ${i*5}`);
    }
}

multiplyTable();

//Факториал - произведение чисел от 1 до N
//3! = 1*2*3
//4! = 1*2*3*4
//5! = 1*2*3*4*5

// function factorial (n) {
//     let result = 1;
//     for (let i = 1; i<=n; i++) {
//         result *= i; 
//         //1*2*3*4*5*...*n
//     }
//     return result;
// }

// console.log(factorial(5));




//Вложенные циклы - таблица умножения
//Используя вложенные циклы, выведите полную таблицу умножения от 1 до 10.
for (let i = 1; i <= 10; i++) { //повторение чего-то 10 раз
    for (let x = 1; x<=10; x++) { // вывод чисел от 1 до 10
        console.log(`${i} * ${x} = ${i*x}`);
    }
}

// (1-10) (1-10) = 

//1
//22
//333
//4444
for (let i = 1; i <= 5; i++) { //2
    //проход по строкам, количество строк
    let str = '';
    for (let x = 1; x <= i; x++) { //<=2
        str += i; //'2'
        //"" + 2 = '2'
        //'2' + 2 = '22'
    }
    console.log(str); //1
}
