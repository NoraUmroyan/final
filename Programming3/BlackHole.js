var LivingCreature = require("./LivingCreature.js")
module.exports = class BlackHole extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 80;
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
    chooseCell5(character) {
        return super.chooseCell(character);
    }
    die() {
        this.energy--
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in blackholeArr) {
                if (this.x == blackholeArr[i].x && this.y == blackholeArr[i].y) {
                    blackholeArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}