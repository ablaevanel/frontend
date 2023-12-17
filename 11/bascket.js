const cartWrapper = document.querySelector('.backet__items');
const cartIcon = document.getElementById('cartIcon');
const cartIcon2 = document.getElementById('cartIconw');
const xmark = document.getElementById('xmark');
const shoppingCart = document.getElementById('shoppingCart');
const isEmptyMessage = document.getElementById('isEmpty');

// Показываем окно корзины при клике на иконку корзины
cartIcon.addEventListener('click', function() {
    shoppingCart.style.display = 'block';
});

// Скрываем окно корзины при клике на иконку "X"
xmark.addEventListener('click', function() {
    shoppingCart.style.display = 'none';
});

eraser.addEventListener('click', function() {
    const cartItems = cartWrapper.querySelectorAll('.bascket__item');
    let totalCost = 0;
    let cart = [];

    cartItems.forEach(item => {
        item.remove();
        checkEmptyCart();
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));

    const finalCostElement = document.getElementById('final__cost');
    finalCostElement.innerText = `Сумма товаров: ${totalCost.toLocaleString('ru-RU')} RUB`;
});

// Функция для проверки пустоты корзины и отображения сообщения
function checkEmptyCart() {
    const cartItems = cartWrapper.querySelectorAll('.bascket__item');
    if (cartItems.length === 0) {
        isEmptyMessage.style.display = 'block';
    } else {
        isEmptyMessage.style.display = 'none';
    }
}

window.addEventListener('click', function(event){
    if(event.target.hasAttribute('data-cart')){
        isEmptyMessage.style.display = 'none';

        const card = event.target.closest('.card2');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.card2__img').getAttribute('src'),
            title: card.querySelector('.card__title').innerText,
            price: parseInt(card.querySelector('.card__price').innerText.replace(/[^\d.]/g, '')).toLocaleString('ru-RU'),
        }

        const existingCartItem = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        
        if (existingCartItem) {
            // Если товар уже есть в корзине, увеличиваем счетчик
            const numElement = existingCartItem.querySelector('#bascket__product_num');
            console.log(numElement);
            let currentValue = parseInt(numElement.innerText);
            currentValue++;
            numElement.innerText = currentValue;
        } else {
            // Если товара нет в корзине, добавляем новый элемент
            const cartItemHTML = `
            <div class="bascket__item" data-id="${productInfo.id}"> 
                <img src="${productInfo.imgSrc}" alt="img" class="basket__product_img">
                <div class="bascket__name__size">
                    <p id="bascket__product_name">${productInfo.title}</p>   
                </div>

                <div class="bascket__price_num">
                            <p id="bascket__product_cost">${productInfo.price} RUB</p>
                            <div class="bascket__num">
                                <p id="bascket__product_num1">Количество:</p>
                                <div class="num__ch">
                                    <p class="plus_minus" id="bascket__product_-">-</p>
                                    <p id="bascket__product_num">1</p>
                                    <p class="plus_minus" id="bascket__product_+">+</p>
                                </div>
                            </div>    
                        </div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
        `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML );
        }
    }
    updateTotalCost();
});

// Слушатель событий для удаления товара из корзины
cartWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-trash-can')) {
        const selectedItem = event.target.closest('.bascket__item');
        selectedItem.remove();
        checkEmptyCart(); // Проверяем пустоту корзины после удаления элемента
    }
});

// Добавляем обработчик событий для изменения количества товара при клике на кнопки "+" и "-"
cartWrapper.addEventListener('click', function(event) {
    if (event.target.classList.contains('plus_minus')) {
        const currentItem = event.target.parentElement;
        const numElement = currentItem.querySelector('#bascket__product_num');
        let currentValue = parseInt(numElement.innerText);

        if (event.target.id === 'bascket__product_+') {
            // Если нажата кнопка "+", увеличиваем количество товара
            currentValue++;
        } else if (event.target.id === 'bascket__product_-') {
            // Если нажата кнопка "-", уменьшаем количество товара, но не менее 1
            currentValue = Math.max(1, currentValue - 1);
        }

        // Обновляем значение количества товара
        numElement.innerText = currentValue;
    }
});

// Обновленная функция updateTotalCost для сохранения состояния корзины в localStorage
function updateTotalCost() {
    const cartItems = cartWrapper.querySelectorAll('.bascket__item');
    let totalCost = 0;
    let cart = [];

    cartItems.forEach(item => {
        const priceElement = item.querySelector('#bascket__product_cost');
        const numElement = item.querySelector('#bascket__product_num');
        const nameElement = item.querySelector('#bascket__product_name');
        const imgElement = item.querySelector('.basket__product_img');
        const id = item.getAttribute('data-id');

        const price = parseInt(priceElement.innerText.replace(/[^\d.]/g, ''));
        const quantity = parseInt(numElement.innerText);
        const title = nameElement.innerText;
        const imgSrc = imgElement.getAttribute('src');

        totalCost += price * quantity;

        cart.push({
            id: id,
            price: price,
            quantity: quantity,
            title: title,
            imgSrc: imgSrc
        });
    });

    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    const finalCostElement = document.getElementById('final__cost');
    finalCostElement.innerText = `Сумма товаров: ${totalCost.toLocaleString('ru-RU')} RUB`;
}


// Функция для загрузки корзины при загрузке страницы
window.addEventListener('DOMContentLoaded', function() {
    // Пытаемся получить корзину из localStorage
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {
        const cartItems = JSON.parse(savedCart);

        cartItems.forEach(item => {
            const cartItemHTML = `
            <div class="bascket__item" data-id="${item.id}"> 
                <img src="${item.imgSrc}" alt="img" class="basket__product_img">
                <div class="bascket__name__size">
                    <p id="bascket__product_name">${item.title}</p>
                </div>

                <div class="bascket__price_num">
                    <p id="bascket__product_cost">${item.price} RUB</p>
                    <div class="bascket__num">
                        <p id="bascket__product_num1">Количество:</p>
                        <div class="num__ch">
                            <p class="plus_minus" id="bascket__product_-">-</p>
                            <p id="bascket__product_num">${item.quantity}</p>
                            <p class="plus_minus" id="bascket__product_+">+</p>
                        </div>
                    </div>    
                </div>
                <i class="fa-regular fa-trash-can"></i>
            </div>
            `;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

            // Устанавливаем количество и размер товара
            const currentItem = cartWrapper.querySelector(`[data-id="${item.id}"]`);
            currentItem.querySelector('#bascket__product_cost').innerText = `${item.price} RUB`;
            currentItem.querySelector('#bascket__product_num').innerText = item.quantity;
        });

        updateTotalCost(); // Обновляем общую стоимость
        checkEmptyCart();
    }
});