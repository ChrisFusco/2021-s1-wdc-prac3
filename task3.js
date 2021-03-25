var count = 0;
function increaseCount() {
    count++;
    document.getElementById("mcount").innerHTML = "<div>" + count + "</div>";
}

function postText() {
    document.getElementById("posts").innerHTML = "<div class='post-time'>" + Date() + "</div>";
    document.getElementById("posts").innerHTML += "<div><br />" + document.getElementById("text_area").innerHTML + "</div>";
}