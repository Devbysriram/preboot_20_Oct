const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
const button = document.getElementById('flipButton');

button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
