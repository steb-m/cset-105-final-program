class Item {
    constructor(name, price, addedToCart = false) {
        this.name = name;
        this.addedToCart = addedToCart;
    }
}

let products = new Item(4);

<<<<<<< HEAD
function addToCart() {
    let item = document.getElementById('text').textContent;
    let ul = document.getElementById("ul");
    let li = document.createElement('li');
    li.innerHTML = `${item}`
    
    
}
=======
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
>>>>>>> parent of 29fa61e (html page set up, working on javascript)
