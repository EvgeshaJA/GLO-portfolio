// Поменять title

let titleChanger = function(e) {   // e - обозначает event, событие
    const title = e.target.getAttribute('data-title'); // при клике на target (цель) получаем атрибут и его значение 
    document.title = title; // элемент со страницы равен назначенной мною переменной
};


Array.prototype.forEach.call(buttons, function(el) {
    el.onclick = titleChanger;
});



