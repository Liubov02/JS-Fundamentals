/* Task01
На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
     1) першого елемента списку
     2) останнього елемента списку
     3) другого елемента списку
     4) четвертого елемента списку
     5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3 */

function showElements() {
    const listItems = document.querySelectorAll("#list li");
    const firstElement = listItems[0].innerText;
    const lastElement = listItems[listItems.length - 1].innerText;
    const secondElement = listItems[1].innerText;
    const fourthElement = listItems[3].innerText;
    const thirdElement = listItems[2].innerText;


const result =
    "1) " + firstElement + "\n" +
    "2) " + lastElement + "\n" +
    "2) " + secondElement + "\n" +
    "2) " + fourthElement + "\n" +
    "2) " + thirdElement;

alert(result);    

}