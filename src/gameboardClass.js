import Ship from './shipClass';

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

  getGameOverStatus() {
    let gameOVerStatus = true;
    this.ships.forEach((ship) => {
      if (!ship.isSunk()) gameOVerStatus = false;
    });
    return gameOVerStatus;
  }

  // return {'error', false} if you shot in 'm' or 'h'
  // return {hitStatus, gameOverStatus} if you shot in '' or 's'
  receiveAttack(targetCellCoordinates) {
    const resultOfAttack = {
      hitStatus: null,
      gameOverStatus: null,
      field: this.field,
    };
    const targetLine = targetCellCoordinates[0];
    const targetColumn = targetCellCoordinates[1];

    if (this.field[targetLine][targetColumn] === 's') {
      // hit the target
      this.field[targetLine][targetColumn] = 'h';
      this.ships.forEach((ship) => ship.hit(targetCellCoordinates));
      resultOfAttack.hitStatus = true;
      resultOfAttack.gameOverStatus = this.getGameOverStatus();
      resultOfAttack.field = this.field;
    } else if (this.field[targetLine][targetColumn] === '') {
      // missed the target
      this.field[targetLine][targetColumn] = 'm';
      resultOfAttack.hitStatus = false;
      resultOfAttack.gameOverStatus = this.getGameOverStatus();
      resultOfAttack.field = this.field;
    } else if (['h', 'm'].includes(this.field[targetLine][targetColumn])) {
      // repeated shot at the same target
      resultOfAttack.hitStatus = 'error';
      resultOfAttack.gameOverStatus = this.getGameOverStatus();
      resultOfAttack.field = this.field;
    } else {
      throw new Error('Invalid target!');
    }

    return resultOfAttack;
  }
}

export default Gameboard;
