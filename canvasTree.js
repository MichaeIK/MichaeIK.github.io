var canvas = document.getElementById('canvas');
ctx=canvas.getContext('2d');
var x = 400;
var y = 600;
ctx.beginPath();
rec(x,y);
ctx.moveTo(x,y);
rec1(x,y);

function rec(x,y){
	let a = x-20;
	let b = y-20;
	let c = x+20;
	let d = y-20;
	ctx.moveTo(x,y);
	ctx.lineTo(a,b);
	ctx.stroke();
	ctx.moveTo(x,y);
	ctx.lineTo(c,d);
	ctx.stroke();
	x = a;
	y = b;
	if (a >= 0){
		rec(x,y);
	}	
}
function rec1(x,y){
	let a = x+20;
	let b = y-20;
	let c = x-20;
	let d = y-20;
	ctx.moveTo(x,y);
	ctx.lineTo(a,b);
	ctx.stroke();
	ctx.moveTo(x,y);
	ctx.lineTo(c,d);
	ctx.stroke();
	x = a;
	y = b;
	if  (b >= 0){
		rec1(x,y);
	}
	rec(x-20, y-20);	
}
