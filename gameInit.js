// global variables
let eligibleWords = commonWords.filter(word => word.length >= 3)
let randomWord = eligibleWords[Math.floor(Math.random() * eligibleWords.length)];

// game Init module
function gameInit(word) {
  const guess = () => {
    let playerGuess = document.querySelector("#word").innerHTML

    if (playerGuess === word) {
      console.log("you win")
    } else {
      console.log("wrong guess")
    }
  }



  return {
    guessFunc: guess,
    winningWord: word
  }
}

var game = gameInit(randomWord)



/* game has to choose a random word */
