import './style.css';
import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

(function Game() {
  game = {
    activePlayer = 
  };

  function startNewGame() {
    const player1 = new Player('player', 'Seahero');
    const player2 = new Player('pc', 'AIinside');
  
    const gameboard1 = new Gameboard();
    const gameboard2 = new Gameboard();
  
    gameboard1.generateShips();
    gameboard2.generateShips();
  }

  startNewGame();
})();
