var date = new Date();

function formatTime(date) {
	var hour = date.getHours();
	if ( hour < 10 ) { hour = "0" + hour; }
	var minute = date.getMinutes();
	if ( minute < 10 ) { minute = "0" + minute; }
	var second = date.getSeconds();
	if ( second < 10 ) { second = "0" + second; }

	return hour + ":" + minute + ":" + second;
}

alert(formatTime(date));
