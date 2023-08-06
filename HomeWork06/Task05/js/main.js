// Вибираємо всі елементи з класом "circle"
const circleElements = document.querySelectorAll('.circle');

// Перебираємо кожен елемент
circleElements.forEach((circleElement) => {
  // Отримуємо значення атрибута "data-anim"
  const dataAnimValue = circleElement.getAttribute('data-anim');
  
  // Додаємо значення атрибута "data-anim" як клас до елемента
  circleElement.classList.add(dataAnimValue);
});