$(document).ready(() => {
	var firstNum = "";
	var secondNum = "";
	var operator = "";
	var isOpChosen;
	var calculated;

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

	$(".operator").on("click", function() {
		if(calculated){
			return;
		}
		else if(firstNum !== ""){
			isOpChosen = true;
			operator = this.value;
			$("#operator").html($(this).text());
		}
	});



});