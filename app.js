console.log('Hello world');
var c = document.querySelector('canvas');
console.log(c);
c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext('2d');
ctx.fillStyle = "rgb(255,0,0,0.1)";
ctx.fillRect(100,100,100,100);
ctx.fillStyle = "rgb(0,255,0,0.2)";
ctx.fillRect(120,300,100,100);
ctx.fillStyle = "rgb(0,0,255,0.3)";
ctx.fillRect(140,500,100,100);
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.lineTo(0,350);
ctx.strokeStyle = "rgb(0,0,250,0.9)"
ctx.stroke();
ctx.closePath();
// for(let i=0;i<10;i++){
// for(let i=0;i<50;i++){
// for(let i=0;i<100;i++){
for(let i=0;i<100;i++){
    let x = Math.random()*window.innerWidth;
    let y = Math.random()*window.innerHeight;
    ctx.beginPath();
    ctx.arc(x,y,45,0,2*Math.PI,false);
    ctx.stroke();

    ctx.strokeStyle = "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + "," + 1 + ")";
    console.log(ctx.strokeStyle);
    ctx.closePath();
}
ctx.clearRect(0,0,innerWidth,innerHeight);
let x=200;
function animate(){
    requestAnimationFrame(animate);
    ctx.beginPath();
    ctx.arc(x,200,30,0,2*Math.PI);
    x++;
    ctx.stroke();
}
animate();