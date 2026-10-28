class Item {
    constructor(name, price, addedToCart = false) {
        this.name = name;
        this.addedToCart = addedToCart;
    }
}

let products = new Item(4);

function addToCart() {
    let item = document.getElementById('text').textContent;
    let ul = document.getElementById("ul");
    let li = document.createElement('li');
    li.innerHTML = `${item}`
    
    
}
