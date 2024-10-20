let counterValue = 0;

const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', () => {
    counterValue = counterValue + 1;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    counterValue = counterValue - 1;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counterValue;
}
