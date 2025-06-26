let boxColor = document.querySelector('.box')

function changeColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    boxColor.style.backgroundColor = `rgb(${r},${g},${b})`
}

boxColor.addEventListener('click', changeColor);

let button = document.querySelector('.click-btn');
let countNumber = document.querySelector('.count');
let clicks = 0;

function count() {
    clicks++;
    countNumber.textContent = `Кількість кліків: ${clicks}`;
}

button.addEventListener('click', count);


let input = document.querySelector('.input');
let output = document.querySelector('.output');

input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const text = input.value;
            if (text !== '') {
                output.textContent = text;
                input.value = '';
            }
        }
    }
)

let boxAnimated = document.querySelector(".animated-box");
boxAnimated.addEventListener('mouseover', function () {
    boxAnimated.style.transform = 'translateX(100px)';
})

boxAnimated.addEventListener('mouseout', function () {
    boxAnimated.style.transform = 'translateX(0)';

})

let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
let smallFont = document.querySelector(".smaller-font")
smallFont.addEventListener('click', function () {
    currentSize -= 1
    document.body.style.fontSize = currentSize + 'px';
})

let bigFont = document.querySelector(".bigger-font")
bigFont.addEventListener('click', function () {
    currentSize += 1
    document.body.style.fontSize = currentSize + 'px';
})


document.querySelector(".dropdown-btn").addEventListener('click', function () {
    document.querySelector(".dropdown").classList.toggle("show");
})