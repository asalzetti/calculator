var currval = "";
var oper = "";
var firstval = "";
			
function show(num) {
	currval += num;
	display(currval);
}
			
function display(num) {
	var node = document.getElementById("display");
	node.value = num;
}
			
function operator(op) {
	if(oper !== ""){
		equals();
	}
	oper = op;	
	firstval = currval;
	currval = "";
}
			
function equals() {
	if(firstval !== ""){
		var endval = eqsign(Number(firstval), Number(currval), oper);
		currval = endval;
	}
	oper = "";
	firstval = "";
	display(currval);
}
			
function eqsign(num1, num2, op) {
	if(op == "+")
		return num1 + num2;
	else if(op == "-")
		return num1 - num2;
	else if(op == "*")
		return num1 * num2;
	else if(op == "/")
		return num1 / num2;
}
