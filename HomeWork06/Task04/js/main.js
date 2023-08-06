const inputElements = document.querySelectorAll('.arr');
const submitButton = document.querySelector('.btn');
const outputDiv = document.querySelector('.out');

function handleSubmitClick(event) {
    event.preventDefault();

    const formData = {};

    inputElements.forEach((inputElement) => {
        const fieldName = inputElement.getAttribute('data-form');
        const value = inputElement.value;
        formData[fieldName] = value;
      });

      let outputText = '';
  for (const [fieldName, value] of Object.entries(formData)) {
    outputText += `${fieldName}: ${value}\n`;
  }

  outputDiv.textContent = outputText;
}

submitButton.addEventListener('click', handleSubmitClick);