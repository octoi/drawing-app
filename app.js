const canvas = document.querySelector('#canvas');

window.addEventListener('load', () => {
    const ctx = canvas.getContext('2d'); // setting context of canvas to 2d

    resize();
});

window.addEventListener('resize', resize); // resize when screen size changes

function resize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}