class Item {
    constructor(name, addedToCart = false) {
        this.name = name;
        this.addedToCart = addedToCart;
    }
}

let products = []
let i = 0;
let strikethrough = 0;

function addToCart() {
    const textElement = document.getElementById('text');
    const ul = document.getElementById('ul');
    if (!textElement || !ul) return;

    const item = textElement.value.trim();
    if (!item) return;

    console.log(item);
    let li = document.createElement('li');

    // this is all styles;
    li.style.cursor = 'pointer';
    li.style.fontSize = "200%"; 
    li.style.fontFamily = "Chewy"; 
    li.style.fontWeight = 50;

    // add click event listener
    li.addEventListener('click', (event) => {
        if (strikethrough == 0) {
            strikethrough++;
            event.target.style.textDecoration = 'line-through';
        } else {
            strikethrough--;
            event.target.style.textDecoration = 'none';
        }
    })

    // add new li to html
    li.textContent = item;
    ul.appendChild(li);
    let newProduct = new Item(item, true)
    products.push(newProduct);
}

function showPurchased() {
    let newUL = document.createElement('ul')
    for (const item of products) {
        if (item.addedToCart) {
            newUL.innerHTML += `<li>${item.name}</li>`
        }
    }

    let ul = document.getElementById('div').getElementsByTagName('ul')[0];
    ul.remove();
    ul.appendChild(newUL);

}

function showNotPurchased() {
    let newUL = document.createElement('ul')
    for (const item of products) {
        if (!item.addedToCart) {
            newUL.innerHTML += `<li>${item.name}</li>`
        }
    }

    let ul = document.getElementById('div').getElementsByTagName('ul')[0];
    ul.remove();
    ul.appendChild(newUL);

}
