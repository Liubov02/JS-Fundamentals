//Task04

// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 
// Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number


//Оскільки ми класи ще не вчили, то я зробила без класу)


function showMonthName(month) {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    if (typeof month !== 'number' || month < 1 || month > 12) {
        throw new Error ("Incorrect month number");
    }

    return months[month -1];
   
}

    try {
        console.log(showMonthName(5));
        console.log(showMonthName(14));
    }
    catch (error) {
        console.log(error.name, error.message);
    }