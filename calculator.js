$(document).ready(() => {
	var firstNum = "";
	var secondNum = "";
	var operator = "";
	var result;
	var isOpChosen;
	var calculated;

	// User input number listener
	$(".number").on("click", function() {
		if(calculated){
			return;
		}
		else if(isOpChosen){
			secondNum += this.value;
			$("#second-number").html(secondNum);
		}
		else{
			firstNum += this.value;
			$("#first-number").html(firstNum);
		}
	});

	// User input operator listener
	$(".operator").on("click", function() {
		if(!calculated || firstNum !== ""){
			isOpChosen = true;
			operator = this.value;
			$("#operator").html($(this).text());
		}
	});

	// Clears values when clear btn is pressed
	$(".clear").on("click", clear);

	// Does caluculation when = is pressed
	$(".equal").on("click", runCalcu);

	function runCalcu() {
		switch(operator) {
			case "plus":
				result = parseInt(firstNum) + parseInt(secondNum);
				$("#result").html(result);
				calculated = true;
				break;
			case "minus":
				result = parseInt(firstNum) - parseInt(secondNum);
				$("#result").html(result);
				calculated = true;
				break;
			case "divide":
				result = parseInt(firstNum) / parseInt(secondNum);
				$("#result").html(result);
				calculated = true;
				break;
			case "times":
				result = parseInt(firstNum) * parseInt(secondNum);
				$("#result").html(result);
				calculated = true;
				break;
			case "power":
				result = Math.pow(parseInt(firstNum), parseInt(secondNum));
				$("#result").html(result);
				calculated = true;
				break;
		}
	}

	function clear() {
		firstNum = "";
		secondNum = "";
		operator = "";
		result;
		isOpChosen = false;
		calculated = false;

		$("#first-number").empty();
		$("#second-number").empty();
		$("#operator").empty();
		$("#result").empty();
	}


});