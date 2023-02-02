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
			itttag[i].style = 'display: block;';
			itttag[i].name = 'sus';
		}

	} else {
		console.log('There is zero of <itt></itt> elements');
	}
}

function ittConvert(id, imgurl, key) {
	var canvs = document.createElement('canvas');
	//<canvas id="myCanvas" width="750" height="500">your canvas loads here</canvas>
	
	canvs.id = 'itt-' + id + 'can';
	canvs.width = 750;
	canvs.height = 500;
	canvs.innerHTML = 'Sorry but your browser does not support this';
	document.getElementById('itt-' + id).appendChild(canvs);

	var canvas = document.getElementById('itt-' + id + 'can');
	var ctx = canvas.getContext('2d');

	var myImage = new Image();
	myImage.src = 'https://images.unsplash.com/photo-1572800578930-fd1013b506c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
	myImage.onload = function(){
		ctx.drawImage(myImage,0,0,canvas.width,canvas.height);
	};

}

function ittUniConv(text) {
	let encodedString = "";
	
	for (let i = 0; i < text.length; i++) {
		let hexCode = text.charCodeAt(i).toString(16).toUpperCase();
		encodedString += "\\u" + ("000" + hexCode).slice(-4);
	}

	return encodedString;
}