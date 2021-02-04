/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = createPhrases();
     this.activePhrase = 'null';
   }
 }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

 const createPhrases = () => {
   const phraseArray = [];
   phraseArray.push({phrase: 'Every moment is a fresh beginning'});
   phraseArray.push({phrase: 'All limitations are self imposed'});
   phraseArray.push({phrase: 'Strive for greatness'});
   phraseArray.push({phrase: 'And still I rise'});
   phraseArray.push({phrase: 'When words fail music speaks'});

   return phraseArray;

 }

const getRandomPhrase = () => {
   return phrases[Math.floor(Math.random * phrases.length())];
}




 