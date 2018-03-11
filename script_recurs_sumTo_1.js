function sumTo() {
	var number = prompt("Введите натуральное число", "");

	function sum(n) {
		if ( n > 1 ) {
			return sum(n-1) + n;
		}
		return n;
	}

	alert(sum(+number));
}