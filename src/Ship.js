function Ship(itinerary){
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
    
    
    const findPort = this.itinerary.ports.indexOf(this.currentPort);
    this.previousPort = this.itinerary.ports[findPort];
    this.currentPort.removeShip(this);
    this.currentPort = null;
  };
  
Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};

module.exports = Ship;