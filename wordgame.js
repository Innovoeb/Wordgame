


  // pick a random word in the commonWords array
  let randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
  let numberOfGuesses = document.querySelector("guess-digits")


  // console log input from #word after player submits input
//  let huh = () => {
//    let value = document.querySelector("#word").value;
//    console.log(value)
//  }


  // if player input === randomWord then log congrats message
  const guess = () => {
    let value = document.querySelector("#word").value;

    if (value === randomWord) {
      console.log("you win")
    } else {
      console.log("wrong word");
      document.querySelector("#guess-digits").innerHTML = "9"
    }
  }

  // function that displays underscores for how many letters are in the randome word
  const underScores = () => {
    
  }
