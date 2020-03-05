var count = 1;

window.onload = function() {
	setInterval("changeImg()", 2000);
}

function changeImg() {
	document.getElementById("s1").src = "../img/0"+count+".jpg";
	if (count==3) {
		count = 1;
	} else {
		count++;
	}
}