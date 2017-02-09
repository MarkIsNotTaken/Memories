var images = [
["./assets/ytho.png", "./assets/ytho.png", "./assets/mrbean.png", "./assets/mrbean.png","./assets/ainsley.png", "./assets/ainsley.png", "./assets/china.png", "./assets/china.png"],
["./assets/ytho.png", "./assets/china.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/china.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/ytho.png"],
["./assets/mrbean.png", "./assets/ainsley.png", "./assets/china.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/china.png", "./assets/ytho.png", "./assets/ytho.png"],
["./assets/china.png", "./assets/mrbean.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/ytho.png", "./assets/ytho.png", "./assets/ainsley.png", "./assets/china.png"],
["./assets/china.png", "./assets/china.png", "./assets/mrbean.png", "./assets/ytho.png", "./assets/ytho.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/ainsley.png"],
["./assets/ainsley.png", "./assets/ytho.png", "./assets/ytho.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/china.png", "./assets/china.png", "./assets/mrbean.png"],
["./assets/mrbean.png", "./assets/china.png", "./assets/ainsley.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/ytho.png", "./assets/ytho.png", "./assets/china.png"],
["./assets/china.png", "./assets/mrbean.png", "./assets/ytho.png", "./assets/china.png", "./assets/ainsley.png", "./assets/ytho.png", "./assets/mrbean.png", "./assets/ainsley.png"],
["./assets/ytho.png", "./assets/ytho.png", "./assets/mrbean.png", "./assets/ainsley.png", "./assets/china.png", "./assets/china.png", "./assets/ainsley.png", "./assets/mrbean.png"],
["./assets/ainsley.png", "./assets/ytho.png", "./assets/china.png", "./assets/mrbean.png", "./assets/mrbean.png", "./assets/china.png", "./assets/ytho.png", "./assets/ainsley.png"],
["./assets/ytho.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/china.png", "./assets/ainsley.png", "./assets/mrbean.png", "./assets/china.png", "./assets/ytho.png"]
];

var image = images[Math.floor((Math.random() * 10) + 0)];

document.getElementById("pic1").src = image[0];
document.getElementById("pic2").src = image[1];
document.getElementById("pic3").src = image[2];
document.getElementById("pic4").src = image[3];
document.getElementById("pic5").src = image[4];
document.getElementById("pic6").src = image[5];
document.getElementById("pic7").src = image[6];	
document.getElementById("pic8").src = image[7];

var clicked = [];
var firstp = clicked[0];
var secondp = clicked[1];
var clicks = 0;

document.getElementById("box1").onclick = function (){
	var div = document.getElementById("box1");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic1").src);
}

document.getElementById("box2").onclick = function (){
	var div = document.getElementById("box2");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic2").src);
	
}

document.getElementById("box3").onclick = function (){
	var div = document.getElementById("box3");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic3").src);
}

document.getElementById("box4").onclick = function (){
	var div = document.getElementById("box4");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic4").src);
}

document.getElementById("box5").onclick = function (){
	var div = document.getElementById("box5");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic5").src);
}

document.getElementById("box6").onclick = function (){
	var div = document.getElementById("box6");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic6").src);
	console.log(clicks);
}

document.getElementById("box7").onclick = function (){
	var div = document.getElementById("box7");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic7").src);
}

document.getElementById("box8").onclick = function (){
	var div = document.getElementById("box8");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic8").src);
}

function donut(){
if(clicked.length == 2 && firstp !== secondp){
	document.getElementById("box1").style.transform = "rotateY(0deg)";
	document.getElementById("box2").style.transform = "rotateY(0deg)";
	}
}

setInterval(donut, 1000);