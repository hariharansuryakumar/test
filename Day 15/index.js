// lets open a new window to play a game
var myGameWindow = openNewWindow();

// after playing, we check if window is still open
if(isWindowOpen(myGameWindow)) {
console.log("still playing");
} else{
    console.log("Game over");
}



if(isWindowOpen(myGameWindow)) {
    console.log("still playing")
} else{
    console.log("Game over")
}


function openNewWindow(url) {
    var newWindow = window.open(url,"_blank");
    return newWindow;
}