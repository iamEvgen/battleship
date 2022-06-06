/* eslint-disable no-constant-condition */
class Player {
  constructor(mode, name, turn) {
    this.name = name;
    this.mode = mode; // 'player'/'pc'
    this.turn = turn;
    this.successShots = []; // add here success shots before sunk ex. [1, 2];
  }

  changeTurn() {
    this.turn = !this.turn;
  }

  addSuccessShot(coordinates) {
    this.successShots.push(coordinates);
  }

  clearShotsWhenEnemySunk() {
    this.successShots = [];
  }

  // eslint-disable-next-line class-methods-use-this
  canWeShotHere(field, coordinates) {
    const targetLine = coordinates[0];
    const targetColumn = coordinates[1];
    if (
      targetLine < 0
      || targetLine > 9
      || targetColumn < 0
      || targetColumn > 9
    ) return false;
    if (['', 's'].includes(field[targetLine][targetColumn])) {
      return true;
    }
    return false;
  }

  randomTarget(field) {
    let targetLine;
    let targetColumn;
    while (true) {
      targetLine = Math.floor(Math.random() * 10);
      targetColumn = Math.floor(Math.random() * 10);
      if (this.canWeShotHere(field, [targetLine, targetColumn])) {
        return [targetLine, targetColumn];
      }
    }
  }

  generateTargetWith1Point(field, shots) {
    while (true) {
      const shifts = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];
      const randomShift = shifts[Math.floor(Math.random() * shifts.length)];
      const newCoordinates = [
        shots[0][0] + randomShift[0],
        shots[0][1] + randomShift[1],
      ];
      if (this.canWeShotHere(field, newCoordinates)) {
        return newCoordinates;
      }
    }
    this.clearShotsWhenEnemySunk();
    return this.randomTarget();
  }

  generateTargetWith2Point(field, shots) {
    const point1 = shots[0];
    const point2 = shots[1];
    let target;
    if (point1[0] === point2[0]) {
      // horizontal position of the ship
      const targetLine = point1[0];
      const shotsColumns = shots.map((element) => element[1]);
      const min = Math.min(...shotsColumns);
      const max = Math.max(...shotsColumns);
      const targets = [
        [targetLine, min - 1],
        [targetLine, max + 1],
      ];
      while (true) {
        target = targets[Math.floor(Math.random() * targets.length)];
        if (this.canWeShotHere(field, target)) return target;
      }
    } else if (point1[1] === point2[1]) {
      // vertical position of the ship
      const targetColumn = point1[1];
      const shotsLines = shots.map((element) => element[0]);
      const min = Math.min(...shotsLines);
      const max = Math.max(...shotsLines);
      const targets = [
        [min - 1, targetColumn],
        [max + 1, targetColumn],
      ];
      while (true) {
        target = targets[Math.floor(Math.random() * targets.length)];
        if (this.canWeShotHere(field, target)) return target;
      }
    }
    return null;
  }

  generateTarget(field) {
    let target;
    console.log(this.successShots);
    if (this.successShots.length === 0) {
      target = this.randomTarget(field);
    } else if (this.successShots.length === 1) {
      target = this.generateTargetWith1Point(field, this.successShots);
    } else if (this.successShots.length > 1) {
      target = this.generateTargetWith2Point(field, this.successShots);
    }
    return target;
  }
}

export default Player;
