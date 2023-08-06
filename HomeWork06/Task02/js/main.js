/* Task02
Для сторінки
<body>
  <h1>I'am a big header!!!</h1>
  <div id="myDiv">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
    <p>Fourth paragraph</p>
  </div>
  <ul id="myList">
    <li>Make</li>
    <li>me</li>
    <li>horizontal!</li>
  </ul>
  <span>Make me invisible, please!</span>
</body>

Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці. */

const h1Element = document.querySelector("h1");
h1Element.style.fontSize = "32px";
h1Element.style.background = "lightgreen";

const pElement = document.getElementsByTagName("p");
pElement[0].style.fontWeight = "bold";
pElement[1].style.color = "red";
pElement[2].style.textDecoration = "underline";
pElement[3].style.fontStyle = "italic";

const ulElement = document.getElementById("myList");
    ulElement.style.display = "flex";
    ulElement.style.listStyle = "none";
    ulElement.style.padding = "0";
    ulElement.style.justifyContent = "space-between";
    ulElement.style.paddingLeft = "40px";

const liElements = ulElement.getElementsByTagName("li");
    let combinedText = "";
    for (let li of liElements) {
      combinedText += li.textContent + "";
      li.style.display = "none";
    }
const combinedLi = document.createElement("li");
combinedLi.textContent = combinedText;
ulElement.appendChild(combinedLi);


const spanElement = document.querySelector("span");
spanElement.style.display = "none";