console.log("test...")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "rgb(0,100,200)";
ctx.moveTo(150,37.5)
ctx.lineTo(100,150);
ctx.lineTo(200,150);
ctx.stroke();
ctx.fillStyle = "gray";
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(150,150,50,0,3.14);
ctx.closePath();
ctx.fillStyle = "gray";
ctx.fill();