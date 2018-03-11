function writeNumIntervRecurs() {
  var i = 1;
  var timerId = setTimeout(function startWrite() {
					    console.log(i);
					    if (i < 20) {
					    	setTimeout(startWrite, 100);
					    }
					    i++;
					  }, 100);
}

writeNumIntervRecurs();
