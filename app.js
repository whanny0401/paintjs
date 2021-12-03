const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.querySelectorAll(".jsColor");
const brushSize = document.getElementById("jsRange");
const paintMode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

let painting = false;
let filling = false;

canvas.height = 700;
canvas.width = 700;

ctx.fillStyle = "white";
ctx.fillRect(0,0,700,700);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2.5;


function onMouseMove(event){
	const x = event.offsetX;
	const y = event.offsetY;
	if(!painting){
		ctx.beginPath();
		ctx.moveTo(x, y);
	}else{
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}

function stopPainting(){
	painting = false;
}

function startPainting(event){
	painting = true;
}

function colorChange(event){
	const cc = event.target.style.backgroundColor;
	ctx.strokeStyle = cc;
	ctx.fillStyle = cc;
}

function handleSize(event){
	const size = event.target.value;
	ctx.lineWidth = size;
}

function handleMode(event){
	if(!filling){
		filling = true;
		paintMode.innerHTML = "Paint";
	}else{
		filling = false;
		paintMode.innerHTML = "Fill";
	}
}

function handleClick(event){
	if(filling){
		ctx.fillRect(0, 0, 700, 700);
	}
}

function handleCM(event){
	event.preventDefault();
}

function handleSave(){
	const image = canvas.toDataURL("image/jpeg");
	console.log(image);
	const link = document.createElement("a");
	link.href = image;
	link.download = "yourpaint.jpeg"
	console.log(link);
	link.click();
}

if(canvas){
	canvas.addEventListener("mousemove",onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave",stopPainting);
	canvas.addEventListener("click", handleClick);
	canvas.addEventListener("contextmenu", handleCM);
}

color.forEach(color => color.addEventListener("click",colorChange));

if(brushSize){
	brushSize.addEventListener("input", handleSize);
}

if(paintMode){
	paintMode.addEventListener("click", handleMode);
}

if(save){
	save.addEventListener("click",handleSave);
}