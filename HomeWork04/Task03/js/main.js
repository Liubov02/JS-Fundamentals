//Task03

// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і 
// висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, 
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {

    
    if (typeof width !== "number" || typeof height !== "number" || isNaN(width) || isNaN(height)) {
        throw new Error ("Введіть числове значення.");
    }

    if (width <= 0 || height <= 0) {
        throw new Error ("Введіть число більше нуля.");
    }

    return (width * height) / 2;
    
}

    try {
    const width = 5;
    const height = 6;

    const result = calcRectangleArea(width, height);
    console.log(result);
    
    calcRectangleArea(-2, 5);
    calcRectangleArea(-2, 0);
    calcRectangleArea(f, 5);
    
    } 
    catch (error) {
        console.log("Сталася помилка: " + error.message);
    }




