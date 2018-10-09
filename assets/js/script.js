// NUMBER AS PARAMETER
// function sayHello(num) { // num is a variable. you can replace the name
// 	//DECLARE FUNCTION
// 	for(i = 1; i <= num; i++){
// 		console.log('helloooooooo');
// 	}
// }

// CALL/DISPLAY FUNCTION
// sayHello(10);


// STRING AS PARAMETER
// function sayHi(letter) { // letter is a variable. you can replace the name
// 	for(i = 1; i <= 5; i++){
// 		console.log(letter);
// 	}
// }

// sayHi('maganda ako');


// MULTIPLE & VARIED PARAMETERS
// function sayHehe(letter, num) {
// 	for(i = 1; i <= num; i++){
// 		console.log(letter);
// 	}
// }

// sayHehe('A', 10);


// COMPUTE
// function compute(num1, num2) {
// 	console.log(num1 + num2);
// }

// compute (5,10);


// ============= EXERCISE

//define function
function input(character, num) {
	document.getElementById('displayOutput').innerHTML = ""; // TO CLEAR PREVIOUS RESULT
	for (let i = 1; i <= num; i++) {
		document.getElementById('displayOutput').innerHTML += character + '<br>';
	}
}

//who, what
document.getElementById('btnDisplay').onclick = () => {
	let varChar = document.getElementById('enterCharacter').value;
	let varCol = document.getElementById('enterColumn').value;
	input(varChar, varCol); //call/display function // where is indicated within the function already
}

//  CLEAR
document.getElementById('btnClear').onclick = () => {
	document.getElementById('enterCharacter').value = "";
	document.getElementById('enterColumn').value = "";
	document.getElementById('displayOutput').innerHTML = "";
}

