//This script is made by zahadneokurkycz

object.onload = function(){
	ittStart();
};

function ittStart() {
	if (document.querySelectorAll('itt').length > 0) {
		console.info('Found ' + document.querySelectorAll('itt').length + ' Elements')
	} else {
		console.warn('There is zero of <itt></itt> elements');
	}
}
