const canvas = document.querySelector('canvas');

window.addEventListener('load', () => {
    const ctx = canvas.getContext('2d'); // setting context of canvas to 2d

    resize(); // resize 

    let painting = false; // variable that track painting
    let color = '#1ABC9C';

    document.querySelectorAll('button', addEventListener('click', (e) => {
        color = e.target.getAttribute("data-color");
    }));

    function startPosition(e) {
        painting = true;
        draw(e)
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = 8;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = color;
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