class Ship {
  constructor(coordinates) {
    this.length = coordinates.length;
    this.cells = [];
    coordinates.forEach((cell) => {
      this.cells.push({
        cellCoordinates: cell,
        cellIsHit: false,
      });
    });
  }

  hit(hitCoordinates) {
    let thereIsAHit = false;
    this.cells.forEach((cell) => {
      if (cell.cellCoordinates[0] === hitCoordinates[0]
        && cell.cellCoordinates[1] === hitCoordinates[1]) {
        // eslint-disable-next-line no-param-reassign
        cell.cellIsHit = true;
        thereIsAHit = true;
      }
    });
    console.log(this);
    return thereIsAHit;
  }

  isHit() {
    let thisShipIsHit = false;
    this.cells.forEach((cell) => {
      if (cell.cellIsHit) thisShipIsHit = true;
    });
    return thisShipIsHit;
  }

  isSunk() {
    let thisShipIsSunk = true;
    this.cells.forEach((cell) => {
      if (!cell.cellIsHit) thisShipIsSunk = false;
    });
    return thisShipIsSunk;
  }
}

export default Ship;
