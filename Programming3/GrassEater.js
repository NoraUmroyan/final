var LivingCreature = require("./LivingCreature.js")
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y);
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
    chooseCell1(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);

    }

    mul() {
        var emptyCells = this.chooseCell1(0);
        var newCell = super.random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrassEater = new GrassEater(newX, newY);
            grassEaterArr.push(newGrassEater);
            this.energy = 8
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell1(0);
        var newCell = super.random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
        var emptyCells = this.chooseCell1(1);
        var newCell = super.random(emptyCells);
        var emptyCells1 = this.chooseCell1(5);
        var newCell1 = super.random(emptyCells1);
        var emptyCells2 = this.chooseCell1(6);
        var newCell2 = super.random(emptyCells2);
        var emptyCells3 = this.chooseCell1(7);
        var newCell3 = super.random(emptyCells3);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 12) {
                this.mul()
            }
        }
        else if (newCell1) {
            this.energy += 5

        }
        else if (newCell2) {
            this.die()
        }
        else if (newCell3) {
            this.energy -= 5
        }
        else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}