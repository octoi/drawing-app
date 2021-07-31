const canvas = document.querySelector('canvas');

window.addEventListener('load', () => {
    const ctx = canvas.getContext('2d'); // setting context of canvas to 2d

    resize(); // resize 

    let painting = false; // variable that track painting

    // listeners

    function startPosition() {
        painting = true;
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
});

window.addEventListener('resize', resize); // resize when screen size changes

function resize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}