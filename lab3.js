let quantity = 0;

function showQuantity() {
    document.getElementById("quantity").textContent = quantity;
}


function increment() {
    quantity++;
    showQuantity();
}

function plusTwo() {
    quantity += 2;
    showQuantity();
}

function plusThree() {
    quantity += 3;
    showQuantity();
}

function resetCart() {
    quantity = 0;
    showQuantity();
}

document.getElementById("1").addEventListener("click", showQuantity);
document.getElementById("2").addEventListener("click", increment);
document.getElementById("3").addEventListener("click", plusTwo);
document.getElementById("4").addEventListener("click", plusThree);
document.getElementById("5").addEventListener("click", resetCart);