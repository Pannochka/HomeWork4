function writeNumInterv() {
  	var i = 1;
  	var timerId = setInterval(function() {
							    console.log(i);
							    if (i >= 20) { 
							    	clearInterval(timerId);
							    }
							    i++;
							}, 100);
}

writeNumInterv();