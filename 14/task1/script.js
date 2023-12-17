function isAncestorAnchor(element) {
    if (!element) {
        return false;
    }

    if (element.tagName === 'A') {
        return true;
    }

    return isAncestorAnchor(element.parentNode);
}

document.getElementById('contents').addEventListener('click', function (event) {

    if (isAncestorAnchor(event.target)) {
        var userConfirmation = confirm('Вы действительно хотите покинуть страницу?');

        if (!userConfirmation) {
            event.preventDefault();
        }
    }
});
