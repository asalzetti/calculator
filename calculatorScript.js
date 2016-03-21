var val = "";
var oper = "";
var firstval = "";
			
function show(num) {
	val += num;
	display(val);
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
	firstval = val;
	val = "";
}
			
function equals() {
	if(firstval !== ""){
		var endval = eqsign(Number(firstval), Number(val), oper);
		val = endval;
	}
	oper = "";
	firstval = "";
	display(val);
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