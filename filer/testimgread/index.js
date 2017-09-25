var bild = 'screen.jpg';
var small = 'ny/siffror.jpg'

var Jimp = require("jimp");
var imageToTextDecoder = require('image-to-text');

//Your key registered from cloudsightapi @ https://cloudsightapi.com 
//image.crop( x, y, w, h );

var achivements = ['Jogger', 'Kanto', 'Collector', 'Scientist', 'Breeder', 'Backpacker', 'Battle Girl', 'Ace Trainer', 'Johto', 'Berry Master', 'Gym Leader', 'Fisherman', 'Youngster', 'Pikachu Fan', 'Unown', 'Champion', 'Legendary Pokémon', 'Travel']

function readrubrik(bild, small){
	var rubrik = {
		name: bild,
		path: './'
	};
	var key = 'ztEX9VMpdh3YbmiGfvlLDA';
	imageToTextDecoder.setAuth(key);
	imageToTextDecoder.getKeywordsForImage(rubrik).then(function(keywords){
		findrubrik(keywords, bild, small);
	},function(error){
		console.log(error);
	});
};

function findrubrik(data, bild, small){
	if(data.indexOf('Game') != -1){
		cropxpodatum(bild, small);
	}else{
		for (var i = achivements.length - 1; i >= 0; i--) {
			if(data.indexOf(achivements[i]) != -1){
				cropbadge(achivements[i], bild, small);
			};
		};
	};
};

function cropxpodatum(bild, small){
	Jimp.read(bild, function (err, image) {
		this.resize(750, 1334).greyscale().normalize().crop( 50, 1000, 400, 180 ).write(small, function(){
			readxpodatum(bild, small);
		});
	});
};

function readxpodatum(bild, small){
	var file = {
		name: small,
		path: ''
	};
	var key = 'ztEX9VMpdh3YbmiGfvlLDA';
	imageToTextDecoder.setAuth(key);
	imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
		printxpodatum(keywords);
	},function(error){
		console.log(error);
	});
};

function printxpodatum(keywords){
	var datum = '';
	var xp = '';
	var split = keywords.split(' ');
	for (var i = split.length - 1; i >= 0; i--) {
		if(split[i] == 'Date'){
			var datum = split[i + 1];
		}else if(split[i] == 'XP'){
			var xp = split[i + 1];
		};
	};
	if(!datum || !xp || datum == '' || xp == ''){}else{
		console.log('{"xp": "' + xp + '", "datum": "' + datum + '"}');
	};
}
function cropbadge(rubrik, bild, small){
	Jimp.read(bild, function (err, image) {
		this.resize(750, 1334).greyscale().normalize().crop( 230, 650, 280, 119 ).write(small, function(){
			readtext(rubrik, bild, small);
		});
	});
};

function readtext(rubrik, bild, small){
	var file = {
		name: small,
		path: ''
	};
	var key = 'ztEX9VMpdh3YbmiGfvlLDA';
	imageToTextDecoder.setAuth(key);
	imageToTextDecoder.getKeywordsForImage(file).then(function(keywords){
		findnummer(rubrik, bild, small, keywords);
	},function(error){
		console.log(error);
	});
};

function findnummer(rubrik, bild, small, data){
	var datatonummer = data.split(' ')[0].replace(/,/g, '');
	print(rubrik, datatonummer);
};

function print(rubrik, datatonummer){
	var kod = '{"rubrik": "' + rubrik + '", "nummer": "' + datatonummer + '"}';
	console.log(kod);
};

readrubrik(bild, small);






