console.log(1);

const button = document.querySelector('.hero__content-button');
console.log(button);

button.addEventListener("click", () => {
    console.log('click');
    button.style.display = "none";
});