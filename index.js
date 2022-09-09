const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
	let inputValue = inputEl.value;

	// Length
	lengthEl.textContent = `${inputValue} meters = ${(
		inputValue * meterToFeet
	).toFixed(3)} feet | ${inputValue} feet = ${(
		inputValue / meterToFeet
	).toFixed(3)} meters`;

	// Volume
	volumeEl.textContent = `${inputValue} liters = ${(
		inputValue * literToGallon
	).toFixed(3)} gallons | ${inputValue} gallons = ${(
		inputValue / literToGallon
	).toFixed(3)} liters`;

	// Mass
	massEl.textContent = `${inputValue} kilos = ${(
		inputValue * kiloToPound
	).toFixed(3)} pounds | ${inputValue} pounds = ${(
		inputValue / kiloToPound
	).toFixed(3)} kilos`;
});
