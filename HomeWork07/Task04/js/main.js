/* Task 04
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
Можуть видалятися всі елементи в будь-якому порядку. */

const dropdownList = document.getElementById("dropdownList");
const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", () => {
    const selectedOption = dropdownList.options[dropdownList.selectedIndex];
    if(selectedOption) {
        dropdownList.removeChild(selectedOption);
    }
});