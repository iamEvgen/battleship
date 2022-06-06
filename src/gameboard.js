import Ship from './ship';

class Gameboard {
  constructor() {
    // '' - empty cell
    // 's' - ship is here
    // 'm' - miss, there was a shot without a hit
    // 'h' - hit, there was a hit in the ship
    this.field = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ];

    this.ships = [];
  }

  checkNearCells(listOfCellsCoordinates) {
    let nearCellsAreFree = true;
    listOfCellsCoordinates.forEach((cell) => {
      const line = cell[0];
      const column = cell[1];
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          const testLine = line + i;
          const testColumn = column + j;
          if (
            testLine >= 0
            && testLine <= 9
            && testColumn >= 0
            && testColumn <= 9
          ) {
            if (this.field[testLine][testColumn] !== '') {
              nearCellsAreFree = false;
            }
          }
        }
      }
    });
    return nearCellsAreFree;
  }

  markShipOnTheGameboard(allShipCoordinates) {
    allShipCoordinates.forEach((cell) => {
      const line = cell[0];
      const column = cell[1];
      this.field[line][column] = 's';
    });
  }

  addShip(firstCell, length, axis) {
    let shipAdded = false;

    const firstCellCoordinates = {
      line: firstCell[0],
      column: firstCell[1],
    };

    const allShipCoordinates = [];
    allShipCoordinates.push([
      firstCellCoordinates.line,
      firstCellCoordinates.column,
    ]);

    if (axis === 'horizontal' && firstCellCoordinates.column + length <= 10) {
      for (let i = 1; i < length; i += 1) {
        allShipCoordinates.push([
          firstCellCoordinates.line,
          firstCellCoordinates.column + i,
        ]);
      }
    } else if (
      axis === 'vertical'
      && firstCellCoordinates.line + length <= 10
    ) {
      for (let i = 1; i < length; i += 1) {
        allShipCoordinates.push([
          firstCellCoordinates.line + i,
          firstCellCoordinates.column,
        ]);
      }
    } else return false;

    if (this.checkNearCells(allShipCoordinates)) {
      const ship = new Ship(allShipCoordinates);
      this.ships.push(ship);
      this.markShipOnTheGameboard(allShipCoordinates);
      shipAdded = this.field;
    }

    return shipAdded;
  }

  static includes(arr, element) {
    let result = false;
    arr.forEach((el) => {
      if (el[0] === element[0] && el[1] === element[1]) {
        result = true;
      }
    });
    return result;
  }

  closeCellsForAttack(ship) {
    const shipCellCoordinates = [];
    const needToClose = new Set();
    ship.cells.forEach((cell) => {
      shipCellCoordinates.push(cell.cellCoordinates);
    });

    const shifts = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    shipCellCoordinates.forEach((cell) => {
      shifts.forEach((shift) => {
        const closingCell = [cell[0] + shift[0], cell[1] + shift[1]];
        if (
          closingCell[0] >= 0
          && closingCell[0] <= 9
          && closingCell[1] >= 0
          && closingCell[1] <= 9
          && !Gameboard.includes(shipCellCoordinates, closingCell)
        ) {
          needToClose.add(closingCell);
        }
      });
    });

    needToClose.forEach((cell) => {
      this.field[cell[0]][cell[1]] = 'm';
    });
  }

  getgameOverStatus() {
    let gameOverStatus = true;
    this.ships.forEach((ship) => {
      if (!ship.isSunk()) gameOverStatus = false;
    });
    return gameOverStatus;
  }

  // return {'error', false} if you shot in 'm' or 'h'
  // return {hitStatus, gameOverStatus} if you shot in '' or 's'
  receiveAttack(targetCellCoordinates) {
    const resultOfAttack = {
      hitStatus: null,
      shipWasSunk: null,
      gameOverStatus: null,
      field: this.field,
    };
    const targetLine = targetCellCoordinates[0];
    const targetColumn = targetCellCoordinates[1];

    if (this.field[targetLine][targetColumn] === 's') {
      // hit the target
      this.field[targetLine][targetColumn] = 'h';
      const shipUnderFire = this.findShip([targetLine, targetColumn]);
      shipUnderFire.hit([targetLine, targetColumn]);
      const shipIsSunk = shipUnderFire.isSunk();
      if (shipIsSunk) {
        this.closeCellsForAttack(shipUnderFire);
      }
      resultOfAttack.hitStatus = true;
      resultOfAttack.shipWasSunk = shipIsSunk;
      resultOfAttack.gameOverStatus = this.getgameOverStatus();
      resultOfAttack.field = this.field;
    } else if (this.field[targetLine][targetColumn] === '') {
      // missed the target
      this.field[targetLine][targetColumn] = 'm';
      resultOfAttack.hitStatus = false;
      resultOfAttack.shipWasSunk = false;
      resultOfAttack.gameOverStatus = this.getgameOverStatus();
      resultOfAttack.field = this.field;
    } else if (['h', 'm'].includes(this.field[targetLine][targetColumn])) {
      // repeated shot at the same target
      resultOfAttack.hitStatus = 'error';
      resultOfAttack.shipWasSunk = false;
      resultOfAttack.gameOverStatus = this.getgameOverStatus();
      resultOfAttack.field = this.field;
    } else {
      throw new Error('Invalid target!');
    }

    return resultOfAttack;
  }

  generateShips() {
    [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].forEach((shipLength) => {
      let counter = 1;
      while (counter < 1000) {
        const firstCell = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
        const axis = ['horizontal', 'vertical'][Math.floor(Math.random() * 2)];
        const shipAdded = this.addShip(firstCell, shipLength, axis);
        if (shipAdded) {
          break;
        }
        counter += 1;
      }
    });
  }

  findShip(coordinates) {
    const line = coordinates[0];
    const column = coordinates[1];
    let needShip = false;
    this.ships.forEach((ship) => {
      ship.cells.forEach((cell) => {
        if (
          cell.cellCoordinates[0] === line
          && cell.cellCoordinates[1] === column
        ) {
          needShip = ship;
        }
      });
    });

    return needShip;
  }
}

export default Gameboard;
