let numEl = document.getElementById("num-el");
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
	let liter = input / 3.785;
	let gallon = input * 3.785;

	let volumeEl = document.getElementById("volume-el");

	volumeEl.textContent = `${input} liters = ${gallon.toFixed(
		3
	)} gallons | ${input} gallons = ${liter.toFixed(3)} liters`;

	// Mass
	let kilo = input * 2.205;
	let pound = input / 2.205;

	let massEl = document.getElementById("mass-el");

	massEl.textContent = `${input} kilos = ${pound.toFixed(
		3
	)} pounds | ${input} pounds = ${kilo.toFixed(3)} kilos`;
}
