var LivingCreature = require("./LivingCreature.js")
module.exports = class Virus extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 25;

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell7(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }

move() {
    this.energy--
    var emptyCells = this.chooseCell7(0);
    var newCell = super.random(emptyCells);
    if (newCell && this.energy >= 0) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = matrix[this.y][this.x]
        matrix[this.y][this.x] = 0
        this.x = newX
        this.y = newY
    } 
    else {
        this.die()
    }
}

die() {
    this.energy--
    if (this.energy == 0) {
        matrix[this.y][this.x] = 0
        for (var i in virusArr) {
            if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                virusArr.splice(i, 1);
                break;
            }
        }
    }
}
} 