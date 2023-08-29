/* Task03
Використати сервіс 
https://randomuser.me/
Та при кожному завантаженні сторінки робити запит до API та рендерити базову інформацію про користувача 
(аватар, ім`я, вік, стать, країна, логін, пароль, пошта). */





        
document.addEventListener("DOMContentLoaded", () => {
    const avatarElement = document.getElementById("avatar");
    const userInfoElement = document.getElementById("userInfo");

fetch("https://randomuser.me/api/")
        .then(response => response.json()) // Парсити JSON-відповідь
        .then(data => {
            const user = data.results[0];

            // Оновити вміст сторінки з інформацією про користувача
            avatarElement.src = user.picture.large;
            userInfoElement.innerHTML = `
                <p><strong>Ім'я:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Вік:</strong> ${user.dob.age}</p>
                <p><strong>Стать:</strong> ${user.gender}</p>
                <p><strong>Країна:</strong> ${user.location.country}</p>
                <p><strong>Логін:</strong> ${user.login.username}</p>
                <p><strong>Пароль:</strong> ${user.login.password}</p>
                <p><strong>Пошта:</strong> ${user.email}</p>
            `;
        })
        .catch(error => {
            console.error("Помилка при отриманні даних користувача:", error);
        });
});