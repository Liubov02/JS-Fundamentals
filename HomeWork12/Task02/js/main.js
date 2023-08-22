/* Task02
Необхідно створити власний модуль personalmodule.js, який містить функцію,
 що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби 
 виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
        
 Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку: */

 const http = require("http");

 const personalModule = require("./personalmodule.js");

 const userName = "Liubov";

 const greeting = personalModule.getGreeting(userName);
 console.log(greeting);
