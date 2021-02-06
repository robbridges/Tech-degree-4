/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const letterLIs = document.querySelector('#phrase').firstElementChild.childNodes

let game = 'null';
const resetButton = document.querySelector('#btn__reset');
resetButton.addEventListener('click', e => {
  game = new Game();
  game.reset();
  game.startGame();
  
  
})
/*
Adds the event listeners to the game TODO: Finish key up listener
*/
const eventListeners = () => {
  const letterButtons = document.querySelectorAll('.key');
  letterButtons.forEach( button => button.addEventListener('click', e => game.handleInteraction(button)));
  
  document.addEventListener('keyup', e => {
    letterButtons.forEach( button => {
      if (button.textContent === e.key && !button.disabled && !game.checkForWin() && game.missed !== 5)
        game.handleInteraction(button);
    });
  });
}



 eventListeners();
