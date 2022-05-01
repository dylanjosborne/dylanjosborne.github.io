/*Start-Clear Value*/
var equalPress = 0;

/*Input of numbers and values*/
function numberInput(inputValues)
{
	/*Text from buttons to display*/
	var textBox = document.getElementById("display");

	/*if & else statements to combine numbers with values*/
	/*Pg 87 (Chp 3 if / else / else if - statements) */
	if(inputValues == 'answer')
	{
		/*validate value to text*/
		validate(textBox.value);
		/*window object display - reference pg 63*/
		window.equalPress = 1;
	}
	
	/**/
	/*pressing equal will equal a value - pg 85*/
	else if(equalPress == 1){
		clearDisplay();
		/*window object*/
		window.equalPress = 0;
		/*display value to additional values to be included*/  
		textBox.value += inputValues;
	}
	
	else
	/*If all else fails*/
	{
		textBox.value += inputValues;
	}
}
/*function to calculate the equation for an answer*/
function calculateAnswer(equation)
{
/* Use the JavaScript function eval( ) to perform the math */
		/*Built equation to solution */
	var answer = eval(equation);
		/*Solution to display*/
	var textBox = document.getElementById("display");
		/*Answer to display*/
	textBox.value = answer;
}

/* Use the JavaScript function eval( ) to perform the math */	
function validate(equation)
{
	/*Calculating the display*/
	calculateAnswer(equation);
}
 
/*Need a button to clear the display button*/
function clearDisplay()
{
	/*Clearing of text from display*/
	var textBox = document.getElementById("display");
	/* Display to blank */
	textBox.value = '';
}