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

	function runCalcu() {
		switch(operator) {
			case "plus":
				result = firstNum + secondNum;
				break;
			case "minus":
				result = firstNum - secondNum;
				break;
			case "divide":
				result = firstNum / secondNum;
				break;
			case "times":
				result = firstNum * secondNum;
				break;
			case "power":
				result = Math.pow(parseInt(firstNum), parseInt(secondNum));
				break;
		}
	}

	function clear() {
		var firstNum = "";
		var secondNum = "";
		var operator = "";
		var result;
		var isOpChosen;
		var calculated;

		$("#first-number").empty();
		$("#second-number-number").empty();
		$("#operator").empty();
		$("#result").empty();
	}


});