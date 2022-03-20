const accordeon = document.querySelector('.feature__list');
const accordeonButtons = document.querySelectorAll('.feature__link');

accordeonButtons.forEach((i) => {
    i.addEventListener('click', () => {
        accordeonButtons.forEach((buttons) => {
            buttons.classList.remove('feature__link_active');
            buttons.nextElementSibling.classList.add('hidden'); // метод позволяет открывать следующий по списк блок    
        });

        i.classList.toggle('feature__link_active');
        i.nextElementSibling.classList.toggle('hidden');     
    });

});

