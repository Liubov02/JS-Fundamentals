/* Task02
На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript), 
в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, 
завантажується файл books.json і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку. */

const loadAuthorsButton = document.getElementById("loadAuthorsButton");
const authorsList = document.getElementById("authorsList");

loadAuthorsButton.addEventListener("click", () => {
    fetch("")                                          //?????
    .then(response => response.json())
    .then(data => {
        authorsList.innerHTML = "";
        data.forEach(book => {
            const autorName = book.author;
            const listItem = document.createElement("li");
            listItem.textContent = autorName;
            authorsList.appendChild(listItem);
        })
    })
    .catch(error => {
        console.log("Помилка завантаження файлу:", error);
    });
});
