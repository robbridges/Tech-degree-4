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
   const startOverlay = document.querySelector('.start');
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
 updates the heart icon to a lost heart icon TODO: replace with a different image
 */
 removeLife() {
   const lives = document.querySelector("img[src='images/liveHeart.png']");
   lives.src = 'images/lostHeart.png';
   this.missed ++;
   console.log(this.missed);
   if (this.missed === 5) {
     this.gameOver();
   }
 }
 
 gameOver() {
   console.log(`game over! sorry!`);
 }




}
 






 