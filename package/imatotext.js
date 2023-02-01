//This script is made by zahadneokurkycz

window.onload = function(){
	ittStart();
}

function ittStart() {
	if (document.querySelectorAll('itt').length > 0) {
		console.log('Found ' + document.querySelectorAll('itt').length + ' Elements')

		//Init
		var itttag = document.querySelectorAll('itt');

		for (let i = 0; i < itttag.length; i++) {
  			itttag[i].id = 'itt-' + i;
			itttag[i].style = 'display: none;';
			itttag[i].name = 'sus';
		}

	} else {
		console.log('There is zero of <itt></itt> elements');
	}
}

function ittConvert(id, imgurl, key) {
	
}

function ittUniConv(text) {
	let encodedString = "";
	
	for (let i = 0; i < text.length; i++) {
		let hexCode = text.charCodeAt(i).toString(16).toUpperCase();
		encodedString += "\\u" + ("000" + hexCode).slice(-4);
	}

	return encodedString;
}