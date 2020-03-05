window.onload = function() {
	setTimeout("hidden()", 2000);
}

function hidden() {
	// none必须要使用引号
	document.getElementById("s1").style.display = "none";
}