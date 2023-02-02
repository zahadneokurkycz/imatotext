//This script is made by zahadneokurkycz

const keyver = [1,2];

var cryptomin = document.createElement('script');
cryptomin.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js';
document.head.appendChild(cryptomin);

window.onload = function(){
	ittStart();
}

function decrypt(text, key) {
	let decrypt = CryptoJS.AES.decrypt(text, key);
    decrypt = decrypt.toString(CryptoJS.enc.Utf8);
	return decrypt;
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

function ittConvert(id, imgurl, formate, keyv, key) {
	var keyvervalid = keyver.filter(function(value){
		return value == keyv;
	});

	if (keyvervalid == true) {

		var canvs = document.createElement('canvas');
	
		canvs.id = 'itt-' + id + 'can';
		canvs.width = 750;
		canvs.height = 500;
		canvs.innerHTML = 'Sorry but your browser does not support this';
		document.getElementById('itt-' + id).appendChild(canvs);

		var canvas = document.getElementById('itt-' + id + 'can');
		var ctx = canvas.getContext('2d');

		var img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = imgurl;
		img.onload = function(){
			ctx.drawImage(img,0,0,canvas.width,canvas.height);
		};

		if (formate == 'jpg') {
			var imgurl = canvas.toDataURL("image/jpeg");
			//document.getElementById('itt-' + id).innerHTML = null;
			return imgurl;
		} else {
			//png here :)
			var imgurl = canvas.toDataURL();
			//document.getElementById('itt-' + id).innerHTML = null;
			return imgurl;
		}
	}
}


function ittUniConv(text) {
	let encodedString = "";
	
	for (let i = 0; i < text.length; i++) {
		let hexCode = text.charCodeAt(i).toString(16).toUpperCase();
		encodedString += "\\u" + ("000" + hexCode).slice(-4);
	}

	return encodedString;
}

function ittTestCvrt() {
	let url = 'https://images.unsplash.com/photo-1572800578930-fd1013b506c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
	let key = 'your_mom';
	let formate = 'jpg';
	let keyv = 0;
	let id = 0;
	console.log(ittConvert(id, url, formate, keyv, key));
}