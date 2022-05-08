const boxAfter = document.querySelector('.demo__inner--after');



const toggler = document.querySelector('.demo__toggler');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('demo__toggler--after');

    boxAfter.style.width =
        boxAfter.style.width === '0%' ? setOffset(100) : setOffset(0);
});



const btnBefore = document.querySelector('.demo__label--before');
const btnAfter = document.querySelector('.demo__label--after');

btnBefore.addEventListener('click', () => {
    setOffset(0);
});

btnAfter.addEventListener('click', () => {
    setOffset(100);
});



const handler = document.querySelector('.slider__handler');
const slider = document.querySelector('.slider__indicator');
const STEP = 1;
const mouseSmoothing = 0.20;


handler.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', onMouseMove);
});

document.addEventListener('mouseup', (evt) => {
    document.removeEventListener('mousemove', onMouseMove);
});



handler.addEventListener('keydown', (evt) => {
    switch (evt.key.toLowerCase()) {
        case 'arrowleft':
            move(-STEP);
            evt.preventDefault();
            break;
        case 'arrowright':
            move(STEP);
            evt.preventDefault();
            break;
    }
});

function onMouseMove(evt){
    move(evt.movementX * mouseSmoothing);
}

function move(value) {
    let current = Number.parseFloat(boxAfter.style.width);
    current = Math.max(Math.min(current + value, 100), 0);
    setOffset(current);
}



function setOffset(value) {
    boxAfter.style.width = value + '%';
    slider.style.width = value + '%';
}
