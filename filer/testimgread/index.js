var port = 4444;
var index = 'index.html';

var bild = 'screen.jpg';
var small = 'ny/siffror.jpg'

var http = require('http');
var fs = require('fs');
var Jimp = require("jimp");
var dl  = require('delivery');
var path = require('path');
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





//Startar server och tillåtna filer
var server = http.createServer(function (request, response) {
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = index;
    //Här radas alla tillåtna filer
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }
    //Säger till server att läsa och skicka fil till klient (Möjlighet att lägga till felmeddelanden)
    fs.readFile('./' + filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

});

// Loading socket.io
var io = require('socket.io').listen(server);
/*io.sockets.on('connection', function (socket, username) {
	// When the client connects, they are sent a message
	socket.emit('message', 'You are connected!');
	// The other clients are told that someone new has arrived
	socket.broadcast.emit('message', 'Another client has just connected!');
	//Går igång när användare försöker logga in som admin
	socket.on('savenewusers', function(data) {
		//socket.emit('adminsparad', 'Ja!');
	});
});*/
io.sockets.on('connection', function(socket){
  var delivery = dl.listen(socket);
  delivery.on('receive.success',function(file){
    var params = file.params;
    /*console.log(params);
    console.log(file.name);
    console.log(file.buffer);*/
    fs.writeFile(bild,file.buffer, function(err){
      if(err){
        console.log('File could not be saved.');
      }else{
        console.log('File saved.');
        readrubrik(bild, small);
      };
    });
  });
  /*delivery.on('delivery.connect',function(delivery){
 
    delivery.send({
      name: 'sample-image.jpg',
      path : './sample-image.jpg',
      params: {foo: 'bar'}
    });
 
    delivery.on('send.success',function(file){
      console.log('File successfully sent to client!');
    });
 
  });*/
});
server.listen(port);