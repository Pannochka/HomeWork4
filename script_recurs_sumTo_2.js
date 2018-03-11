function sumTo() {
	var number = +prompt("Введите натуральное число", "");

	function sum(n) {
		var sum = 0;
		for ( var i = 1; i <= n; i++){
			sum += i;
		}
		return sum;
	}

	alert(sum(number));
}
sumTo();