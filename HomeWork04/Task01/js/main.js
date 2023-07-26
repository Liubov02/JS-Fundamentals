//Task01
  
//   Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – 
//   порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
//   Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину 
//   масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
  
  
  function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
      throw new Error("Перший аргумент має бути масивом.");
    }
  
    if (typeof first !== "number" || typeof second !== "number") {
      throw new Error("Другий та третій аргументи мають бути числами.");
    }
  
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
      throw new Error("Порядкові номери виходять за межі масиву.");
    }
  
    return arr[first] + arr[second];
  }
  
  try {
    const arr = [1, 2, 3, 4, 5, 6];
    const firstIndex = 2;
    const secondIndex = 4;
  
    const result = sumSliceArray(arr, firstIndex, secondIndex);
    console.log(result); // Виведе 8 (3 + 5)
  
    // Приклади обробки винятків
    sumSliceArray(123, 1, 2); // Викине помилку, оскільки перший аргумент має бути масивом
    sumSliceArray(arr, "a", 2); // Викине помилку, оскільки другий аргумент має бути числом
    sumSliceArray(arr, -1, 10); // Викине помилку, оскільки порядковий номер виходить за межі масиву
  } catch (error) {
    console.error("Сталася помилка:", error.message);
  }