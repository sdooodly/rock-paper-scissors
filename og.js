// const getComputerChoice = () => {
//     //generating number b/w 0,1,2
//     const randomNumber = Math.floor(Math.random() * 3)
//     const returned =
//       randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors'
//     return returned
//   }
  
//   console.log(getComputerChoice())
  
//   const playRound = (playerSelection, computerSelection) => {
//     if (playerSelection.toLowerCase() === computerSelection) {
//       return 'It is a tie! Badamtush!'
//     } else if (playerSelection.toLowerCase() === 'rock') {
//       return computerSelection === 'scissors'
//         ? 'Rock beats scissors, you win!'
//         : 'Paper beats rock, you lose!'
//     } else if (playerSelection.toLowerCase() === 'paper') {
//       return computerSelection === 'rock'
//         ? 'Paper beats rock, you win!'
//         : 'Scissors beat paper, you lose!'
//     } else {
//       return computerSelection === 'rock'
//         ? 'Rock beats scissors, you lose!'
//         : 'Scissors beat paper, you win!'
//     }
//   }
  
//   const playerSelection = 'rock'
//   const computerSelection = getComputerChoice()
//   console.log(playRound(playerSelection, computerSelection))
  
//   const game = () => {
//     for (let i = 0; i < 5; i++) {
//       const playerSelection = prompt(`Round ${i}. Enter your choice,`)
//       const computerSelection = getComputerChoice()
//       console.log(playRound(playerSelection, computerSelection))
//     }
//   }


