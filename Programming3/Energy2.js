var LivingCreature = require("./LivingCreature.js")
module.exports = class Energy2 extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 20;

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
    chooseCell4(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }
    die() {
        this.energy--
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in energy2Arr) {
                if (this.x == energy2Arr[i].x && this.y == energy2Arr[i].y) {
                    energy2Arr.splice(i, 1);
                    break;
                }
            }
        }
    }
}