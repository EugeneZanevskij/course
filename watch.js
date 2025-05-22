// console.log(1);

// const button = document.querySelector('.hero__content-button');
// console.log(button);

// button.addEventListener("click", () => {
//     console.log('click');
//     button.style.display = "none";
// });

const button = document.querySelector('.hero__content-button');

button.addEventListener('click', () => {
    button.classList.toggle("hero__content-button--secondary");
    addListItem(prompt("Введи текст"));
});

// const element = document.createElement('p');
// element.textContent = "Hiiiiiiiii";
// element.className = "header-3";
// console.log(element);

// document.body.appendChild(element);

// const list = document.querySelector('.abilities__list');
// list.appendChild(element);
const list = document.querySelector('.abilities__list');

function addListItem(text) {
    const element = document.createElement('p');
    element.textContent = text;
    element.className = "header-3";
    list.appendChild(element);
}


const numbers = document.querySelectorAll('.abilities__list-item-number');
console.log(numbers);

numbers.forEach((number, index) => {
    number.addEventListener("click", () => {
        number.classList.toggle('abilities__list-item-number--secondary');
        console.log(+number.textContent.trim() + 1);
        number.textContent = +number.textContent.trim() + 1;
    });
})