class Item {
    constructor(name, price, addedToCart = false) {
        this.name = name;
        this.addedToCart = addedToCart;
    }
}

let products = new Item(4);

function purchase() {
    let cartContainer = document.getElementById('cartItems');
    if (cartContainer.children.length === 0) {
        alert('Your cart is empty');
        return;
    }
    alert('Thank you for your purchase!');
    cartContainer.innerHTML = '';
    updateTotal();
}