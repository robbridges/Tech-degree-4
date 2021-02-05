/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game = 'null';
const resetButton = document.querySelector('#btn__reset');
resetButton.addEventListener('click', e => {
  game = new Game();
  game.startGame();
})






