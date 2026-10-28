class Item {
    constructor(name, price, addedToCart = false) {
        this.name = name;
        this.addedToCart = addedToCart;
    }
}

let products = new Item(4);

function purchased() {
    let input = document.getElementById("textbar")
    let toPurchase = document.getElementById("text")

    toPurchase.innerHTML += "<div class `toDo` onclick=`this.classList.toggle(\"done\")'>" + input.value + "</div>";
    input.value= "";
}

