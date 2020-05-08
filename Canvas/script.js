window.onload = function () {
    var canvas = document.getElementById('canvas');
   
    var ctx = canvas.getContext('2d');

    ctx.fillRect(30, 30, 740, 740);
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.clearRect(50,50,700,700);

    ctx.fillRect(100, 100, 600, 600);
    ctx.fillStyle = 'orange';
    ctx.clearRect(120,120,560,560);
    
    ctx.fillRect(170, 170, 460, 460);
    ctx.fillStyle = 'orange';
    ctx.globalAlpha = 0.3;


    ctx.beginPath();
    ctx.lineWidth = 10;
   
    ctx.arc(400, 400, 100, 0, Math.PI * 2, true);
    ctx.moveTo(435, 400);
    ctx.arc(400, 400, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(390, 390);
    ctx.arc(385, 390, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(420, 390);
    ctx.arc(415, 390, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
    
    

    
    
    
}

