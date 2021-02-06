//alert("ааааааа")
//confirm("ааааааааааа")
//var aa = prompt("ааааааааааа")
//alert("aa" + aa)
let width = window.innerWidth -140;
let height = window.innerHeight -50;

function Aa() {
	alert("aa");
}

function Bb() {
	alert("bb");
}

function Runaway() {
	let top = Math.random()*height;
	let left = Math.random()*width;
	document.getElementById('runawayButton').style.top = top+'px';
	document.getElementById('runawayButton').style.left = left+'px';
}

