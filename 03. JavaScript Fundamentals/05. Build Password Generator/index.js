const passwordEls = document.querySelectorAll(".password");
const lengthDisplay = document.getElementById("length-display");
const rangeSlider = document.getElementById("myRange");

rangeSlider.addEventListener("input", () => {
  const length = rangeSlider.value;
  lengthDisplay.innerText = `Length: ${length}`;
});

function generatePassword(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }
  return password;
}

function generatePasswords() {
  const length = rangeSlider.value;
  passwordEls.forEach((el) => (el.innerText = generatePassword(length)));
}

function copy() {
  document.querySelectorAll(".password").forEach((el) => {
    el.addEventListener("click", () => {
      navigator.clipboard.writeText(el.innerText);
    });
  });
}

document.addEventListener("DOMContentLoaded", copy);
