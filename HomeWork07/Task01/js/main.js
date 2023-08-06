/* Task01
За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно. */

       function openWindow() {
        const newWindow = window.open('', '', 'width=300,height=300');

        setTimeout(() => {
            newWindow.resizeTo(500, 500);
        }, 2000);

        setTimeout(() => {
            newWindow.moveTo(200, 200);
        }, 4000);

        setTimeout(() => {
            newWindow.close(500, 500);
        }, 6000);
       } 

