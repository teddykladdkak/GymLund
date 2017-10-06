var allletters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];
var andraplatser = [{
	namn: 'PokeNamn',
	url: 'pokenamn.html'
},{
	namn: 'PokeTime',
	url: 'poketime.html'
},{
	namn: 'RaidCounter',
	url: 'raidcounter.html'
},{
	namn: 'GymMalmo',
	url: 'gymmalmo.html'
},{
	namn: 'GymGbg',
	url: 'gymgbg.html'
},{
	namn: 'GymQuiz',
	url: 'quiz.html'
},{
	namn: 'RandomGym',
	url: 'randomgym.html'
}];
function sortgym(data){
	var gymarray = {};
	for (var i = data.length - 1; i >= 0; i--) {
		var firstletter = data[i].namn.charAt(0).toLowerCase();
		if(gymarray[firstletter] == null){
			gymarray[firstletter] = [];
		};
		gymarray[firstletter].push(data[i]);
	};
	var gymsorted = [];
	var headletters = Object.keys(gymarray).sort();
	window['allletters'] = headletters;
	for (var i = 0; i < headletters.length; i++){
		var undersorted = gymarray[headletters[i]].sort();
		var namearray = [];
		for (var a = 0; a < gymarray[headletters[i]].length; a++){
			namearray.push(gymarray[headletters[i]][a].namn.toLowerCase())
		};
		namearray.sort();
		for (var a = 0; a < namearray.length; a++){
			for (var b = 0; b < gymarray[headletters[i]].length; b++){
				if(namearray[a].toLowerCase() == gymarray[headletters[i]][b].namn.toLowerCase()){
					gymsorted.push(gymarray[headletters[i]][b]);
				};
			};
		};
	};
	return gymsorted;
}
var lon = '0';
var lat = '0';
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		//setTimeout(function(){ getLocation(); }, 3000);
	};
};
function showPosition(position) {
	window['lat'] = position.coords.latitude;
	window['lon'] = position.coords.longitude;
	uppdateDistance();
};
function uppdateDistance(){
	var allines = document.getElementById('wrapper').getElementsByTagName('tr');
	for (var i = allines.length - 1; i >= 0; i--) {
		var km = Math.round(getDistanceFromLatLonInKm(allines[i].getAttribute('data-lon'),allines[i].getAttribute('data-lat')) * 10) / 10;
		var text = allines[i].getElementsByTagName('td')[1];
			var nytext = document.createTextNode(text.innerText + ' (' + km + ' km)');
		while (text.hasChildNodes()) {text.removeChild(text.firstChild);};
			text.appendChild(nytext);
	};
};
function getDistanceFromLatLonInKm(lat2,lon2) {
	var lat1 = window['lat'];
	var lon1 = window['lon'];
	if(lat1 == '0'){}else{
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(lat2-lat1);  // deg2rad below
		var dLon = deg2rad(lon2-lon1); 
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		//console.log(lat1 + '-' + lon1 + '|' + lat2 + '-' + lon2 + '|' + d + ' km');
		return d;
	};
};

function deg2rad(deg) {
	return deg * (Math.PI/180)
};
function addparagraph(element, text){
	var info = document.createElement('p');
		var infotext = document.createTextNode(text);
		info.appendChild(infotext);
	element.appendChild(info);
};
function addbutton(element, text, url, extraclass){
	var span = document.createElement('span');
		span.setAttribute('class', 'link')
		var a = document.createElement('a');
			a.setAttribute('href', url);
			a.setAttribute('target', '_blank');
			if(!extraclass){}else{
				a.setAttribute('class', extraclass);
			};
			var textelem = document.createTextNode(text);
			a.appendChild(textelem);
		span.appendChild(a);
	element.appendChild(span);
};
function head(){
	var wrapper = document.getElementById('headcontent');
	addparagraph(wrapper, 'Klicka på önskat gym för att se var den är på kartan.');
	addparagraph(wrapper, 'Instruktioner för att installera denna webappen:');
	addbutton(wrapper, 'iOS', 'http://www.teddyprojekt.tk/manualer/iphone.html');
	addbutton(wrapper, 'Android', 'http://www.teddyprojekt.tk/manualer/android.html');
	addparagraph(wrapper, 'Andra hjälpmedel:');
	for (var i = 0; i < andraplatser.length; i++){
		addbutton(wrapper, andraplatser[i].namn, andraplatser[i].url);
	};
	addparagraph(wrapper, 'Gillar du detta?');
	addbutton(wrapper, 'Donera några Pokébollar', 'https://donorbox.org/teddyprojekt-tk', 'custom-dbox-popup');
	installdonatebutton();
};
function installdonatebutton(){
	var head = document.getElementsByTagName('head')[0];
		var firstscript = document.createElement('script');
			firstscript.setAttribute('src', 'https://donorbox.org/install-popup-button.js');
			firstscript.setAttribute('type', 'text/javascript');
			firstscript.setAttribute('defer', '');
		head.appendChild(firstscript);
		var secondscript = document.createElement('script');
			var secondscriptkod = document.createTextNode('window.DonorBox = { widgetLinkClassName: "custom-dbox-popup" }');
  			secondscript.appendChild(secondscriptkod);
  		head.appendChild(secondscript);
}
function load(spriteorimg, folder){
	getLocation();
	head();
	var gymsorted = sortgym(gyms);
	var wrapper = document.getElementById('wrapper');
	var table = document.createElement('table');
		for (var i = 0; i < gymsorted.length; i++){
			var line = document.createElement('tr');
				line.setAttribute('onclick', 'window.open("http://maps.google.com/?q=' + gymsorted[i].location.longitud + ',' + gymsorted[i].location.latitud + '")');
				line.setAttribute('data-lon', gymsorted[i].location.longitud);
				line.setAttribute('data-lat', gymsorted[i].location.latitud);
				line.setAttribute('class', gymsorted[i].namn.split('')[0].toUpperCase());
				var iconbox = document.createElement('td');
					if(spriteorimg == 'sprite'){
						var gymimg = document.createElement('i');
						if(!gymsorted[i].id){
							gymimg.setAttribute('class', 'sprite sprite-battle-at-lund-monument');
						}else{
							gymimg.setAttribute('class', 'sprite sprite-' + gymsorted[i].id);
						};
					}else if(spriteorimg == 'img'){
						var gymimg = document.createElement('img');
						if(!gymsorted[i].id){
							gymimg.setAttribute('src', 'img/gymlund/mini/battle-at-lund-monument.png');
						}else{
							gymimg.setAttribute('src', 'img/' + folder + '/mini/' + gymsorted[i].id + '.png');
						};
					};
					iconbox.appendChild(gymimg);
				line.appendChild(iconbox);
				var textbox = document.createElement('td');
					var linktext = document.createTextNode(gymsorted[i].namn);
					textbox.appendChild(linktext);
				line.appendChild(textbox);
			table.appendChild(line);
		};
		wrapper.appendChild(table);
	sidemenu();
	marklistelem('A');
};
function sidemenu(){
	var wrapper = document.getElementById('list-navigation');
		var li = document.createElement('li');
		for (var i = 0; i < allletters.length; i++){
			/*var fisrtelement = document.getElementsByClassName(allletters[i])[0];
			if(!fisrtelement){}else{*/
				var p = document.createElement('p');
					p.setAttribute('data-letter', allletters[i].toUpperCase());
					p.setAttribute('onclick', 'scrollToSelected(this);');
					var ptext = document.createTextNode(allletters[i].toUpperCase());
					p.appendChild(ptext);
				li.appendChild(p);
			/*};*/
		};
		wrapper.appendChild(li);
};
function scrollToSelected(element){
	var letter = element.getAttribute('data-letter');
	var firstelement = document.getElementsByClassName(letter)[0];
	if (!!firstelement && firstelement.scrollIntoView) {
		firstelement.scrollIntoView();
	};
};
var scrollTimer = -1;
function getTopElement(){
	if (scrollTimer != -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 100);
};
function scrollFinished() {
    var alllines = document.getElementById('wrapper').getElementsByTagName('tr');
	for (var i = 0; i < alllines.length; i++){
		if(isVisible(alllines[i])){
			marklistelem(alllines[i].getAttribute('class'))
			break;
		};
	};
};
function marklistelem(letter){
	var allmenuitem = document.getElementById('list-navigation').getElementsByTagName('p');
	for (var i = allmenuitem.length - 1; i >= 0; i--) {
		allmenuitem[i].removeAttribute('style');
		if(allmenuitem[i].getAttribute('data-letter') == letter){
			allmenuitem[i].setAttribute('style', 'color: #000;font-weight: bold;');
		};
	};
};
function isVisible(elem) {
	if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
	const style = getComputedStyle(elem);
	if (style.display === 'none') return false;
	if (style.visibility !== 'visible') return false;
	if (style.opacity < 0.1) return false;
	if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
	    elem.getBoundingClientRect().width === 0) {
	    return false;
	}
	const elemCenter   = {
	    x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
	    y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
	};
	if (elemCenter.x < 0) return false;
	if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
	if (elemCenter.y < 0) return false;
	if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
	let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
	do {
	    if (pointContainer === elem) return true;
	} while (pointContainer = pointContainer.parentNode);
	return false;
}