var LivingCreature = require("./LivingCreature.js")
module.exports = class Grass extends LivingCreature {

  mul() {
        this.multiply++;
        var emptyCells = super.chooseCell(0);
        var newCell = super.random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 2;
        }
    }
}
/*
if(mulSpeed==1){
    setInterval(mul ,1000)
}
else if(mulSpeed==2){
    setInterval(mul ,500)
}
else if(mulSpeed==0.5){
    setInterval(mul(),2000)
}
else if(mulSpeed==0){
    setInterval(this.mul(),10000)
}*/