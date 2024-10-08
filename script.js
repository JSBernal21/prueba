const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0FF33', '#FF33A1', '#FF8C33'];
const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
