var socket = io();
var side = 20;
var matrix = [];
var days = 0;

var info = {
    "season" : "spring",
    
}
function season(){
    days++
    if (days < 30) { info.season = "spring"
}
    else if (days >= 30 && days < 60) { info.season = "summer";
}
    else if (days >= 60 && days < 90) { info.season = "fall"  
}
    else if(days >= 90 && days < 120) { info.season = "winter"
}
 console.log(info.season);
}
function setup() {
    frameRate(5);
    createCanvas(20 * side, 20 * side);
    background("grey");

}

function draww(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1 && info.season == "spring") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && info.season == "summer") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && info.season == "fall") {
                fill("brown");
            }
            else if (matrix[y][x] == 1 && info.season == "winter") {
                fill("white");
            }
            
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }
            else if (matrix[y][x] == 6) {
                fill("black");
            }

            rect(x * side, y * side, side, side);

        }

    }

}
socket.on('send matrix', draww)
setInterval(season, 350)

