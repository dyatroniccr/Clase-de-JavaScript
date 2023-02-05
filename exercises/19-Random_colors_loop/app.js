function getColor(colorNumber = 0) {
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {
    
	//your loop here
	let salidaFunct = 10;
	let exampleColor = getColor(1);
	while (salidaFunct > 0) {
		let numberStudent = Math.floor(Math.random()*10 + 1)
		exampleColor = getColor(numberStudent);
		if (exampleColor != "black") {
			console.log(exampleColor);
		    salidaFunct --;
		}		
	}	
}


//call the function below with the number of students in the class and print on the console
getAllStudentColors();

