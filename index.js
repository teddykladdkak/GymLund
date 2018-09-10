const express = require('express')
const app = express()

var fs = require('fs')
var bodyParser = require('body-parser');
var Spritesmith = require('spritesmith');

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
		img: 'public/img/'
	},
	antalpokemon: 386
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
// Start json data
//####################################################################
//Kontrollerar ifall fil existerar
function exists(path){
	if (fs.existsSync(path)) {
		return true;
	}else{
		return false;
	};
};
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
			for (var i = 0; i < loadinfo.length; i++){
				if(Number(data.to) >= Number(loadinfo[i].nummer.replace(/\D/g,''))){
					tosend.push(loadinfo[i]);
				}else{
					break;
				}
			};
			res.jsonp(tosend);
		}else if(Number(data.spec.replace(/\D/g,'')) <= loadinfo.length){
			var tosend = false;
			for (var i = 0; i < loadinfo.length; i++){
				if(data.spec == loadinfo[i].nummer){
					var tosend = loadinfo[i];
					break;
				};
			};
			res.jsonp(tosend);
		}else{
			res.jsonp(loadinfo);
		};
	}else{
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
			res.jsonp(loadinfo);
		}else if(data.todo == 'km'){
			if(data.lat == '0' && data.lon == '0'){
				var loadinfo = sortgymbyname(loadinfo);
				res.jsonp(loadinfo);
			}else{
				var gymstoreturn = [];
				for (var i = 0; i < gymbykm.length; i++){
					var datasplit = gymbykm[i].split('|||');
					gymstoreturn.push(loadinfo[datasplit[1]]);
				};
				res.jsonp(gymstoreturn);
			};
		}else{
			res.send('<h1>Något gick fel i ditt anrop.</h1><p>Se till att använda "?todo=" och efter normal eller km (ex. "?todo=km".</p><p>Ifall du använder "km" måste du även dela med dig av dina koordinater och lägga till dom efter ex. "?todo=km&lon=53.2031&lat=12.5642".</p>');
		};
	};
})
//####################################################################
// Slut json data
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
		listhtml = listhtml + '<tr onclick="window.open(&quot;http://maps.google.com/?q=' + elementstorender[i].location.lat + ',' + elementstorender[i].location.lon + '&quot;)" data-lon="' + elementstorender[i].location.lon + '" data-lat="' + elementstorender[i].location.lat + '" class="' + elementstorender[i].namn.charAt(0).toUpperCase() + '"><td><i class="sprite sprite-' + elementstorender[i].id + '"></i></td><td>' + elementstorender[i].namn + '</td><td class="extd">';
		if(elementstorender[i].exraid){
			listhtml = listhtml + '<span height="30px" style="padding-right: 35px;"><i class="sprite sprite-exraid-confirmed"></i></span>';
		}
		listhtml = listhtml + '</td></tr>';
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
function deg2rad(deg) {
	return deg * (Math.PI/180)
};
//####################################################################
// Slut distans
//####################################################################