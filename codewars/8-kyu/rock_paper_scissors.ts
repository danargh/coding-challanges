console.log(rps("scissors", "paper"));

const beats: { [index: string]: string } = {
    scissors: "paper",
    paper: "rock",
    rock: "scissors",
};

function rps(p1: string, p2: string): string {
    // my solution
    // switch (p1) {
    //    case 'rock':
    //       if (p2 === 'paper') {
    //          return 'Player 2 won!';
    //       } else if (p2 === 'scissors') {
    //          return 'Player 1 won!';
    //       } else {
    //          return 'Draw!';
    //       }
    //    case 'paper':
    //       if (p2 === 'scissors') {
    //          return 'Player 2 won!';
    //       } else if (p2 === 'rock') {
    //          return 'Player 1 won!';
    //       } else {
    //          return 'Draw!';
    //       }
    //    case 'scissors':
    //       if (p2 === 'paper') {
    //          return 'Player 1 won!';
    //       } else if (p2 === 'rock') {
    //          return 'Player 2 won!';
    //       } else {
    //          return 'Draw!';
    //       }
    //    default:
    //       break;
    // }
    // return '';

    // best solution :
    if (p1 === p2) return "Draw!";
    if (beats[p1] == p2) return "Player 1 won!";
    return "Player 2 won!";
}
