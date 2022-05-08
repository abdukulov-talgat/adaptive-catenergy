const beforeBox = document.querySelector('.demo__inner--after');
const toggler = document.querySelector('.demo__toggler');


toggler.addEventListener('click', () => {
    toggler.classList.toggle('demo__toggler--after');

    beforeBox.style.width =
        beforeBox.style.width === '0%' ? '100%' : '0%';
})


