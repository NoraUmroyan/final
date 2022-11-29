express = require('express');

app = express();

server = require('http').createServer(app);

io = require('socket.io')(server);


app.use(express.static("./Programming3"));

app.get('/', function (req, res) {

    res.redirect('index.html');

});

LivingCreature = require("./Programming3/LivingCreature.js")
Grass = require("./Programming3/Grass.js")
GrassEater = require("./Programming3/GrassEater.js")
Predator = require("./Programming3/Predator.js")
BlackHole = require("./Programming3/BlackHole.js")
Energy = require("./Programming3/Energy.js")
Energy2 = require("./Programming3/Energy2.js")

server.listen(3000);

grassArr = []
grassEaterArr = []
PredatorArr = []
energyArr = []
energy2Arr = []
blackholeArr = []
var stat = {
    "grass" : 0,
    "grasseater" : 0,
    "predator" : 0,
    "energy" : 0,
    "energy2" : 0,
    "blackhole" : 0
}
function generate(matLen, gr, grEat, predator, energy, energy2, blackhole) {
    matrix = []
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
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }

    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < energy; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < energy2; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < blackhole; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
        if (matrix[y + 1][x + 1] == 0) {
            matrix[y + 1][x + 1] = 6
        }

        if (matrix[y][x + 1] == 0) {
            matrix[y][x + 1] = 6
        }

        if (matrix[y + 1][x] == 0) {
            matrix[y + 1][x] = 6
        }
    }
    return matrix
}


matrix = generate(20, 100, 22, 5, 5, 5, 1)



for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            let gr = new Grass(x, y)
            grassArr.push(gr)
        } else if (matrix[y][x] == 2) {
            let gr = new GrassEater(x, y)
            grassEaterArr.push(gr)
        }
        else if (matrix[y][x] == 3) {
            let gr = new Predator(x, y)
            PredatorArr.push(gr)
        }
        else if (matrix[y][x] == 4) {
            let gr = new Energy(x, y)
            energyArr.push(gr)
        }
        else if (matrix[y][x] == 5) {
            let gr = new Energy2(x, y)
            energy2Arr.push(gr)
        }
        else if (matrix[y][x] == 6) {
            let gr = new BlackHole(x, y)
            blackholeArr.push(gr)
        }

    }
}

function game() {
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
        blackholeArr[i].chooseCell5()
    }
    stat.grass = grassArr.length;
    stat.grasseater = grassEaterArr.length;
    stat.predator = PredatorArr.length;
    stat.energy = energyArr.length;
    stat.energy2 = energy2Arr.length;
    stat.blackhole = blackholeArr.length;
   
  io.sockets.emit("send matrix", matrix);
}
setInterval(game, 350)

//avelacnel,vor cuyc ta statistican,
//exanaki popoxutyuny guynerov ev ,
//ete stacvi,naev xoti bazmacman aragutyuny poxvi yst exanaki
//avelacnel nor heros` virus,vorin kpnelov mi hetaqrqir ban klini
//mek el knopkaner avelacnel,vor virus avelacnenq,kam xaxy sksvi sxmeluc

