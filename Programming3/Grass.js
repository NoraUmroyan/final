var LivingCreature = require("./LivingCreature.js")
var info = {
    "season": "spring",
}
var days = 0;
function season() {
    days++
    if (days < 30) {
        info.season = "spring"
    }
    else if (days >= 30 && days < 60) {
        info.season = "summer";
    }
    else if (days >= 60 && days < 90) {
        info.season = "fall"
    }
    else if (days >= 90 && days < 120) {
        info.season = "winter"
    }
}
setInterval(season, 250)
module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = super.random(emptyCells);

        if (newCell && this.multiply >= 4) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            if (info.season == "spring") {
                this.multiply = 2;
                console.log(this.multiply + "-grassSpeed");
            }
            else if (info.season == "summer") {
                this.multiply = 3;
                console.log(this.multiply + "grassSpeed");
            }
            else if (info.season == "fall") {
                this.multiply = 1;
                console.log(this.multiply + "grassSpeed");
            }
            else if (info.season == "winter") {
                this.multiply = 0;
                console.log(this.multiply + "grassSpeed");
            }
        }
    }

}
