const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const mainScroll = document.querySelector('.main__scroll');

const allLinks = [...links, btn, mainScroll]; // спред оператор, благодаря которому мы к ссылкам добавили кнопку. Теперь при клике на кнопку также происходит плавный скролл

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // отменили стандартное поведение ссылок
        
        const id = link.getAttribute("href").substring(1); // метод substring  удаляет первый символ - #
        const section = document.getElementById(id);

        if(section) {
            /*
            section.scrollIntoView({  // встроенный метод, который не работает на IOS
                block: 'start',   // свойство метода, согласно которуму скролл будет осуществляться до начала нужного блока
                behavior: 'smooth'  // плавный скролл
            });
            */

            seamless.scrollIntoView(section, {   // обеспечивает плавный скролл для всех устройств
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    });
});