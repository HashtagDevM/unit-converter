let numEl = document.getElementById("input-el");
numEl.textContent = numEl;

function convert() {
	let input = numEl.value;

	// Length
	let meter = input * 3.281;
	let feet = input / 3.281;

	let lengthEl = document.getElementById("length-el");

	lengthEl.textContent = `${input} meters = ${feet.toFixed(
		3
	)} feet | ${input} feet = ${meter.toFixed(3)} meters`;

	// Volume
	let liters = input / 3.785;
	let gallons = input * 3.785;

	let volumeEl = document.getElementById("volume-el");

	volumeEl.textContent = `${input} liters = ${gallons.toFixed(
		3
	)} gallons | ${input} gallons = ${liters.toFixed(3)} liters`;

	// Mass
	let kilograms = input * 2.205;
	let pounds = input / 2.205;

	let massEl = document.getElementById("mass-el");

	massEl.textContent = `${input} kilograms = ${pounds.toFixed(
		3
	)} pounds | ${input} pounds = ${kilograms.toFixed(3)} kilograms`;
}
