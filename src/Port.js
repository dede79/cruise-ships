function Port(name){
    this.name = name;
    this.ships = [];
}

Port.prototype.addShip = function(ship){
    this.ships.push(ship);
}

Port.prototype.removeShip = function(ship) {
    const shipToRemove = this.ships.indexOf(ship);
    this.ships.splice(shipToRemove, 1);
  };

module.exports = Port;