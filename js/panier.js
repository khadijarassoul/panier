const items = document.querySelectorAll('.item');
const total = document.querySelector('.total p');

let totalPrice = 0;

items.forEach(item => {
    const quantityInput = item.querySelector('.quantity-input');
    const price = item.querySelector('.price').textContent.replace('$', '');

    item.querySelector('.plus-btn').addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantityInput.value = ++quantity;
        updateTotal(price);
    });

    item.querySelector('.minus-btn').addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            quantityInput.value = --quantity;
            updateTotal(-price);
        }
    });

    item.querySelector('.remove-btn').addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            item.remove();
            updateTotal(-price * quantity);
        }
    });
});

function updateTotal(price) {
    totalPrice += price;
    total.textContent = `Total : $${totalPrice}`;
}
