/* Task05
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!". */

const button = document.getElementById("myButton");
const messageDiv = document.getElementById("message");

button.addEventListener("click", () => {
    messageDiv.textContent = "I was pressed!"
});

button.addEventListener("mouseover", () => {
    messageDiv.textContent = "Mouse on me!"
});

button.addEventListener("mouseout", () => {
    messageDiv.textContent = "Mouse is not on me!"
});