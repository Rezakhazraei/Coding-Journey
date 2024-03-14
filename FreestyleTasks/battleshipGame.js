const prompt = require("prompt-sync") ();

// Create a function to print the menu
function printMenu() {
  console.log("--- Menu ---");
  console.log("1. Play the game");
  console.log("2. Print current date");
  console.log("3. End program");
}

// Main function to run the program
function main() {
  let choice;
  do {
    printMenu();
    choice = prompt("Enter your choice: ");
    switch (choice) {
      case "1":
        playGame();
        break;
      case "2":
        printCurrentDate();
        break;
      case "3":
        endProgram();
        break;
     }
      
     } while (choice !== "3" || !validateInput(choice));
 }
// Create the multidimensional array for the game board
let board = [
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*']
  ];
  
  // Set the positions of the ships in the game board
  const setShips = () => {
    // Set ship positions randomly
    for (let i = 0; i < 5; i++) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);
      board[row][col] = 'S'; // Mark ship positions with 'S'
    }
  };
  
  // Function to check if the game is over (all ships sunk)
  const isGameOver = () => {
    for (let i = 0; i < 9; i++) {
      if (board[i].includes('S')) {
        return false;
      }
    }
    return true;
  };
  
  // Function to shoot at a given position
  const shoot = (row, col) => {
    if (board[row][col] === 'S') {
      board[row][col] = 'X'; // Mark hit positions with 'X'
      return 'Hit!';
    } else if (board[row][col] === 'X') {
      return 'Already hit at this position!';
    } else {
      return 'Miss! Try again!';
    }
  } 

  // Function to play the game
  const playGame = () => {
    let shots = 0;
    setShips(); // Set ship positions
    let i = 0
    while (!isGameOver() && i <= 2) {
      i++;
      let row = prompt('Enter row (0-8):');
      let col = prompt('Enter column (0-8):');
    
      row = parseInt(row);
      col = parseInt(col);
  
      if (row >= 0 && row <= 8 && col >= 0 && col <= 8) {
        let result = shoot(row, col);
        console.log(result);
  
        shots++;
      } else {
        console.log('Invalid coordinates. Please try again!');
      }
    }
  
    console.log('Game over! You used ' + shots + ' shots.');
    let Enter = prompt("Do you want to continue?") 
    if (Enter == "y") {
      playGame()
    } else { Enter == "n"
    }
  };

  // Function to print the current date
function printCurrentDate() {
  const currentDate = new Date().toLocaleDateString();
  console.log("Current Date:", currentDate);
}

  // Function to end the program
function endProgram() {
  console.log("Ending program...");
  process.exit(0); // Exit the program
}

main();