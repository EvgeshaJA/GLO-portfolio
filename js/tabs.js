"use strict";

const buttons = document.querySelectorAll('.design-list__item');
const buttonsDescr = document.querySelectorAll('.design__descr');
const images = document.querySelectorAll('.design-images');
const titles = document.querySelectorAll('.design__title');
const bigImgs = document.querySelectorAll('.feature__img');


// Способ 1. Завязка на индексах. МИнус этого метода заключается в том, что если поменять контент местами, то будут отображаться не те блоки.
/*
buttons.forEach((i, index) => {  // index - это будет порядковый номр элемента
    i.addEventListener('click', (event) => { 

        buttonsDescr.forEach((descr, indexDesrc) => {
            if(index === indexDesrc) {
                descr.classList.remove('hidden');
            }else {
                descr.classList.add('hidden');
            }
        }); // descr тоже самое, что и i

        images.forEach((img, indexImg) => {
            if(index === indexImg) {
                img.classList.remove('hidden');
            }else {
                img.classList.add('hidden');
            }
        });

        buttons.forEach((btn) => {
            if (btn === event.target) { // event.target позволяет перхватить элемент, на который нажал пользователь (можно использовать для любых обработчиков событий, даже фокусировки на элементе).
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
    });
    });
});
*/

// Способ 2. Через дата атрибуты. Это юлдее надежно, так как вывод нужных данных будет привязан к дата-атребуту, а не порядковому номеру в массиве
/*
buttons.forEach((i, index) => {  // index - это будет порядковый номр элемента
    i.addEventListener('click', (event) => { 
        const dataValue = i.dataset.tabsHandler; // tabsHandler берем из html, заменяя дефис на горбатый стиль, слово data обработчик заменяет сам

        buttonsDescr.forEach((descr) => {
            if(descr.dataset.tabsField === dataValue) { // tabsField - привязка нужного блока из html по дата-атребуту, а в значении атрибута указываются нужные связки body, interior
                descr.classList.remove('hidden');
            }else {
                descr.classList.add('hidden');
            }
        }); // descr тоже самое, что и i

        images.forEach((img) => {
            if(img.dataset.tabsField === dataValue) {
                img.classList.remove('hidden');
            }else {
                img.classList.add('hidden');
            }
        });

        buttons.forEach((btn) => {
            if (btn === event.target) { // event.target позволяет перхватить элемент, на который нажал пользователь (можно использовать для любых обработчиков событий, даже фокусировки на элементе).
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
    });
    });
});
*/

// Способ 3. Чтобы не повторять однотипные действия, делаем функцию сравнивания дата-атрибутов

const changeContent = (array, value) => {
    array.forEach((element) => {
        if(element.dataset.tabsField === value) {
            element.classList.remove('hidden');
        }else {
            element.classList.add('hidden');
        }
    });
};


buttons.forEach((i) => { 
    i.addEventListener('click', (event) => { 
        const dataValue = i.dataset.tabsHandler;

        changeContent(buttonsDescr, dataValue);
        changeContent(images, dataValue);
        changeContent(titles, dataValue);
        changeContent(bigImgs, dataValue);

        buttons.forEach((btn) => {
            if (btn === event.target) { // event.target позволяет перхватить элемент, на который нажал пользователь (можно использовать для любых обработчиков событий, даже фокусировки на элементе).
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
    });
    });
});


