import './style.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

(function Game() {
  const playerField = document.querySelector('.playerField');
  const enemyField = document.querySelector('.enemyField');
  const newGameBtn = document.querySelector('.newGame');

  const gameStatus = {
    gameOver: false,
  };

  function getSymbolForField(symbol) {
    const symbols = {
      m: '•',
      h: 'x',
    };
    return symbols[symbol];
  }

  let player1, player2, gameboard1, gameboard2;

  function startNewGame() {
    player1 = new Player('player', 'Seahero', true);
    player2 = new Player('pc', 'AIinside', false);

    gameboard1 = new Gameboard();
    gameboard2 = new Gameboard();

    gameboard1.generateShips();
    gameboard2.generateShips();

    renderPlayerField();
    renderEnemyField();
  }

  function renderPlayerField() {
    playerField.innerHTML = '';
    for (let line = 0; line < 10; line += 1) {
      const newLine = document.createElement('div');
      newLine.classList.add('fieldLine');
      for (let column = 0; column < 10; column += 1) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell', `cellId-${line}-${column}`);
        const symbolInCell = gameboard1.field[line][column];
        if (symbolInCell === 'h' || symbolInCell === 'm') {
          newCell.textContent = symbolsInField.symbolInCell;
        }
        if (symbolInCell === 's') {
          newCell.classList.add('aliveShip');
        }
        if (symbolInCell === 'h' && gameboard1.isShipSunk(line, column)) {
          newCell.classList.add('sunkShup');
        } else if (
          symbolInCell === 'h' &&
          !gameboard1.isShipSunk(line, column)
        ) {
          newCell.classList.add('aliveShip');
        }

        newLine.appendChild(newCell);
      }
      playerField.appendChild(newLine);
    }
  }

  function renderEnemyField() {
    enemyField.innerHTML = '';
    for (let line = 0; line < 10; line += 1) {
      const newLine = document.createElement('div');
      newLine.classList.add('fieldLine');
      for (let column = 0; column < 10; column += 1) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell', `cellId-${line}-${column}`);
        const symbolInCell = gameboard2.field[line][column];
        newCell.textContent = symbolInCell;

        if (symbolInCell === 'm') {
          newCell.textContent = '•';
        }

        if (symbolInCell === 'h' ) {
          const findShip = gameboard2.findShip([line, column]);
          const isShipSunk = findShip.isSunk();
          newCell.textContent = getSymbolForField(symbolInCell);
          if (isShipSunk) {
            newCell.classList.add('sunkShip');
          } else {
            newCell.classList.add('aliveShip');
          }
        }
        newLine.appendChild(newCell);
      }
      enemyField.appendChild(newLine);
    }
  }

  function changeTurns() {
    player1.changeTurn();
    player2.changeTurn();
  }

  function playerTurn(event) {
    const [_, line, column] = event.target.classList[1].split('-');
    // console.log(line, column);
    if (player1.turn) {
      const resultOfAttack = gameboard2.receiveAttack([+line, +column]);
      console.log(resultOfAttack);
      setTimeout(renderEnemyField, 0)
      // renderEnemyField();
    }
  }

  function enemyTurn() {}

  startNewGame();

  newGameBtn.addEventListener('click', startNewGame);
  enemyField.addEventListener('click', playerTurn);
})();
