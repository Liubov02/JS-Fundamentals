// Task01
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]



// function compact(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (!result.includes(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }
  
//   const arr = [5, 3, 4, 5, 6, 7, 3];
//   const arr2 = compact(arr);
//   console.log(arr2); // [5, 3, 4, 6, 7]




  

  // Task02
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
 
// початкове значення
// кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]


  // function createArray(start, end) {
  //     const array = [];
  //     for (let i = start; i <= end; i++) {
  //         array.push(i);
  //     }
  //     return array;
  // }


  // let array = createArray(2, 9);
  // console.log(array);

  
  


  // Task03
  // Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

  function printNumbersWithRepeats(a, b) {
    let repeats = 1;
  
    for (let num = a; num <= b; num++) {
      for (let i = 0; i < repeats; i++) {
        console.log(num);
      }
      repeats++;
    }
  }
  
  let a = 3;
  let b = 8;
  
  printNumbersWithRepeats(a, b);
 


// Task04
//    Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]


// function randArray(k) {
//   const array = [];
//   for(let i = 0; i < k; i++) {
//   const randomNumber = Math.floor(Math.random() * 500) + 1;
//   array.push(randomNumber);
//   }
//   return array;
// }
// const result = randArray(5);
// console.log(result);

// Task05
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
 /* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/


// function funcName(arr) {
//   const resultArrays = [[], []];
//   for (let item of arr) {
//     if(typeof item === "number" && !isNaN(item)) {
//       resultArrays[0].push(item);
//     } else {
//       resultArrays[1].push(item);
//     }
//     }
//   return resultArrays;
// }

// let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// let arrNew = funcName(arr);
// console.log(arrNew);

// Доробити!!!!
// function funcName(arr) {
//   const resultArrays = [[], []];

//   for (let item of arr) {
//     if (typeof item === "number" && !isNaN(item)) {
//       // Якщо елемент - число (не стрічка, яке представляє число), додати його в перший масив
//       resultArrays[0].push(item);
//     } else {
//       // Інакше додати елемент у другий масив
//       resultArrays[1].push(item);
//     }
//   }

//   return resultArrays;
// }

// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// let arrNew = funcName(arr);
// console.log(arrNew);


// Task06
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.


// function calc (a, b, op) {
//   let result;

//   switch(op) {
//     case 1:
//       result = a - b;
//       break;
//     case 2:
//       result = a * b;
//       break;
//     case 3:
//       if (b !== 0) {
//       result = a / b;}
//       break; 
//     default: 
//       result = a + b;
//       break;   
//   }
//   return result;
// }


// console.log(calc(7, 4, 1));
// console.log(calc(7, 4, 2));
// console.log(calc(7, 4, 3));
// console.log(calc(7, 4, 4));