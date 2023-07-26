// Task05

// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, 
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, 
// в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, 
// де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]


function showUser(id) {

    if (id < 0) {
        throw new Error ("ID must not be negative: " + id);
    }

    return {id}
}

function showUsers(ids) {

    const validUsers = [];

    for (const id of ids) {
        try {
          validUsers.push(showUser(id));
        } catch (error) {
          console.error(error.message);
        }
    } 
    
    return validUsers; 
}

const result = showUsers([7, -12, 44, 22]);
console.log(result);