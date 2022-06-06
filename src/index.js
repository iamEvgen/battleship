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

  let player1, player2, gameboard1, gameboard2;

  function startNewGame() {
    gameStatus.gameOver = false;

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
        if (symbolInCell === 'm') {
          newCell.textContent = '•';
        } else if (symbolInCell === 's') {
          newCell.classList.add('aliveShip');
        } else if (symbolInCell === 'h') {
          newCell.textContent = 'x';
          const findShip = gameboard1.findShip([line, column]);
          const isShipSunk = findShip.isSunk();
          if (isShipSunk) {
            newCell.classList.add('sunkShip');
          } else {
            newCell.classList.add('aliveShip');
          }
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
        // newCell.textContent = symbolInCell;
        if (symbolInCell === 'm') {
          newCell.textContent = '•';
        } else if (symbolInCell === 'h' ) {
          newCell.textContent = 'x';
          const findShip = gameboard2.findShip([line, column]);
          const isShipSunk = findShip.isSunk();
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

  // function renderEnemyField() {
  //   enemyField.innerHTML = '';
  //   for (let line = 0; line < 10; line += 1) {
  //     const newLine = document.createElement('div');
  //     newLine.classList.add('fieldLine');
  //     for (let column = 0; column < 10; column += 1) {
  //       const newCell = document.createElement('div');
  //       newCell.classList.add('cell', `cellId-${line}-${column}`);
  //       const symbolInCell = gameboard2.field[line][column];
  //       newCell.textContent = symbolInCell;
  //       if (symbolInCell === 'm') {
  //         newCell.textContent = '•';
  //       } else if (symbolInCell === 'h' ) {
  //         newCell.textContent = 'x';
  //         const findShip = gameboard1.findShip([line, column]);
  //         const isShipSunk = findShip.isSunk();
  //         if (isShipSunk) {
  //           newCell.classList.add('sunkShip');
  //         } else {
  //           newCell.classList.add('aliveShip');
  //         }
  //       }
  //       newLine.appendChild(newCell);
  //     }
  //     enemyField.appendChild(newLine);
  //   }
  // }

  function changeTurns() {
    player1.changeTurn();
    player2.changeTurn();
  }

  function playerTurn(event) {
    if (gameStatus.gameOver) {
      return;
    }  
    if (player1.turn) {
      const [_, line, column] = event.target.classList[1].split('-');
      const resultOfAttack = gameboard2.receiveAttack([+line, +column]);
      console.log(resultOfAttack);
      renderEnemyField();
      if (resultOfAttack.gameOverStatus) {
        gameStatus.gameOver = resultOfAttack.gameOverStatus;
        //render gameover result, who won the game?
      } else if (!resultOfAttack.hitStatus) {
        changeTurns();
        enemyTurn();
      }
    }
  }

  function enemyTurn() {
    if (gameStatus.gameOver) {
      return;
    }
    if (player2.turn) {
      const target = player2.generateTarget(gameboard1.field);
      const resultOfAttack = gameboard1.receiveAttack(target);
      renderPlayerField();
      if (resultOfAttack.gameOverStatus) {
        gameStatus.gameOver = resultOfAttack.gameOverStatus;
        //render gameover result, who won the game?
      } else if (!resultOfAttack.hitStatus) {
        changeTurns();
      } else {
        enemyTurn();
      }
    }
  }

  startNewGame();

  newGameBtn.addEventListener('click', startNewGame);
  enemyField.addEventListener('click', playerTurn);
})();