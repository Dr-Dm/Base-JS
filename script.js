var images = document.querySelectorAll("img");

for(var i = 0; i < 3; i++){
function f(e) {
    var img = document.createElement("img");
    img.src = "p" + (e.target.id[1] - 1) + ".jpg";

}