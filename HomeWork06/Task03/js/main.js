/* Task03
Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */

const bodyElement = document.querySelector("body");
const mainElement = document.createElement("main");
const divElement = document.createElement("div");
const pElement = document.createElement("p");
const pText = document.createTextNode("First paragraph");


mainElement.className = "mainClass check item";
divElement.id = "myDiv";


bodyElement.appendChild(mainElement);
mainElement.appendChild(divElement);
divElement.appendChild(pElement);
pElement.appendChild(pText);

bodyElement.prepend(mainElement);
