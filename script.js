
var nb = document.querySelectorAll(".drum").length;

for (var d = 0; d < nb; d++) {
    document.querySelectorAll(".drum")[d].addEventListener("click", 
        function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        playSound(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    playSound(event.key.toLowerCase());
});
function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sound/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sound/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sound/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sound/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sound/snare.mp3").play();
            break;
        case "k":
            new Audio("sound/crash.mp3").play();
            break;
        case "l":
            new Audio("sound/kickbass2.mp3").play();
            break;
        default:
            console.log("Unrecognized key: " + key);
    }
}
