 // Task06
 //Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.

const colorPriceMap = {
    blue: 170,
    red: 570,
    green: 190,
    orange: 270,
    black: 110,
  };

  const colorElements = document.querySelectorAll('.color');
colorElements.forEach(colorElement => {
  colorElement.addEventListener('click', () => {
    // Отримуємо колір з атрибуту color
    const selectedColor = colorElement.getAttribute('color');
    
    // Отримуємо вартість для обраного кольору з об'єкта colorPriceMap
    const price = colorPriceMap[selectedColor];
    
    // Оновляємо ціну на сторінці залежно від обраного кольору
    const priceElement = document.getElementById('outprice');
    priceElement.textContent = price.toFixed(2); // Використовуємо метод toFixed для відображення двох знаків після коми
  });
});