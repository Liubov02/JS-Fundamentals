/* Task06
Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.*/

const windowSizeElement = document.getElementById("windowSize");


function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const windowSize = `Width: ${width}px, Height: ${height}px`;

    windowSizeElement.textContent = windowSize;
    
}

updateWindowSize();

window.addEventListener("resize", updateWindowSize);