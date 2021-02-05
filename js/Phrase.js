/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(phrase) {
    this.phrase=phrase.toLowerCase(); 
  }

  /*
  this adds the phrase to the game board, hiding the letters.
  */
  addPhraseToDisplay() {
    const phraseList = document.querySelector('#phrase');
    for (let i=0; i < this.phrase.length; i++) {
      const letterLi = document.createElement('li')
      letterLi.textContent = this.phrase[i];
      this.phrase[i] === ' '? letterLi.className = ('space') : letterLi.className =(`hide letter ${this.phrase[i]}`);
      
      phraseList.insertAdjacentElement("beforeend", letterLi);
    }
  }
  /*
  Checks to see if the letter is included in the phrase.
  @Param {char} the letter to check is contained in the phrase
  */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /*
  If a letter is included in the phrase this method goes through and changes the class name to show that letter
   @Param {char} the letter to check to show in the phrase
  */
  showMatchedLetter(letter) {
    const letters =document.querySelectorAll(`.${letter}`);
    if (this.checkLetter(letter)) {
      letters.forEach(letter => letter.className = `show letter ${letter}`);
    }
  }
 }
 
