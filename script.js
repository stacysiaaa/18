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



let ship=document.querySelector(".ship");
let rect = ship.getBoundingClientRect();

let topPos = rect.top + window.scrollY;
let leftPos = rect.left + window.scrollX;
let step = 20;

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            topPos -= step;
            ship.style.top = topPos + "px";
            break;
        case "ArrowDown":
            topPos += step;
            ship.style.top = topPos + "px";
            break;
        case "ArrowLeft":
            leftPos -= step;
            ship.style.left = leftPos + "px";
            break;
        case "ArrowRight":
            leftPos += step;
            ship.style.left = leftPos + "px";
            break;
        default:
            return;
    }
});



let galleryImages = document.querySelectorAll(".gallery img");
let fullscreen = document.querySelector(".fullscreen");
let fullscreenImg = document.querySelector(".fullscreen-img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        fullscreenImg.src = img.src;
        fullscreen.style.display = "flex";
    });
});

function closeFullscreen() {
    fullscreen.style.display = "none";
    fullscreenImg.src = "";
}

fullscreen.addEventListener("click", function(e) {
    if (e.target === fullscreen) {
        closeFullscreen();
    }
});
