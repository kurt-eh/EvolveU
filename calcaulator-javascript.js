function calculator () {

//Let the user know what we're doing

alert ("Let's do some math! If you enter 2 numbers, I can add, subtract, multiply, divide, find the remainder, or tell you which is bigger. All you have to do is tell me what function want to do.")

var a = prompt ("Please enter the first number"); //prompt first number
var b = prompt ("Please enter the second number");  //prompt second number

//Prompt for expression (+, -, *, /, >, <, or %)
var cal = prompt ("Please enter: \n + for addition, \n - for subtraction, \n * for multiplication, \n / for division \n % for remainder of first divided by second number \n > for greater than, or \n < for lesser than.");

function sum () {
	var add = (Number (a) + Number (b))
	alert (a + " + " + b + " = " + add); //calculates sum
	}
function diff () { 
		var sub = (Number (a) - Number (b))
		alert(a + " - " + b + " = " + sub); //calculates difference
	}
function prod () {
		var times = (Number (a) * Number (b))
		alert(a + " * " + b +" = " + times); //calculates product
	}
function quot () {
		var div = (Number (a) / Number (b))
		alert(a + " / " + b + " = " + div); //calculates quotient
	}
function rem () {
		var remain = (Number (a) % Number (b))
		alert ("The remainder is: " + remain); //calculates remainder a/b
	}
function gt () { 
	if(Number (a) > Number (b)) {
		alert (a + " > " + b);
	} else if (Number (b) > Number (a)){
	alert (b + " > " + a); }
	} // calculates which number is greater
function lt () {
	if(Number (a) < Number (b)) {
		alert (a + " < " + b);
	} else if (Number (b) < Number (a)){
		alert (b + " < " + a); }
	} // calculates which number is lesser


switch (cal) {  //call the appropriate function
	case "+":
		sum (a,b);
		break;
	case "-":
		diff (a,b);
		break;
	case "*":
		prod (a,b);
		break;
	case "/":
		quot (a,b);
		break;
	case "%":
		rem (a,b)
		break;
	case ">":
		gt (a,b);
		break;
	case "<":
		lt (a,b);
		break; 
	}
}

calculator () // script automatically calls the function

//ask to play again
var again = prompt ("Do you want to do more math? y or n")

do {
	calculator () 
	var again = prompt ("Do you want to do more math? y or n")
	} while (again == "y" ||again == "Y" ||again == "yes" ||again == "Yes" ||again == "YES" ) 
	alert ("Thank you, good bye!") //Any yes value will play again. Any other response teminates program
