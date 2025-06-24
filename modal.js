const openButton = document.querySelector('.hero__content-button');
const modal = document.querySelector(".modal");

openButton.addEventListener("click", (event) => {
    modal.classList.remove('modal--hidden');
});

const closeButton = document.querySelector('.modal__close');

closeButton.addEventListener("click", (event) => {
    modal.classList.add('modal--hidden');
});

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        modal.classList.add('modal--hidden');
    }
})