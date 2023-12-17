document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('list');

    list.addEventListener('click', function (event) {
        event.preventDefault();

        var isCtrlPressed = event.ctrlKey || event.metaKey;

        if (isCtrlPressed) {
            event.target.classList.toggle('selected');
        } else {
            var items = list.getElementsByTagName('li');
            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove('selected');
            }

            event.target.classList.add('selected');
        }
    });
});
