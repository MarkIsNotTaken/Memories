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

document.getElementById("box1").onclick = function (){
	var div = document.getElementById("box1");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic1"));
}

document.getElementById("box2").onclick = function (){
	var div = document.getElementById("box2");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic2"));
	
}

document.getElementById("box3").onclick = function (){
	var div = document.getElementById("box3");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic3"));
}

document.getElementById("box4").onclick = function (){
	var div = document.getElementById("box4");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic4"));
}

document.getElementById("box5").onclick = function (){
	var div = document.getElementById("box5");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic5"));
}

document.getElementById("box6").onclick = function (){
	var div = document.getElementById("box6");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic6"));
}

document.getElementById("box7").onclick = function (){
	var div = document.getElementById("box7");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic7"));
}

document.getElementById("box8").onclick = function (){
	var div = document.getElementById("box8");
	div.style.transform = "rotateY(180deg)";
	clicked.push(document.getElementById("pic8"));
}

function clicks(){
if(clicked[0].src !== clicked[1].src && clicked[0].src !== null || clicked[1].src !== null){
	document.getElementById("box1").style.transform = "rotateY(0deg)";
	document.getElementById("box2").style.transform = "rotateY(0deg)";
	document.getElementById("box3").style.transform = "rotateY(0deg)";
	document.getElementById("box4").style.transform = "rotateY(0deg)";
	document.getElementById("box5").style.transform = "rotateY(0deg)";
	document.getElementById("box6").style.transform = "rotateY(0deg)";
	document.getElementById("box7").style.transform = "rotateY(0deg)";
	document.getElementById("box8").style.transform = "rotateY(0deg)";
	clicked.splice(0, 2);
	}
}

var points = 0;

function clear(){
	if(clicked[0].src == clicked[1].src && clicked[0].src !== null && clicked[1].src !== null){
		var node1 = clicked[0].parentNode;
		var node2 = clicked[1].parentNode;
		node1.parentNode.style.opacity = 0;
		node2.parentNode.style.opacity = 0;
		points++;
	}
}

function score(){
	document.getElementById("points").innerHTML = "Score = " + points;
}

var int = setInterval(clicks, 2000);
setInterval(clear, 0000);
setInterval(score, 1000)
setTimeout(int, 2000);
