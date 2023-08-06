/* Task03 Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з 
відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку. */


const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3"); 
const link = document.getElementById("link");

button1.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
})

button2.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "pink";
})

button3.addEventListener("mousedown", () => {
    document.body.style.backgroundColor = "brown";
})

button3.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
})

link.addEventListener("onmouseover", () => {
    document.body.style.backgroundColor = "yellow";
})
        
link.addEventListener("onmouseout", () => {
    document.body.style.backgroundColor = "white";
})