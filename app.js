const canvas = document.getElementById("jsCanvas");
let painting = false;

function onMouseMove(event){
	const x = event.offsetX;
	const y = event.offsetY;
}

function stopPainting(){
	painting = false;
}

function onMouseDown(event){
	painting = true;
}

function onMouseUp(evnet){
	stopPainting();
}

if(canvas){
	canvas.addEventListener("mousemove",onMouseMove);
	canvas.addEventListener("mousedown", onMouseDown);
	canvas.addeventlistener("mouseup", onMouseUp);
	canvas.addEventListener("mouseleave",stopPainting);
}