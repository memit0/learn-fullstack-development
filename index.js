// Ternary operators

// const playGuess = 3;
// const correctAnswer = 6;

//const message =
//  playGuess > correctAnswer
//    ? (message = "Too high!")
//     : playGuess < correctAnswer
//       ? (message = "Too low!")
//       : (message = "Correct!");

// Switch statements

//function selectItem(item) {
//  let price = 0;

//  switch (item) {
//    case "coffee":
//      price = 2;
//    case "tea":
//      price = 1;
//    case "sandwich":
//      price = 5;
//    default: // Item inputted doesn't match any case
//      price = 0;
//  }
//  return "Your item is ${item}";
//}

const speedWarning = (speed, limit) => {
  return `you are going at ${speed > limit ? "over" : "under"} ${limit} mph!`;
};
