const decreaseBtn = document.querySelector("#decrease");
const quentitySpan = document.querySelector("#quantity");
const increaseBtn = document.querySelector("#increase");
const addToCartBtn = document.querySelector("#addToCart")
let currentVal = 0;
quentitySpan.textContent = currentVal;
//increase
increaseBtn.addEventListener("click", () => {
    currentVal ++ ;
    quentitySpan.textContent = currentVal;
})
//decrease
decreaseBtn.addEventListener("click", () => {
    if (currentVal < 1) return;
    currentVal -- ;
    quentitySpan.textContent = currentVal;
})
addToCartBtn.addEventListener("click", () => {
    alert("Product added to cart!")
})