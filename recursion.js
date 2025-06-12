function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

pow(2, 3); // вернет 8

// function pow(2, 3) {
//   {
//     return 2 * pow(2, 2); // 2 * 4
//   }
// } // вернет 8

//вызывает

// function pow(2, 2) {
//   {
//     return 2 * pow(2, 1); // 2 * 2
//   }
// }  //вернет 4

//вызывает

// function pow(2, 1) {
//   if (1 == 1) {
//     return 2;
//   }
// }  //вернет 2

// факториал
// 5! = 5 * 4 * 3 * 2 * 1
// n! = 1 * 2 * 3 * ... * n

//1! = 1
//2! = 2 * 1 = 2 * 1!
//3! = 3 * 2 * 1 = 3 * 2!
//4! = 4 * 3 * 2 * 1 = 4 * 3!
//5! = 5 * 4 * 3 * 2 * 1 = 5 * 4!
//n! = n * (n-1) * (n-2) * ... * 1 = n * (n-1)!
function factorial (n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5);
// 5 * factorial(4); //5*24 = 120 - factorial(5)
// 4 * factorial(3); //4*6 = 24 - factorial(4)
// 3 * factorial(2); //3*2 = 6 - factorial(3)
// 2 * factorial(1); //2*1 = 2 - factorial(2)
// 1

//0! = 1
//1! = 1
//2! = 2 * 1 = 2 * 1! = 2
//3! = 3 * 2 * 1 = 3 * 2! = 6

//else {
  //   return x * pow(x, n - 1);
  // }

let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) { //name, age
  clone[key] = user[key];
  //1 - clone.name
  //2 - clone.age
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

// alert( user.name ); // все ещё John в первоначальном объекте


let result = {};

let data = {
  name: "Great",
  year: 2021,
  trend: "Jeans"
}
let data1 = {
  name: "wow",
  age: 4,
  money: false
}

const resultObject = Object.assign({}, data, data1);
console.log(resultObject)


// let dataCopy = Object.assign({}, data)
let dataCopy = { ...data } 
//{ name: "Great",
//  year: 2021,
//  trend: "Jeans" }
console.log("dataCopy", dataCopy)
console.log("data", data)


// {
//     "name": "wow",
//     "year": 2021,
//     "trend": "Jeans",
//     "age": 4,
//     "money": false
// }
// console.log(result);