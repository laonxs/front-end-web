window.onload = function() {
	var tb1 = document.getElementById("tb1");
	var count = tb1.rows.length;
	
	tb1.rows[0].style.backgroundColor = "Crimson";
	
	for (var i = 1; i < count; i++) {
		if (i % 2 == 0) {
			tb1.rows[i].style.backgroundColor = "BlanchedAlmond";
		} else {
			tb1.rows[i].style.backgroundColor = "BurlyWood";
		}
	}	
}

function choose() {
	var checked = document.getElementById("selectAll").checked;
	var select = document.getElementsByName("select");
	for (var i = 0; i < select.length; i++) {
		select[i].checked = checked;
	}
}