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

function load(){
	getLocation();
	var gymarray = [];
	for (var i = gyms.length - 1; i >= 0; i--) {
		gymarray.push(gyms[i].namn);
	};
	gymarray.sort();
	var gymsorted = [];
	for (var i = gymarray.length - 1; i >= 0; i--) {
		for (var a = gyms.length - 1; a >= 0; a--) {
			if(gyms[a].namn == gymarray[i]){
				gymsorted.push(gyms[a]);
			};
		};
	};
	var wrapper = document.getElementById('wrapper');
	var table = document.createElement('table');
		for (var i = gymsorted.length - 1; i >= 0; i--) {
			var line = document.createElement('tr');
				line.setAttribute('onclick', 'window.open("http://maps.google.com/?q=' + gymsorted[i].location.longitud + ',' + gymsorted[i].location.latitud + '")');
				line.setAttribute('data-lon', gymsorted[i].location.longitud);
				line.setAttribute('data-lat', gymsorted[i].location.latitud);
				line.setAttribute('class', gymsorted[i].namn.split('')[0]);
				var iconbox = document.createElement('td');
					var icon = document.createElement('i');
						icon.setAttribute('class', 'sprite sprite-' + gymsorted[i].id);
					iconbox.appendChild(icon);
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
	var allletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'].reverse();
	var wrapper = document.getElementById('list-navigation');
		var li = document.createElement('li');
		for (var i = allletters.length - 1; i >= 0; i--) {
			var fisrtelement = document.getElementsByClassName(allletters[i])[0];
			if(!fisrtelement){}else{
				var p = document.createElement('p');
					p.setAttribute('data-letter', allletters[i]);
					p.setAttribute('onclick', 'scrollToSelected(this);');
					var ptext = document.createTextNode(allletters[i]);
					p.appendChild(ptext);
				li.appendChild(p);
			};
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