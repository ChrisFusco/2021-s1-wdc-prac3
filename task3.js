var count = 0;
function increaseCount() {
    count++;
    document.getElementById("mcount").innerHTML = "<div>" + count + "</div>";
}

function postText() {
    document.getElementById("posts").innerHTML = "<div class='post-time'>" + new Date() + "</div>";
    document.getElementById("posts").innerHTML += "<div class='post-content'><br />" + document.getElementById("text_area").value + "</div>";
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