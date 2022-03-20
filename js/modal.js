const modalButton = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay'); // мы можем искать эл-т не только во всем документе, но и в любом блоке
const closeButton = document.querySelector('.modal__close');


modalButton.forEach((i) => { 
    i.addEventListener('click', (event) => { 
        modal.classList.remove('hidden');
    });
});

overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});