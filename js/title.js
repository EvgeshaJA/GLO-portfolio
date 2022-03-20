// Поменять title


let titleChanger = function(e) {
    document.title = e.target.innerHTML;
};

Array.prototype.forEach.call(buttons, function(el) {
    el.onclick = titleChanger;
});

