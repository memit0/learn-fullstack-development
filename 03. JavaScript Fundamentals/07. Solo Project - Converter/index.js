const convertBtn = document.getElementById("convert-btn");
const inputBox = document.getElementById("unit-input-number");

convertBtn.addEventListener("click", () => convertNumber(inputBox.value));

function convertNumber(val) {
  console.log("Clicked");
  // Length
  let feet = val * 3.28084;
  let meters = val / 3.28084;

  // Volume (US)
  let gallons = val * 0.264172;
  let liters = val / 0.264172;

  // Weight
  let pounds = val * 2.20462;
  let kilograms = val / 2.20462;

  const lengthText = document.getElementById("length-text");
  const volumeText = document.getElementById("volume-text");
  const massText = document.getElementById("mass-text");

  lengthText.innerHTML = `${val} meter(s) = ${feet} feet | ${val} feet = ${meters} meters`;
  volumeText.innerHTML = `${val} liters = ${gallons} gallons | ${val} gallons = ${liters} liters`;
  massText.innerHTML = `${val} kilos = ${pounds} pounds | ${val} pounds = ${kilograms} kilos`;
}
