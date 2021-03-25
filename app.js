//1. create variables for each
//element we need to ineracti with
const nameInput = document.getElementById('name-input');
const inputButton = document.getElementById('input-button');
const nameDisplay = document.getElementById('name-Display');
//2. add listeners for events we care about
inputButton.addEventListener('click', () => {
//3. do the action
console.log(nameInput.value);
nameDisplay.textContent = nameInput.value;
});
//Example of sying on input change (any text change):
//greetinginput.addEventListener('input', () => 
// //3. do the action
// greetingDisplay.textContent = greetingInput.value;
// });
const pinkButton = document.getElementById('pink-button');
const greenButton = document.getElementById('green-button');
const blueButton = document.getElementById('blue-button');
const nameTag = document.getElementById('name-tag');
//2. add listeners for events we care about
pinkButton.addEventListener('click', () => {
//3. do the action

