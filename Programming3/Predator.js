var LivingCreature = require("./LivingCreature.js")
module.exports = class Predator extends LivingCreature {
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
    chooseCell2(character) {
        this.getNewCoordinates()
        return super.chooseCell(character);
    }

    mul() {
        var emptyCells = this.chooseCell2(0);
        var newCell = super.random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var Pr = new Predator(newX, newY);
            PredatorArr.push(Pr);
            this.energy = 8
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell2(0);
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
        var emptyCells = this.chooseCell2(2);
        var newCell = super.random(emptyCells);
        var emptyCells1 = this.chooseCell2(4);
        var newCell1 = super.random(emptyCells1);
        var emptyCells2 = this.chooseCell2(6);
        var newCell2 = super.random(emptyCells2);
        var emptyCells3 = this.chooseCell2(7);
        var newCell3 = super.random(emptyCells3);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 12) {
                this.mul()
            }
        } else if (newCell1) {
            this.energy += 5


        } else if (newCell2) {
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
        for (var i in PredatorArr) {
            if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                PredatorArr.splice(i, 1);
                break;
            }
        }
    }
}

