const Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');

eval(fs.readFileSync('filer/library/gym.js')+'');

eval(fs.readFileSync('token.js')+'');
eval(fs.readFileSync('filer/library/pokemon.js')+'');

var hjalp = 'För att anropa mig använder du först "$", därefter lägger du in så mycket text som behövs inom "". T.ex. $"halland", blir "Namn: Hallands Nations Salmon. Länk karta: http://maps.google.com/?q=55.705732,13.2111600"';

function hittapokemon(text){
	var pokemon = 'okänd';
	if (text != null) {
		var textsplit = text.split(' ');
		for (var i = textsplit.length - 1; i >= 0; i--) {
			var pokemonarray = allpokemon[textsplit[i].charAt(0).toLowerCase()];
			if(!pokemonarray){}else{
				for (var a = pokemonarray.length - 1; a >= 0; a--) {
					if(pokemonarray[a].namn.toLowerCase() == textsplit[i].toLowerCase()){
						var pokemon = pokemonarray[a];
					};
				};
			};
		};
	};
	return pokemon;
};

function hittatid(text){
	var tid = 'none';
	var textsplit = text.split(' ');
	for (var i = textsplit.length - 1; i >= 0; i--) {
		if(textsplit[i].length == 5){
			var letters = textsplit[i].split('');
			if(letters[2] == ':'){
				var checktime = textsplit[i].split(':');
				if(parseInt(checktime[0]) <= 23){
					if(parseInt(checktime[1]) <= 59){
						var tid = textsplit[i];
					};
				};
			};
		};
	};
	return tid;
};

bot.on('message', (message) => {
	var stop = false;
	if(message.content == hjalp){
		return;
		var stop = true;
	}
	if(message.content == '$help' || message.content == '$hjälp'){
		message.channel.send(hjalp);
		var stop = true;
	};
	if(!stop){
		if(message.content.indexOf('$') !== -1){
			var firstsplit = message.content.split('$');
			var secondsplit = firstsplit[1].split('"');
			console.log(secondsplit[1])
			if(!secondsplit[1]){}else{
				var infotosend = 'none';
				for (var i = gyms.length - 1; i >= 0; i--) {
					if(gyms[i].namn.toLowerCase().indexOf(secondsplit[1].toLowerCase()) !== -1){
						var infotosend = gyms[i];
					};
				};
				if(infotosend == 'none'){
					//message.channel.send('Tyvärr kunde gym inte hittas i Lund.');
				}else{
					var pokemon = hittapokemon(message.content);
					if(pokemon == 'okänd'){
						var imglink = 'filer/img/pokemon/bilder/okand.png';
						var pokemonnamn = 'Okänd';
					}else{
						var imglink = 'filer/img/pokemon/bilder/' + parseInt(pokemon.nummer) + '.png';
						var pokemonnamn = pokemon.namn;
					};
					var klocka = hittatid(message.content);
					if(klocka == 'none'){
						var klocka = 'ingen tid satt';
						var imgklocka = 'filer/img/klocka/okand.gif';
					}else{
						var imgklocka = 'filer/img/klocka/' + klocka.replace(':', '-') + '.gif';
					};
					var imggym = 'filer/img/gym/id/' + infotosend.id.toLowerCase() + '.png'
					var embed = new Discord.RichEmbed();
						embed.setImage(imglink, 128, 128);
						embed.setColor(8888888);
						embed.setThumbnail(imggym);
						embed.addField('Namn:', pokemonnamn);
						embed.addField('Gym:', infotosend.namn);
						embed.addField('Möte kl:', klocka);
						embed.addField('Länk karta:', 'http://maps.google.com/?q=' + infotosend.location.longitud + ',' + infotosend.location.latitud);
					message.channel.send({ embed });
					//message.channel.send({ file: imglink });
				};
			};
		};
	};
});

bot.login(token);


