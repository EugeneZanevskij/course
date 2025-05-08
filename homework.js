function calculate (num1, operator, num2) {

}

function Calculator() {
    let num1 = Number(prompt("Введите первое число:"));
    let operator = prompt("Введите оператор (+, -, *, /, %, **):");
    let num2 = Number(prompt("Введите второе число:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        return "Ошибка: введите корректные числа!";
    }
    
    return calculate(num1, operator, num2);
}

let result = Calculator();
console.log(result);


function AgeCategory(age) {
    if (age < 0 || age > 120) {
        return "Ошибка: возраст должен быть от 0 до 120 лет";
    }  
    if (age < 7) {
        return "Дошкольник";
    } else if (age <= 17) {
        return "Школьник";
    } else if (age <= 23) {
        return "Студент";
    } else if (age <= 59) {
        return "Работающий";
    } else {
        return "Пенсионер";
    }
}

console.log(AgeCategory(6));
