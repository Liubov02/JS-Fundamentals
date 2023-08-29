/* Task01
На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), 
в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, 
сервер обробляє запит і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано в прикладі. */

const button = document.getElementById("btn");
button.addEventListener("click", () => {
    fetch("")                                         // ????
        .then(response => response.formData())
        .then(data => {
            button.innerHTML = data;
        })
        .catch(error => {
            console.log("Помилка запиту", error);
        });
});