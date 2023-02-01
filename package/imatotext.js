//This script is made by zahadneokurkycz

document.body.onload = function(){
	ittStart();
};

function ittStart() {
	if (document.querySelectorAll('itt').length > 0) {
		console.log('Found ' + document.querySelectorAll('itt').length + ' Elements')
	} else {
		console.log('There is zero of <itt></itt> elements');
	}
}
