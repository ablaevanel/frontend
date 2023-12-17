function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", () => {
    const button2 = document.querySelector('.button2');
    button2.addEventListener("click", () => {
        button2.style.background = getRandomColor()
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.button');
    button.addEventListener("click", (event) => {
        const elem = event.target;
        elem.classList.add('click');
        setTimeout(function() {
            elem.classList.remove('click');
        }, 400);
    });
});