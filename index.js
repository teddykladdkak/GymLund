const express = require('express')
const app = express()

var fs = require('fs')
var bodyParser = require('body-parser');
var Spritesmith = require('spritesmith');
var Jimp = require('jimp');
var Tesseract = require('tesseract.js')
const request = require('request');

// Gör att man kan läsa svar från klient med json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var param = {
	port: 9615,
	url: 'https://gymlund.tk/',
	keywords: '',
	area: [
		{
			rubrik: 'Lund',
			id: 'gymlund',
			lank: 'https://gymlund.tk/'
		},{
			rubrik: 'Göteborg',
			id: 'gymgbg',
			lank: 'https://gymlund.tk/gymgbg.html'
		},{
			rubrik: 'Landskrona',
			id: 'gymlandskrona',
			lank: 'https://gymlund.tk/gymlandskrona.html'
		},{
			rubrik: 'Malmö',
			id: 'gymmalmo',
			lank: 'https://gymlund.tk/gymmalmo.html'
		},{
			rubrik: 'Växjö',
			id: 'gymvaxjo',
			lank: 'https://gymlund.tk/gymvaxjo.html'
		},
	],
	location: {
		script: '/public/script/',
		img: 'public/img/',
		facebook: __dirname + '/facebook.json',
		facebookimg: 'facebookimg/',
		mainmoves: '/public/script/pokedata/mainmoves.js'
	},
	antalpokemon: 386
};

if(!exists(param.location.facebook)){
	var facebook = {"FACEBOOK_ACCESS_TOKEN": "[Place for facebook access_token]", "FACEBOOK_VERIFY_TOKEN": "[Place for facebook verify_token]"};
	fs.writeFileSync(param.location.facebook, JSON.stringify(facebook, null, ' '));
	console.log('Iställningar för Facebook bot hittas inte. Ändra tokens i "' + param.location.facebook + '"');
}else{
	var facebook = JSON.parse(fs.readFileSync(param.location.facebook, 'utf8'));	
};

function iIndex(id){
	for (var i = 0; i < param.area.length; i++){
		if(id == param.area[i].id){
			return i;
		};
	};
	return false;
};
//####################################################################
// Start sprite skapare
//####################################################################
function addsprite(area){
	var images = fs.readdirSync(param.location.img + area + '/mini/');
	var sprites = [];
	for (var i = images.length - 1; i >= 0; i--) {
		sprites.push(param.location.img + area + '/mini/' + images[i]);
	};
	sprites.push(param.location.img + 'okand_mini.png');
	sprites.push(param.location.img + 'exraid-confirmed.png');
	sprites.push(param.location.img + 'exraid-possible.png');
	if(sprites.indexOf('.DS_Store') == -1){}else{sprites.splice(sprites.indexOf('.DS_Store'), 1);};
	Spritesmith.run({src: sprites}, function handleResult (err, result) {
		param.area[iIndex(area)].result = result
		param.area[iIndex(area)].sprites = sprites
	});
};
for (var i = param.area.length - 1; i >= 0; i--) {
	addsprite(param.area[i].id);
};
app.get(['/img/*-sprite.png', '/img/*-sprite.css'], function (req, res) {
	var area = req.params['0'];
	var type = req.originalUrl.split('?')[0].split('.');
	var data = param.area[iIndex(area)];
	if(type[type.length - 1] == 'png'){
		res.type('image/png');
		res.send(data.result.image);
	}else if(type[type.length - 1] == 'css'){
		var tohtml = '.sprite {background-image: url(' + area + '-sprite.png);background-repeat: no-repeat;display: block;}'
		for (var i = data.sprites.length - 1; i >= 0; i--) {
			var name = data.sprites[i].replace('.png', '').split('/');
			var tohtml = tohtml + ' .sprite-' + name[name.length - 1] + ' {width: ' + data.result.coordinates[data.sprites[i]].width + 'px;height: ' + data.result.coordinates[data.sprites[i]].height + 'px;background-position: -' + data.result.coordinates[data.sprites[i]].x + 'px -' + data.result.coordinates[data.sprites[i]].y + 'px;}';
		}
		res.type('text/css');
		res.send(tohtml);
	}else{
		res.send('<h1>Något gick fel!</h1>');
	}
});
//####################################################################
// Slut sprite skapare
//####################################################################
//####################################################################
// Start facebook bot
//####################################################################
app.get('/facebook*', function (req, res) {
	const hubChallenge = req.query['hub.challenge'];
	const hubMode = req.query['hub.mode'];
	const verifyTokenMatches = (req.query['hub.verify_token'] === facebook.FACEBOOK_VERIFY_TOKEN);
	if (hubMode && verifyTokenMatches) {
		res.status(200).send(hubChallenge);
	} else {
		res.status(403).end();
	};
})
app.post('/facebook*', function(req, res) {
	var loadinfo = JSON.parse(fs.readFileSync(__dirname + param.location.script + 'gymlund.json', 'utf8'));
	if (req.body.object === 'page') {
		console.log(req.body.entry);
		req.body.entry.forEach(entry => {
			entry.messaging.forEach(event => {
				if (event.message && event.message.text) {
					processMessage(event, loadinfo);
				}else if (event.message && event.message.attachments) {
					processImage(event, 0, loadinfo);
				};
			});
		});
	res.status(200).end();
	}
});
//####################################################################
// Slut facebook bot
//####################################################################
//####################################################################
// Start json data
//####################################################################
app.get('/script/*.json', function (req, res) {
	var data = req.query;
	var id = req.params[0];
	var path = __dirname + param.location.script + id + '.json';
	if(!exists(path)){
		res.send('<h1>Något gick fel i ditt anrop.</h1><p>Se till att använda "?todo=" och efter normal eller km (ex. "?todo=km".</p><p>Ifall du använder "km" måste du även dela med dig av dina koordinater och lägga till dom efter ex. "?todo=km&lon=53.2031&lat=12.5642".</p>');
		return;
	}
	var loadinfo = JSON.parse(fs.readFileSync(path, 'utf8'));
	if(id == 'pokedata/pokemon'){
		if(data.to == "all"){
			res.jsonp(loadinfo);
		}else if(Number(data.to) <= loadinfo.length){
			var tosend = [];
			if(!data.from){
				var start = 0;
			}else{
				var start = Number(data.from) - 1;
				if(start <= 0 || !start){
					start = 0;
				};
			};
			for (var i = (0 + start); i < loadinfo.length; i++){
				if(Number(data.to) >= Number(loadinfo[i].nummer.replace(/\D/g,''))){
					tosend.push(loadinfo[i]);
				}else{
					break;
				}
			};
			res.jsonp(tosend);
		}else if(Number(data.spec.replace(/\D/g,'')) <= loadinfo.length){
			if(!data.charge || !data.fast){
				var tosend = false;
				for (var i = 0; i < loadinfo.length; i++){
					if(data.spec == loadinfo[i].nummer){
						var tosend = loadinfo[i];
						break;
					};
				};
			}else{
				var tosend = 'Kunde inte genomföra processen.';
				for (var a = 0; a < loadinfo.length; a++){
					if(data.spec == loadinfo[a].nummer){
						var offenseprc = false;
						for (var i = loadinfo[a].offense.length - 1; i >= 0; i--) {
							if(loadinfo[a].offense[i][0] == data.fast){
								if(loadinfo[a].offense[i][1] == data.charge){
									offenseprc = loadinfo[a].offense[i][2];
								};
							};
						};
						var defenseprc = false;
						for (var i = loadinfo[a].defense.length - 1; i >= 0; i--) {
							if(loadinfo[a].defense[i][0] == data.fast){
								if(loadinfo[a].defense[i][1] == data.charge){
									defenseprc = loadinfo[a].defense[i][2];
								};
							};
						};
						var resultat = '';
						if(offenseprc == false || defenseprc == false){
							resultat = 'Hittade inte attacker';
						}else{
							eval(fs.readFileSync(__dirname + param.location.mainmoves)+'');
							var energi = '?';
							for (var i = mainmoves.length - 1; i >= 0; i--) {
								if(mainmoves[i].namn == data.charge){
									energi = mainmoves[i].energi;
									break;
								};
							};
							if(offenseprc == defenseprc){
								resultat = 'B' + pad(offenseprc, 3);
							}else if(offenseprc >= defenseprc){
								resultat = 'A' + pad(offenseprc, 3);
							}else if(offenseprc <= defenseprc){
								resultat = 'D' + pad(defenseprc, 3);
							};
							resultat = resultat + '(' + energi + ')';
						};
						tosend = resultat;
						break;
					};
				};
			};
			res.jsonp(tosend);
		}else{
			res.jsonp(loadinfo);
		};
	}else{
		var tosend = handleinformation(data, loadinfo);
		if(tosend){
			res.jsonp(tosend);
		}else{
			res.send('<h1>Något gick fel i ditt anrop.</h1><p>Se till att använda "?todo=" och efter normal eller km (ex. "?todo=km".</p><p>Ifall du använder "km" måste du även dela med dig av dina koordinater och lägga till dom efter ex. "?todo=km&lon=53.2031&lat=12.5642".</p>');
		};
	};
})
//####################################################################
// Slut json data
//####################################################################
//####################################################################
// Start bearbetning av info
//####################################################################
function handleinformation(data, loadinfo){
	if(!data.question){}else{
		loadinfo = findmatch(data.question, loadinfo, 'includes');
	};
	if(data.rip == "false" || !data.rip){
		var ripedit = [];
		for (var i = 0; i < loadinfo.length; i++){
			if(!loadinfo[i].rip){
				ripedit.push(loadinfo[i]);
			};
		};
		loadinfo = ripedit;
	};
	if(data.ex == "true"){
		var exraidedit = [];
		for (var i = 0; i < loadinfo.length; i++){
			if(loadinfo[i].exraid){
				exraidedit.push(loadinfo[i]);
			};
		};
		loadinfo = exraidedit;
	};
	if(data.lat == '0' || data.lon == '0' || !data.lon || !data.lat){}else{
		var gymbykm = [];
		for (var i = 0; i < loadinfo.length; i++){
			var km = Math.round(getDistanceFromLatLonInKm(loadinfo[i].location.lon,loadinfo[i].location.lat,data.lon,data.lat) * 10);
			gymbykm.push(pad(km, 10) + '|||' + i);
			loadinfo[i].distans = Number(km / 10);
		};
		gymbykm.sort();
	};
	if(data.todo == 'normal' || !data.todo || !data.lon || !data.lat){
		var loadinfo = sortgymbyname(loadinfo);
		return loadinfo;
	}else if(data.todo == 'km'){
		if(data.lat == '0' && data.lon == '0'){
			var loadinfo = sortgymbyname(loadinfo);
			return loadinfo;
		}else{
			var gymstoreturn = [];
			for (var i = 0; i < gymbykm.length; i++){
				var datasplit = gymbykm[i].split('|||');
				gymstoreturn.push(loadinfo[datasplit[1]]);
			};
			return gymstoreturn;
		};
	}else{
		return false;
	};
};
//####################################################################
// Slut bearbetning av info
//####################################################################
//####################################################################
// Start renderer
//####################################################################
app.engine('html', function (filePath, options, callback) {
	fs.readFile(filePath, function (err, content) {
		if(!options.id || options.id == 'false'){
			var rendered = content.toString()
				.replace(/#rubrik#/g, options.rubrik)
				.replace(/#lank#/g, options.lank)
				.replace(/#id#/g, options.rubrik.toLowerCase())
				.replace(/#pokemonhtml#/g, makepokemon())
		}else{
			var html = makelist(options.id);
			var rendered = content.toString()
		    	.replace(/#rubrik#/g, options.rubrik)
		    	.replace(/#lank#/g, options.lank)
		    	.replace(/#gymlist#/g, html.listhtml)
		    	.replace(/#options#/g, html.optionshtml)
		    	.replace(/#lettermenu#/g, html.menuhtml)
		    	.replace(/#id#/g, options.id)
		};
    return callback(null, rendered)
  })
}).set('views', './views').set('view engine', 'html').use(express.static('public'))
//####################################################################
// Slut renderer
//####################################################################
//####################################################################
// Start infångare av html
//####################################################################
app.get(['/', '/*.html'], function (req, res) {
	if(req.params['0'] == 'pokenamn'){
		var options = {
			rubrik: 'Pokénamn',
			id: 'false',
			lank: 'https://gymlund.tk/pokenamn.html'
		};
		res.render('pokenamn', options);
	}else if(req.params['0'] == 'poketime'){
		var options = {
			rubrik: 'Poké time',
			id: 'false',
			lank: 'https://gymlund.tk/poketime.html'
		};
		res.render('poketime', options);
	}else{
		if(req.originalUrl == '/' || req.params['0'] == 'index'){
			var options = param.area[iIndex('gymlund')];	
		}else{
			var options = param.area[iIndex(req.params['0'])];
		};
		if(!options){
			res.send('<h1>Din stad stödjs tyvärr inte i nuläget.</h1>')
		}else{
			res.render('index', options);
		};
	};
})
app.listen(param.port, () => console.log('Lyssnar på port ' + param.port + '!'))
//####################################################################
// Slut infångare av html
//####################################################################
//####################################################################
// Start kontrollerar ifall fil existerar
//####################################################################
function exists(path){if(fs.existsSync(path)){return true;}else{return false;};};
//####################################################################
// Slut kontrollerar ifall fil existerar
//####################################################################
//####################################################################
// Start skapa html för pokenamn
//####################################################################
function makepokemon(){
	var allpokemon = JSON.parse(fs.readFileSync(__dirname + param.location.script + 'pokedata/pokemon.json', 'utf8'));
	var allpokemonhtml = '';
	for (var i = 0; i < param.antalpokemon; i++){
		allpokemon[i]
		var allpokemonhtml = allpokemonhtml + '<span onclick="chosepokemon(this);" data-nummer="' + allpokemon[i].nummer + '" data-namn="' + allpokemon[i].namn + '" data-type="' + allpokemon[i].type.join('###') + '" data-moves="' + allpokemon[i].moves.join('###') + '" data-defend="' + allpokemon[i].defend.join('###') + '" data-attack="' + allpokemon[i].attack.join('###') + '" data-lastevolve="' + allpokemon[i].lastevolve + '" id="' + allpokemon[i].nummer + '" data-index="' + i + '">' + allpokemon[i].svg + '</span>';
	};
	return allpokemonhtml;
};
//####################################################################
// Slut skapa html för pokenamn
//####################################################################
//####################################################################
// Start leta upp gymnamn matchningar
//####################################################################
function findmatch(wordtoserach, loadinfo, todo){
	var findgyms = [];
	for (var i = loadinfo.length - 1; i >= 0; i--) {
		if(todo == 'includes'){
			if(wordtoserach.toLowerCase().includes(loadinfo[i].namn.toLowerCase())){
				findgyms.push(loadinfo[i]);
			}else if(loadinfo[i].namn.toLowerCase().includes(wordtoserach.toLowerCase())){
				findgyms.push(loadinfo[i]);
			};
		}else if(todo == 'startswith'){
			if(wordtoserach.toLowerCase().startsWith(loadinfo[i].namn.toLowerCase())){
				findgyms.push(loadinfo[i]);
			}else if(loadinfo[i].namn.toLowerCase().startsWith(wordtoserach.toLowerCase())){
				findgyms.push(loadinfo[i]);
			};
		};
	};
	return findgyms;
};
//####################################################################
// Slut leta upp gymnamn matchningar
//####################################################################
//####################################################################
// Start sortera gym
//####################################################################
function sortgymbyname(loadinfo){
	var nametosort = [];
	for (var i = 0; i < loadinfo.length; i++){
		nametosort.push(loadinfo[i].namn);
	};
	nametosort.sort();
	var elementstorender = [];
	for (var i = 0; i < nametosort.length; i++){
		for (var a = 0; a < loadinfo.length; a++){
			if(loadinfo[a].namn == nametosort[i]){
				elementstorender.push(loadinfo[a]);
			};
		};
	};
	return elementstorender;
}
//####################################################################
// Slut sortera gym
//####################################################################
//####################################################################
// Start HTML för gymlund
//####################################################################
function makelist(id){
	var loadinfo = JSON.parse(fs.readFileSync(__dirname + param.location.script + id + '.json', 'utf8'));
	var elementstorender = sortgymbyname(loadinfo);
	var listhtml = '';
	var menuletters = [];
	var optionshtml = '';
	for (var i = 0; i < elementstorender.length; i++){
		if(elementstorender[i].id == ''){
			elementstorender[i].id = 'okand_mini';
		};
		listhtml = listhtml + '<div onclick="window.open(&quot;http://maps.google.com/?q=' + elementstorender[i].location.lat + ',' + elementstorender[i].location.lon + '&quot;)" data-lon="' + elementstorender[i].location.lon + '" data-lat="' + elementstorender[i].location.lat + '" class="tr ' + elementstorender[i].namn.charAt(0).toUpperCase() + '"><div class="td"><i class="sprite sprite-' + elementstorender[i].id + '"></i></div><div class="td">' + elementstorender[i].namn + '</div><div class="td extd">';
		if(elementstorender[i].exraid){
			listhtml = listhtml + '<span height="30px" style="padding-right: 35px;"><i class="sprite sprite-exraid-confirmed"></i></div>';
		}else{
			listhtml = listhtml + '</div>';
		}
		listhtml = listhtml + '</div>';
		if(menuletters.toString().includes(elementstorender[i].namn.charAt(0).toUpperCase())){}else{
			menuletters.push(elementstorender[i].namn.charAt(0).toUpperCase());
		};
		var optionshtml = optionshtml + '<option value="' + elementstorender[i].namn + '"></option>';
	};
	var menuhtml = '<p class="searchicon" onclick="showsearch();">☌</p>';
	for (var i = 0; i < menuletters.length; i++){
		if(i == 0){
			var selected = ' style="color: #000;font-weight: bold;"';
		}else{
			var selected = '';
		};
		var menuhtml = menuhtml + '<p data-letter="' + menuletters[i] + '" onclick="scrollToSelected(this);"' + selected + '>' + menuletters[i] + '</p>';
	};
	return {"listhtml": listhtml, "menuhtml": menuhtml, "optionshtml": optionshtml};
};
//####################################################################
// Slut HTML för gymlund
//####################################################################
//####################################################################
// Start distans
//####################################################################
function pad (str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
};
function getDistanceFromLatLonInKm(lon2,lat2,lon1,lat1) {
	if(lat1 == '0'){}else{
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(lat2-lat1);  // deg2rad below
		var dLon = deg2rad(lon2-lon1); 
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		return d;
	};
};
function deg2rad(deg) {return deg * (Math.PI/180)};
//####################################################################
// Slut distans
//####################################################################
//####################################################################
// Start facebook bot work
//####################################################################
function sendTextMessage(senderId, text) {
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: { access_token: facebook.FACEBOOK_ACCESS_TOKEN },
		method: 'POST',
		json: {
			recipient: { id: senderId },
			message: { text },
		}
	});
};
var storedval = [];
function processMessage(event, loadinfo){
	console.log(event);
	const senderId = event.sender.id;
	var message = event.message.text;
	var checkforcommand = message.split('');
	if(checkforcommand.length == 2){
		if(!global.storedval || global.storedval.length == 0){
			console.log('Hittade inget som är sparat...');
		}else{
			if(checkforcommand[0] == '!'){
				var number = parseInt(checkforcommand[1]);
				if(number == ''){}else{
					var index = (number - 1);
					console.log(index);
					var gyminfo = global.storedval[index];
					console.log(gyminfo);
					if(gyminfo.exraid){
						var ps = ' (EX-raid gym!)';
					}else{
						var ps = '';
					};
					var messagetosend = '"' + gyminfo.namn + '"' + ps + ' hittar du med följande länk: http://maps.google.com/?q=' + gyminfo.location.longitud + ',' + gyminfo.location.latitud;
					sendTextMessage(senderId, messagetosend);
				};
			};
		};
	}else{
		var messagesplit = message.split('"');
		var messagetosend = 'false';
		var messagearray = [];
		if(messagesplit.length == 3){
			var messagearray = findmatch(wordtoserach, loadinfo, 'startswith');
			/*for (var a = gyms.length - 1; a >= 0; a--) {
				if(gyms[a].namn.toLowerCase().startsWith(messagesplit[1].toLowerCase())){
					console.log(gyms[a].namn)
					messagearray.push(gyms[a]);
					//messagetosend = 'Ursäkta om jag tränger mig på, men kunde inte missa att höra att ni pratar om ' + gyms[a].namn + '. Om du inte vet var den finns använd följande länk: http://maps.google.com/?q=' + gyms[a].location.longitud + ',' + gyms[a].location.latitud;
				};
			}*/
		};
		if(messagearray.length == 1){
			if(messagearray[0].exraid){
				var ps = ' (EX-raid gym!)';
			}else{
				var ps = '';
			};
			messagetosend = 'Ursäkta om jag tränger mig på, men kunde inte missa att höra att ni pratar om "' + messagearray[0].namn + '"' + ps + '. Om du inte vet var den finns använd följande länk: http://maps.google.com/?q=' + messagearray[0].location.longitud + ',' + messagearray[0].location.latitud;
		}else if(messagearray.length == 0){

		}else{
			var questiontext = '';
			global.storedval = messagearray;
			for (var i = 0; i < messagearray.length; i++){
				var questiontext = questiontext + '\n' + (i + 1) + '. ' + messagearray[i].namn;
			}
			messagetosend = 'Ursäkta om jag tränger mig på, men kunde inte missa att höra att ni pratar om gym. Vilken av följande gym pratar ni om?' + questiontext + '\nOm du vill veta var gymmet är skriv då "!" och nummer (exempel !1).';
		}
		if(messagetosend == 'false'){}else{
			sendTextMessage(senderId, messagetosend);
		};
		console.log('Text: ' + message + ' (' + senderId + ')');
	};
};
function processImage(event, num, loadinfo){
	const url = event.message.attachments
	const senderId = event.sender.id;
	var imgdesaturate = 50 + Number(num);
	var urlsplit = url.split('/');
	var name = urlsplit[urlsplit.length - 1];
	if(name.includes('?')){
		var name = name.split('?')[0];
	};
	Jimp.read(url, function (err, image) {
		if (err) throw err;
		image.resize( 750, Jimp.AUTO);
		image.crop( 150, 50, 600, 100 );
		image.invert();
		image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
			var r = this.bitmap.data[idx + 0];
			var g = this.bitmap.data[idx + 1];
			var b = this.bitmap.data[idx + 2];
			if(r <= imgdesaturate && g <= imgdesaturate && b <= imgdesaturate){}else{
				this.bitmap.data[idx + 0] = 255;
				this.bitmap.data[idx + 1] = 255;
				this.bitmap.data[idx + 2] = 255;
				this.bitmap.data[idx + 3] = 255;
			};
		});
		image.write(param.location + name, function (err) {
			fs.readFile(param.location + name, function(error, content) {
				Tesseract.recognize(content, {
					lang: 'swe'
				})
				.then(function(result){
					var find = findmatch(wordtoserach, loadinfo, 'includes');
					if(find.length == 1){
						console.log(result.text);
						console.log(find)
						if(find[0].exraid){
							var ps = ' (EX-raid gym!)';
						}else{
							var ps = '';
						};
						var messagetosend = 'Ursäkta om jag tränger mig på, men kunde inte missa att höra att ni pratar om "' + find[0].namn + '"' + ps + '. Om du inte vet var den finns använd följande länk: http://maps.google.com/?q=' + find[0].location.longitud + ',' + find[0].location.latitud;
						sendTextMessage(senderId, messagetosend);
					}else{
						if(Number(num) <= 255){
							var nynum = Number(num) + 5;
							console.log('Kunde inte bestämma mig! Ändrar desat från ' + (50 + Number(num)) + ' till ' + (50 + nynum) + '.');
							processImage(event, nynum);
						}else{
							console.log('Kunde tyvärr inte hitta en matchning...');
						};
					};
				})
			});
		});
	});
};
//####################################################################
// Slut facebook bot work
//####################################################################