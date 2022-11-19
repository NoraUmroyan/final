var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);


app.use(express.static("./programming3"));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);
function generate(matLen, gr, grEat, predator, energy, energy2, blackhole) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }

    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < energy; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < energy2; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < blackhole; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
        if (matrix[y+1][x+1] == 0) {
            matrix[y+1][x+1] = 6
        }
       
    
    
        if (matrix[y][x+1] == 0) {
            matrix[y][x+1] = 6
        }
       
       
        if (matrix[y+1][x] == 0) {
            matrix[y+1][x] = 6
        }
    }
    return matrix
}


let matrix = generate(30, 55, 22, 8, 5, 5, 1)


var side = 30;
let grassArr = []
let grassEaterArr = []
let PredatorArr = []
let energyArr = []
let energy2Arr = []
let blackholeArr = []

for (var i in grassArr) {
    grassArr[i].mul()
}

for (let i in grassEaterArr) {
    grassEaterArr[i].eat()
}
for (var i in PredatorArr) {
    PredatorArr[i].eat()
}
for (var i in energyArr) {
    energyArr[i].die()
}
for (var i in energy2Arr) {
    energy2Arr[i].die()
}
for (var i in blackholeArr) {
    blackholeArr[i].chooseCell()
}

io.socket.emit("send matrix", matrix);