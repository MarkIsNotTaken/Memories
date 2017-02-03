var rotated = false;
var images = ["./assets/ytho.png", "./assets/ytho.png", "./assets/mrbean.png", "./assets/mrbean.png","./assets/ainsley.png", "./assets/ainsley.png", "./assets/china.png", ".assets/china.png"]

document.getElementById("pic1").src = images[Math.floor((Math.random() * 7) + 0)];
document.getElementById("pic2").src = images[Math.floor((Math.random() * 7) + 0)];
document.getElementById("pic3").src = images[Math.floor((Math.random() * 7) + 0)];
document.getElementById("pic4").src = images[Math.floor((Math.random() * 7) + 0)];
document.getElementById("pic5").src = images[Math.floor((Math.random() * 7) + 0)];
document.getElementById("pic6").src = images[Math.floor((Math.random() * 7) + 0)];
document.getElementById("pic7").src	= images[Math.floor((Math.random() * 7) + 0)];	
document.getElementById("pic8").src	= images[Math.floor((Math.random() * 7) + 0)];

document.getElementById("box1").onclick = function (){
	var div = document.getElementById("box1"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box2").onclick = function (){
	var div = document.getElementById("box2"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box3").onclick = function (){
	var div = document.getElementById("box3"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box4").onclick = function (){
	var div = document.getElementById("box4"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box5").onclick = function (){
	var div = document.getElementById("box5"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box6").onclick = function (){
	var div = document.getElementById("box6"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box7").onclick = function (){
	var div = document.getElementById("box7"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box8").onclick = function (){
	var div = document.getElementById("box8"),
		deg = rotated;

	div.style.transform = "rotateY(180deg)";
}