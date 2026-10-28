class Item {
    constructor(name, price, addedToCart = false) {
        this.name = name;
        this.addedToCart = addedToCart;
    }
}

let products = new Item(4);

function addToCart() {
    let ul = document.body.getElementsByTagName("ul")[0];
    
}