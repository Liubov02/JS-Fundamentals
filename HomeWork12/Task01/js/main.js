/* Task01
Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, 
що містить ім’я поточного користувача операційної системи, тип операційної системи, 
час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path). */


const http = require("http");
const os = require("os");
const path = require("path");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const userInfo = os.userInfo();
    const osType = os.type();
    const upTimeInMinutes = Math.floor(os.uptime() / 60);
    const currentDirectory = process.cwd();
    const serverFileName = path.basename(__filename);

    res.write(`<h1>System Information</h1>`);
    res.write(`<p>User: ${userInfo.username}</p>`);
    res.write(`<p>OS Type: ${osType}</p>`);
    res.write(`<p>Uptime (minutes): ${upTimeInMinutes}</p>`);
    res.write(`<p>Current Directory: ${currentDirectory}</p>`);
    res.write(`<p>Server File Name: ${serverFileName}</p>`);

    res.end();
}).listen(5000);


    console.log("Server is listening on port http://localhost:5000");
