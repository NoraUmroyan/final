var socket = io();
var side = 30;
var matrix = [];
function setup() {
    frameRate(5);
    createCanvas(30 * side, 30 * side);
    background('#acacac');
    
}

function draww(matrix) {
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
        
                    if (matrix[y][x] == 1) {
                        fill("green");
                    }
                    else if (matrix[y][x] == 0) {
                        fill("#acacac");
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
console.log(matrix)

}

socket.on('send matrix', draww)