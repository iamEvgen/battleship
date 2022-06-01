class Ship {
  constructor(length, coordinates) {
    this.length = length;
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
      if (cell.cellCoordinates === hitCoordinates) {
        // eslint-disable-next-line no-param-reassign
        cell.cellIsHit = true;
        thereIsAHit = true;
      }
    });
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
