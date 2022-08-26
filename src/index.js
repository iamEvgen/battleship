import './style.css';
import Gameboard from './gameboard';
import Player from './player';

(function Game() {
  const playerField = document.querySelector('.playerField');
  const enemyField = document.querySelector('.enemyField');
  const newGameBtn = document.querySelector('.newGame');
  const gameOverWarning = document.querySelector('.gameOverWarning');

  enemyField.classList.add('fieldSelector');

  const gameStatus = {
    gameOver: false,
  };

  let player1; let player2; let gameboard1; let
    gameboard2;

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

  function renderEnemyField(playerLost) {
    enemyField.innerHTML = '';
    for (let line = 0; line < 10; line += 1) {
      const newLine = document.createElement('div');
      newLine.classList.add('fieldLine');
      for (let column = 0; column < 10; column += 1) {
        const newCell = document.createElement('div');
        newCell.classList.add('cell', `cellId-${line}-${column}`);
        const symbolInCell = gameboard2.field[line][column];
        if (symbolInCell === 'm') {
          newCell.textContent = '•';
        } else if (symbolInCell === 'h') {
          newCell.textContent = 'x';
          const findShip = gameboard2.findShip([line, column]);
          const isShipSunk = findShip.isSunk();
          if (isShipSunk) {
            newCell.classList.add('sunkShip');
          } else {
            newCell.classList.add('aliveShip');
          }
        } else if (playerLost && symbolInCell === 's') {
          newCell.classList.add('aliveShip');
        }
        newLine.appendChild(newCell);
      }
      enemyField.appendChild(newLine);
    }
  }

  function startNewGame() {
    gameStatus.gameOver = false;
    gameOverWarning.classList.add('hideGameOverWarning');
    gameOverWarning.classList.remove('aliveShip');
    gameOverWarning.classList.remove('sunkShip');

    player1 = new Player('player', 'Seahero', true);
    player2 = new Player('pc', 'AIinside', false);

    gameboard1 = new Gameboard();
    gameboard2 = new Gameboard();

    gameboard1.generateShips();
    gameboard2.generateShips();

    renderPlayerField();
    renderEnemyField();
  }

  function selectField() {
    if (player1.turn) {
      enemyField.classList.add('fieldSelector');
      playerField.classList.remove('fieldSelector');
    } else if (player2.turn) {
      playerField.classList.add('fieldSelector');
      enemyField.classList.remove('fieldSelector');
    }
  }

  function changeTurns() {
    player1.changeTurn();
    player2.changeTurn();
    selectField();
  }

  function showGameOverMessage(youLose) {
    gameOverWarning.classList.remove('hideGameOverWarning');
    if (youLose) {
      gameOverWarning.textContent = 'You lose!';
      gameOverWarning.classList.add('sunkShip');
      renderEnemyField(true);
    } else {
      gameOverWarning.textContent = 'You won! Сongratulations!';
      gameOverWarning.classList.add('aliveShip');
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
        showGameOverMessage(true);
      } else if (resultOfAttack.shipWasSunk) {
        player2.clearShotsWhenEnemySunk();
        setTimeout(enemyTurn, 750);
      } else if (resultOfAttack.hitStatus) {
        player2.addSuccessShot(target);
        setTimeout(enemyTurn, 750);
      } else {
        changeTurns();
      }
    }
  }

  function playerTurn(event) {
    if (gameStatus.gameOver || event.target.classList[0] !== 'cell') {
      return;
    }
    if (player1.turn) {
      const targetFromDOM = event.target.classList[1].split('-');
      const line = targetFromDOM[1];
      const column = targetFromDOM[2];
      const resultOfAttack = gameboard2.receiveAttack([+line, +column]);
      renderEnemyField();
      if (resultOfAttack.gameOverStatus) {
        gameStatus.gameOver = resultOfAttack.gameOverStatus;
        showGameOverMessage(false);
      } else if (!resultOfAttack.hitStatus) {
        changeTurns();
        setTimeout(enemyTurn, 500);
      }
    }
  }

  startNewGame();

  newGameBtn.addEventListener('click', startNewGame);
  enemyField.addEventListener('click', playerTurn);
}());
