const $carousel = document.getElementById('carousel');
const $cells = Array.from($carousel.children);
const $btns = document.getElementById('carousel-btns');
const degY = 360 / $cells.length;
const widScene = document.getElementById('carousel-scene').offsetWidth;
const tz = Math.round(
    (widScene / 2) /
    Math.tan(Math.PI / $cells.length)
);
let selectedIndex = 0;
const posX = {
    start: null,
    end: null
}

$cells.forEach(($cell, idx) => {
    const DEG = idx * degY;
    $cell.style.transform = `rotateY(-${idx * degY}deg) translateZ(-${tz}px)`;
});

$btns.addEventListener('click', e => {
    const direct = e.target.dataset.direct;
    if (!direct) return;
    rotate_carousel(direct);
});


$carousel.addEventListener('mousedown', (e) => {
    posX.start = e.clientX;
    $carousel.style.cursor = "grabbing";
});

$carousel.addEventListener('mouseup', (e) => {
    posX.end = e.clientX;
    const direct = posX.start - posX.end < 0 ? "prev" : "next";
    rotate_carousel(direct);
    $carousel.style.cursor = "grab";
});

function rotate_carousel(direct) {
    selectedIndex = direct == "prev" ? selectedIndex - 1 : selectedIndex + 1;
    const angle = degY * selectedIndex;
    $carousel.style.transform = `translateZ(1000px) rotateY(${angle}deg)`;
}//rotate_carousel