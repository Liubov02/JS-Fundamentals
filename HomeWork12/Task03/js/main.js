/* Task03
Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, 
а потім зчитує цей файл та виводить вміст на екран.

Кроки:
Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile().
Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу. */

const http = require('http');
const fs = require('fs');
const url = require('url');

const filePath = "data.txt";

function writeToTextFile(data) {
    fs.writeFile(filePath, data, (err) => {
        if(err) {
            console.log("Помилка при записі в файл", err);
            return;
        }
        console.log("Інформацію записано у файл успішно", filePath);
    });
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/write') {
        // Обробка запиту для запису інформації в файл
        const inputData = parsedUrl.query.data || '';
        writeToTextFile(inputData);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Інформацію успішно записано в файл');
        res.end();
    }else if (parsedUrl.pathname === '/read') {
        // Обробка запиту для зчитування інформації з файлу
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Помилка при зчитуванні з файлу:', err);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.write('Виникла помилка при зчитуванні з файлу');
                res.end();
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        });
    } else {
        // Обробка інших запитів
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('Сторінку не знайдено');
        res.end();
    }
}).listen(5000);

// const port = 5000;

// Запуск сервера
// server.listen(port, () => {
    console.log("Server is listening on port http://localhost:5000");
// });





