var number = prompt("Введите натуральное число", "");

function writeRec(num) {
	if ( num == 1 ) {
		return num;
	}
	return writeRec(num-1)+" "+ num;
}

document.write(writeRec(number));
