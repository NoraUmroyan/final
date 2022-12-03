var LivingCreature = require("./LivingCreature.js")
module.exports = class Energy extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 30;

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
    chooseCell3(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    die() {
        this.energy--
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in energyArr) {
                if (this.x == energyArr[i].x && this.y == energyArr[i].y) {
                    energyArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}