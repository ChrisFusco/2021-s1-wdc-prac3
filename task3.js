var count = 0;
function increaseCount() {
    count++;
    document.getElementById("mcount").innerHTML = "<div>" + count + "</div>";
}

var data = [];
function postText() {
    document.getElementById("posts").innerHTML = "";

    var colors = document.getElementsByName("color");
	var color = "black";

	for (var i = 0; i < colors.length; i++) {
		if (colors[i].checked) {
			color = colors[i].value;
			break;
		}
	}

    var bold = document.getElementById("style_bold");
	var italic = document.getElementById("style_italic");
	var weight = "normal";
	var style = "normal";

	if (bold.checked) {
		weight = "bold";
	}
	if (italic.checked) {
		style = "italic";
	}

    var quantity = document.getElementById("quantity").value;
    for (var j = 0; j < quantity; j++) {
        data.push("<div class='post-time'>" + new Date() + "</div><div class='post-content' style='color: " + color + "; font-weight: " + weight + "; font-style: " + style + "'><br />" + document.getElementById("text_area").value + "</div>");
    }

    for (var k = 0; k < data.length; k++) {
        document.getElementById("posts").innerHTML += data[k];
        document.getElementById("posts").innerHTML += "<br />";
    }
}

function changeMenuScreen() {
    var main = document.getElementById("main");
    var menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        main.style.display = "block";
        menu.style.display = "none";
    }
    else {
        main.style.display = "none";
        menu.style.display = "block";
    }
}

function changeBackground() {
    var background = document.getElementById("body");
    background.style.backgroundColor = document.getElementById("input").value;
}