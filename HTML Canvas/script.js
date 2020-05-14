var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#1fc2e1";
context.beginPath();
context.moveTo(400, 220);
context.lineTo(480, 260);
context.lineTo(480, 340);
context.lineTo(400, 380);
context.lineTo(320, 340);
context.lineTo(320, 260);
context.lineTo(400, 220);
context.fill();

var ballColor = 'rgb(100,205,120)';
var ballPosX = canvas.width/2;
var ballPosY = canvas.height/2;
var ballRadius = 100;

var ballSpeedX = 3;
var ballSpeedY =2;

var animate = function(){
context.clearRect(0,0,canvas.width, canvas.height);


context.fillStyle = ballColor;
context.beginPath();
context.arc(ballPosX,ballPosY,ballRadius,0,Math.PI * 2);
context.fill();

if((ballPosX + ballRadius >= canvas.width) || (ballPosX-ballRadius) <= 0){
    ballSpeedX = ballSpeedX * -1;
}

ballPosX = ballPosX + ballSpeedX;
ballPosY = ballPosY + ballSpeedY;

window.requestAnimationFrame(animate);
}
animate();