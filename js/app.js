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

document.getElementById("box1").onclick = function (){
	var div = document.getElementById("box1");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box2").onclick = function (){
	var div = document.getElementById("box2");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box3").onclick = function (){
	var div = document.getElementById("box3");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box4").onclick = function (){
	var div = document.getElementById("box4");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box5").onclick = function (){
	var div = document.getElementById("box5");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box6").onclick = function (){
	var div = document.getElementById("box6");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box7").onclick = function (){
	var div = document.getElementById("box7");
	div.style.transform = "rotateY(180deg)";
}

document.getElementById("box8").onclick = function (){
	var div = document.getElementById("box8");
	div.style.transform = "rotateY(180deg)";
}
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help