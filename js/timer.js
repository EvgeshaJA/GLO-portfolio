// Таймер обычный

/*
const  timerBlock = document.querySelector('.timer__time');

function updateClock() {
    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),

        fhours = hours < 10 ? '0' + hours : hours,
        fminutes = minutes < 10 ? '0' + minutes : minutes,
        fseconds = seconds < 10 ? '0' + seconds : seconds; // чтобы добавить 0 перед цифрой, создаем условия


    timerBlock.textContent = `${fhours} : ${fminutes} : ${fseconds}`;
}

updateClock(); // вызвали ф-цию, теперь нужно, чтобы данные обновлялись каждую секунду самостоятельно

setInterval(() => {
    updateClock(); // перенесли сюда ф-цию, чтобы каждую секунду она себя обновляла
}, 500); // = лучше ставить 0,5 сек, а не 1 сек, т.к. могут быть трудности с визуализацией

*/

// Таймер обратный

const  timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';
let interval;


const updateClock = () => {
    const date = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000; // делим на 1 секунду
    
    const hours = Math.floor(timeRemaining / 60 / 60); // перевели в часы и округлили
    const minutes = Math.floor((timeRemaining / 60) % 60); // используя оператор "остаток от деления" убрали часы
    const seconds = Math.floor(timeRemaining % 60); 

    const   fhours = hours < 10 ? '0' + hours : hours,
            fminutes = minutes < 10 ? '0' + minutes : minutes,
            fseconds = seconds < 10 ? '0' + seconds : seconds; 


    timerBlock.textContent = `${fhours} : ${fminutes} : ${fseconds}`;

    if (timeRemaining <= 0) {
        clearInterval(interval); // условие позволит избежать отсчета с отрицательным значением
        timerBlock.textContent = `00 : 00 : 00`;
    }
};

updateClock();

interval = setInterval(updateClock, 500);





