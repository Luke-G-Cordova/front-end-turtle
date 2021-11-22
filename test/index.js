

const turtle = new Turtle({
    x: 100,
    y: 100
});

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

setInterval(() => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    turtle.moveInDirection(300);
    turtle.drawOnCanvas(ctx);

    
}, 50);


