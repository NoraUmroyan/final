var LivingCreature = require("./LivingCreature.js")
var info = {
    "season": "spring",
}
var days = 0;
function season() {
    days++
    if (days < 50) {
        info.season = "spring"
    }
    else if (days >= 50 && days < 100) {
        info.season = "summer";
    }
    else if (days >= 150 && days < 200) {
        info.season = "fall"
    }
    else {
        info.season = "winter"
    }
}
setInterval(season, 350)
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
            }
            else if (info.season == "summer") {
                this.multiply = 3;
            }
            else if (info.season == "fall") {
                this.multiply = 1;    
            }
            else if (info.season == "winter") {
                this.multiply = 0;
            
            }
        }
    }

}
