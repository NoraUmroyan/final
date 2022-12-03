var socket = io();
var side = 25;
var matrix = [];
var days = 0;
var season = "spring"

function setup() {
    frameRate(5);
    createCanvas(25 * side, 25 * side);
    background("grey");

}

function season1(){
    days++
    if (days < 50) { season = "spring"
}
    else if (days >= 50 && days < 100) { season = "summer";
}
    else if (days >= 100 && days < 150) { season = "fall"  
}
    else { season = "winter"
}
 console.log(season);
}


function draww(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1 && season == "spring") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && season == "summer") {
                fill("green");
            }
            else if (matrix[y][x] == 1 && season == "fall") {
                fill("brown");
            }
            else if (matrix[y][x] == 1 && season == "winter") {
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
            else if (matrix[y][x] == 7) {
                fill("pink");
            }

            rect(x * side, y * side, side, side);

        }

    }

}

socket.on('send matrix', draww)
setInterval(season1, 350)

