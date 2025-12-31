let homeScore = 0;
let guestScore = 0;

function incrementHomeByOne() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
}

function incrementHomeByThree() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
}

function incrementHomeByFive() {
  homeScore += 5;
  document.getElementById("home-score").textContent = homeScore;
}

function incrementGuestByOne() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
}

function incrementGuestByThree() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
}

function incrementGuestByFive() {
  guestScore += 5;
  document.getElementById("guest-score").textContent = guestScore;
}
