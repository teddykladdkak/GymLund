var allletters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'];
var andraplatser = [{
	namn: 'PokeNamn',
	url: 'pokenamn.html'
},{
	namn: 'PokeTime',
	url: 'poketime.html'
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
function removechilds(parent){
	if(parent.hasChildNodes()){
		while (parent.hasChildNodes()) {
			parent.removeChild(parent.firstChild);
		};
	};
};
function addserach(){
	var wrapper = document.getElementById('list-navigation');
		var li = wrapper.getElementsByTagName('li')[0];
			var searchelem = document.createElement('p');
				searchelem.setAttribute('class', 'searchicon');
				searchelem.setAttribute('onclick', 'showsearch();');
				var searchicon = document.createTextNode(String.fromCharCode(9740));
				searchelem.appendChild(searchicon);
			li.insertBefore(searchelem, li.firstChild);
};

function showsearch(){
	var wrapper = document.getElementById('head');
		var searchwrapper = document.createElement('div');
			searchwrapper.setAttribute('id', 'searchwrapper');
			var input = document.createElement('input');
				input.setAttribute('type', 'text');
				input.setAttribute('id', 'searchinput');
				input.setAttribute('onkeyup', 'isitsearchable(event)');
				input.setAttribute('onchange', 'isitsearchable(event)');
				input.setAttribute('onclick', 'isitsearchable(event)');
				input.setAttribute('list', 'searchelements');
			searchwrapper.appendChild(input);
			var button = document.createElement('input');
				button.setAttribute('type', 'button');
				button.setAttribute('disabled', 'disabled');
				button.setAttribute('value', 'Öppna');
				button.setAttribute('id', 'searchbutton');
			searchwrapper.appendChild(button);
		wrapper.insertBefore(searchwrapper, wrapper.firstChild);
	document.getElementById('searchinput').focus();
};

function isitsearchable(e){
	var input = document.getElementById('searchinput');
	var button = document.getElementById('searchbutton');
	if(!input){}else{
		var resultarray = [];
		for (var i = gyms.length - 1; i >= 0; i--) {
			if(gyms[i].namn.toLowerCase().indexOf(input.value.toLowerCase()) !== -1){
				resultarray.push(gyms[i]);
			};
		};
		if(resultarray.length == 1){
			button.setAttribute('onclick', 'window.open("http://maps.google.com/?q=' + resultarray[0].location.longitud + ',' + resultarray[0].location.latitud + '");removesearch();');
			button.removeAttribute('disabled');
		}else{
			button.setAttribute('disabled', 'disabled');
			button.removeAttribute('onclick');
		};
	};
	e = e || window.event;
    if (e.keyCode == 13) {
    	console.log(e.keyCode);
        button.click();
    };
};

function removesearch(){
	setTimeout(function(){
		var wrapper = document.getElementById('searchwrapper');
		if(!wrapper){}else{
			wrapper.parentNode.removeChild(wrapper);
		};
	}, 500);
};
function pad (str, max) {
	str = str.toString();
	return str.length < max ? pad("0" + str, max) : str;
};
function sortgymbykm(){
	var lat1 = window['lat'];
	var lon1 = window['lon'];
	var gymbykm = [];
	if(lat1 == '0' && lon1 == '0'){
		return sortgym(gyms);
	}else{
		for (var i = gyms.length - 1; i >= 0; i--) {
			gymbykm.push(pad(Math.round(getDistanceFromLatLonInKm(gyms[i].location.longitud,gyms[i].location.latitud) * 10), 10) + '|||' + i);
		};
		gymbykm.sort();
		var gymstoreturn = [];
		for (var i = 0; i < gymbykm.length; i++){
			var datasplit = gymbykm[i].split('|||')[1];
			gymstoreturn.push(gyms[datasplit]);
		};
		return gymstoreturn;
	};
};
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
	var kmwrapper = document.getElementById('sortkm');
	kmwrapper.removeAttribute('disabled');
	kmwrapper.parentElement.removeAttribute('class');
	uppdateDistance();
};
function uppdateDistance(){
	var allines = document.getElementById('wrapper').getElementsByTagName('tr');
	for (var i = allines.length - 1; i >= 0; i--) {
		var km = Math.round(getDistanceFromLatLonInKm(allines[i].getAttribute('data-lon'),allines[i].getAttribute('data-lat')) * 10) / 10;
		var text = allines[i].getElementsByTagName('td')[1];
		//	var nytext = document.createTextNode(text.innerText + '(' + km + ' km)');
		//while (text.hasChildNodes()) {text.removeChild(text.firstChild);};
		var nytext = document.createTextNode('(' + km + ' km)');
			text.appendChild(document.createElement('br'));
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
	addparagraph(wrapper, 'Andra projekt:');
	for (var i = 0; i < andraplatser.length; i++){
		addbutton(wrapper, andraplatser[i].namn, andraplatser[i].url);
	};
};
function load(spriteorimg, folder, showrip, showex){
	getLocation();
	var visasmek = document.getElementById('visasmek');
	if(!visasmek){
		var visasmektodo = true;
	}else{
		var visasmektodo = false;
	};
	makelist(spriteorimg, folder, showrip, showex, false, visasmektodo);
	head();
	sidemenu();
	marklistelem('A');
};
function andralista(spriteorimg, folder){
	var ex = document.getElementById('visaex');
	if(ex.checked){
		var visaex = true;
	}else{
		var visaex = false;
	};
	var rip = document.getElementById('visarip');
	if(rip.checked){
		var visarip = true;
	}else{
		var visarip = false;
	};
	var km = document.getElementById('sortkm');
	if(km.checked){
		var sortbykm = true;
	}else{
		var sortbykm = false;
	};
	var visasmek = document.getElementById('visasmek');
	if(visasmek.checked){
		var smeknamn = true;
	}else{
		var smeknamn = false;
	};
	makelist(spriteorimg, folder, visarip, visaex, sortbykm, smeknamn);
};
function makelist(spriteorimg, folder, showrip, showex, sortbykm, smeknamn){
	var hittade = 0;
	var ejhittade = 0;
	if(sortbykm){
		var gymsorted = sortgymbykm();
	}else{
		var gymsorted = sortgym(gyms);
	};
	var wrapper = document.getElementById('wrapper');
		removechilds(wrapper);
	var table = document.createElement('table');
	var datalist = document.createElement('datalist');
		datalist.setAttribute('id', 'searchelements');
		for (var i = 0; i < gymsorted.length; i++){
			if(!gymsorted[i].rip || showrip){
				if(!gymsorted[i].exraid && showex){}else{
					var searchoption = document.createElement('option');
						searchoption.setAttribute('value', gymsorted[i].namn);
					datalist.appendChild(searchoption);
					var line = document.createElement('tr');
						line.setAttribute('onclick', 'window.open("http://maps.google.com/?q=' + gymsorted[i].location.longitud + ',' + gymsorted[i].location.latitud + '")');
						line.setAttribute('data-lon', gymsorted[i].location.longitud);
						line.setAttribute('data-lat', gymsorted[i].location.latitud);
						line.setAttribute('class', gymsorted[i].namn.split('')[0].toUpperCase());
						var iconbox = document.createElement('td');
							if(spriteorimg == 'sprite'){
								if(!gymsorted[i].id){
									var gymimg = document.createElement('i');
										gymimg.setAttribute('class', 'sprite sprite-okand_mini');
									++ejhittade;
								}else{
									var gymimg = document.createElement('i');
										gymimg.setAttribute('class', 'sprite sprite-' + gymsorted[i].id);
									++hittade;
								};
							}else if(spriteorimg == 'img'){
								var gymimg = document.createElement('img');
								if(!gymsorted[i].id){
									gymimg.setAttribute('src', 'img/okand_mini.png');
									++ejhittade;
								}else{
									gymimg.setAttribute('src', 'img/' + folder + '/mini/' + gymsorted[i].id + '.png');
									++hittade;
								};
							};
							iconbox.appendChild(gymimg);
						line.appendChild(iconbox);
						var textbox = document.createElement('td');
							var linktext = document.createTextNode(gymsorted[i].namn);
							textbox.appendChild(linktext);
							if(!smeknamn){}else{
								if(gymsorted[i].smeknamn == ''){}else{
									var smektext = document.createTextNode(' ("' + gymsorted[i].smeknamn + '")');
									textbox.appendChild(smektext);
								};
							};
						line.appendChild(textbox);
						var exraidwrapper = document.createElement('td');
							exraidwrapper.setAttribute('class', 'extd');
						if(!gymsorted[i].exraid){}else{
							var exraidimg = document.createElement('span');
							if(spriteorimg == 'img'){
									var exicon = document.createElement('img');
								if(gymsorted[i].exraid == 'confirmed'){
									exicon.setAttribute('src', 'img/exraid-confirmed.png');
								}else if(gymsorted[i].exraid == 'possible'){
									exicon.setAttribute('src', 'img/exraid-possible.png');
								}else{
									console.log(gymsorted[i].namn + ' kunde inte läsas status för ex-raid.');
								};
							}else{
									var exicon = document.createElement('i');
								if(gymsorted[i].exraid == 'confirmed'){
									exicon.setAttribute('class', 'sprite sprite-exraid-confirmed');
								}else if(gymsorted[i].exraid == 'possible'){
									exicon.setAttribute('class', 'sprite sprite-exraid-possible');
								}else{
									console.log(gymsorted[i].namn + ' kunde inte läsas status för ex-raid.');
								};
							};
									exraidimg.appendChild(exicon);
									exraidimg.setAttribute('height', '30px');
									exraidimg.setAttribute('style', 'padding-right: 35px;');
								exraidwrapper.appendChild(exraidimg);
						};
						if(!gymsorted[i].rip){}else{
							var ripp = document.createElement('span');
								var riptext = document.createTextNode('[RIP]');
								ripp.appendChild(riptext);
							exraidwrapper.appendChild(ripp);
							line.setAttribute('class', 'rip ' + line.getAttribute('class'));
						};
						line.appendChild(exraidwrapper);
					table.appendChild(line);
				};
			};
		};
		wrapper.appendChild(table);
		wrapper.appendChild(datalist);
	var lat1 = window['lat'];
	var lon1 = window['lon'];
	if(lat1 == '0' && lon1 == '0'){}else{
		uppdateDistance();
	};
};
function sidemenu(){
	var wrapper = document.getElementById('list-navigation');
		var li = document.createElement('li');
		for (var i = 0; i < allletters.length; i++){
			var p = document.createElement('p');
				p.setAttribute('data-letter', allletters[i].toUpperCase());
				p.setAttribute('onclick', 'scrollToSelected(this);');
				var ptext = document.createTextNode(allletters[i].toUpperCase());
				p.appendChild(ptext);
			li.appendChild(p);
		};
		wrapper.appendChild(li);
		addserach();
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