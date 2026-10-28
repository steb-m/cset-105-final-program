class Item {
    constructor(name, purchased = false) {
        this.name = name;
        this.purchased = purchased;
    }
}

const products = [];

function addToCart() {
    const textElement = document.getElementById('text');
    const ul = document.getElementById('ul');
    if (!textElement || !ul) return;

    let itemName = textElement.value.trim();
    if (!itemName) return;

    let product = new Item(itemName, false);
    products.push(product);

    let li = addClickEvent(product);

    ul.appendChild(li);
    textElement.value = '';
    textElement.focus();
}

function addClickEvent(product) {
    let item = document.createElement('li');
    item.textContent = product.name;
    item.style.cursor = 'pointer';
    item.style.fontSize = '200%';
    item.style.fontFamily = 'Chewy';
    if (product.purchased) {
        item.style.textDecoration = 'line-through';
    }

    item.addEventListener('click', () => {
        product.purchased = !product.purchased;
        item.style.textDecoration = product.purchased ? 'line-through' : 'none';
    });
    return item;
}

function renderList(isPurchased) {
    const container = document.getElementById('list-container');
    if (!container) return;

    let newUL = document.createElement('ul');
    newUL.id = 'ul';

    if (products.length === 0) {
        let msg = document.createElement('li');
        msg.textContent = 'No items in products!';
        msg.style.fontFamily = 'Chewy';
        msg.style.fontSize = '200%';
        newUL.appendChild(msg);
        container.innerHTML = '';
        container.appendChild(newUL);
        return;
    }

    const filtered = products.filter(item => item.purchased === isPurchased);

    filtered.forEach(item => {
        let li = addClickEvent(item);
        newUL.appendChild(li);
    });

    container.innerHTML = '';
    container.appendChild(newUL);
}

function clearList() {    
    const ul = document.getElementById('ul');
    if (ul) {
        ul.innerHTML = '';
    } else {
        const container = document.getElementById('list-container');
        if (container) container.innerHTML = '<ul id="ul"></ul>';
    }
}