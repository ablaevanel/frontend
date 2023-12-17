document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.item');
    var cart = document.getElementById('cart');
    var totalElement = document.getElementById('total');
    var total = 0;

    items.forEach(function (item) {
        item.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', item.dataset.price);
        });
    });

    cart.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    cart.addEventListener('drop', function (event) {
        var price = parseInt(event.dataTransfer.getData('text/plain'));


        total += price;
        totalElement.textContent = 'Итого: ' + total + ' P';

        var cartItem = document.createElement('div');
        cartItem.textContent = 'Товар - ' + price + ' P';
        cartItem.classList.add('item');
        cartItem.style.border = '1px solid #ccc';
        cartItem.style.padding = '10px';
        cartItem.style.margin = '5px';

        cart.appendChild(cartItem);
    });
});
