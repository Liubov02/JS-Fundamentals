//Task02
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач)
// та генерує модальне вікно з помилкою, якщо: вік користувача менше 18 або більше 70 років (генерується помилка типу 
// RangeError).
// Користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! 
// Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
// В полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. 
// У блоці catch передбачена можливість виведення назви та опису помилки.


function checkAge() {
    try{
        const name = prompt("Введіть своє ім'я:");
        const age = prompt("Введіть свій вік:");
        const status = prompt("Введіть свій статус (адмін, модератор, користувач):");

    if (age < 18 || age > 70) {
        throw new RangeError ("Age is not valid!");
    }

    if (!name || !age || !status) {
        throw new Error ("The field is empty! Please enter your details!");
    }

    if (status !== 'адмін' && status !== 'модератор' && status !== 'користувач') {
        throw new EvalError ("Wrong word!");
    }

    if (isNaN(age)) {
        throw new EvalError ("Non-numeric value!");
    }

    
        alert("Ви можете переглядати фільм");

    } catch (error) {
        alert("Сталася помилка:" + error.message);

    }
}

 checkAge();
