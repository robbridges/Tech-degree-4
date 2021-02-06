/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = 'null';
   }
 
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

 createPhrases() {
   const phraseArray = [];
   phraseArray.push(new Phrase('Every moment is a fresh beginning'));
   phraseArray.push(new Phrase('All limitations are self imposed'));
   phraseArray.push(new Phrase('Strive for greatness'));
   phraseArray.push(new Phrase('And still I rise'));
   phraseArray.push(new Phrase('When words fail music speaks'));

   return phraseArray;

 }
 /*
 gets a random phrase from the createPhrases method that we assigned the objects phrase property too
 */
 getRandomPhrase() {
   return this.phrases[Math.floor( Math.random() * this.phrases.length)];
 }
 /*
 First action of the game, it is wired to the start game button on the origional overlay
 */
 startGame() {
   const startOverlay = document.querySelector('#overlay');
   startOverlay.style.display = 'none';
   this.activePhrase = this.getRandomPhrase();
   this.activePhrase.addPhraseToDisplay();
 }
 /*
 Checks to see if no elements remain with the hidden class, if they do not, the user has won the game.
 */
 checkForWin() {
   const stillHidden =document.querySelectorAll(`.hide`);
   return !stillHidden.length;
 }
 /*
 updates the heart icon to a lost heart icon if the guess is incorrect
 */
 removeLife() {
   const lives = document.querySelector("img[src='images/liveHeart.png']");
   lives.src = 'images/broken-heart.png';
   this.missed ++;
 }
 /*
 Game over method, based on the value passed into it we could see changes based on the overlay screen
 @Params won (boolean) boolean passed in to dictate what happens when the styling of the overlay
 */
 gameOver(won) {
   const startOverlay = document.querySelector('#overlay');
   const gameOverMessage = document.querySelector('#game-over-message');
   if (!won) {
    startOverlay.className = 'lose';
    gameOverMessage.textContent = 'You have lost, but feel free to try again!';
    startOverlay.style.display = '';
   } if(won) {
     startOverlay.className = 'win';
     gameOverMessage.textContent ='You have won, congratulations!';
     startOverlay.style.display = '';
   }
   this.reset();

 }
 /*
 Handles the interaction when a letter is clicked. Rather that be displaying a letter or removing one of hte lives from the player. Tracks the game's internal state
 @Param button {element} synced to onclick listener based on what happens next 
 */
 handleInteraction(button) {
   button.setAttribute('disabled', true);
   if (this.activePhrase.checkLetter(button.textContent)) {
    button.className = 'chosen';
    this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
      this.gameOver(true);
    }
   } else {
     button.className = 'wrong';
     game.removeLife();
     if (this.missed === 5) {
      this.gameOver(false);
    }
   }
 }

 /*
 Resets the game back to it's origional state so that the user can begin a fresh game. 
 */
 reset() {
   this.missed = 0;
   const letterLi = document.querySelectorAll('#phrase li');
   const keyboardButtons = document.querySelectorAll('button');
   const lostLives = document.querySelectorAll("img[src='images/broken-heart.png']");
   letterLi.forEach(li => li.remove());
   if (keyboardButtons.textContent !== 'Start Game') {
   keyboardButtons.forEach(button => {
     button.className = 'key';
     button.removeAttribute('disabled');
   });
  }
   lostLives.forEach( lives => lives.src ='images/liveHeart.png');
 }





}
 






 