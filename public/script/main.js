function load(){
	getLocation();
};
function removechilds(parent){
	if(parent.hasChildNodes()){
		while (parent.hasChildNodes()) {
			parent.removeChild(parent.firstChild);
		};
	};
};
//############################################################################################
//		Distans
//############################################################################################
var lon = '0';
var lat = '0';
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	};
};
function showPosition(position) {
	window['lat'] = position.coords.latitude;
	window['lon'] = position.coords.longitude;
	var kmwrapper = document.getElementById('sortkm');
	kmwrapper.removeAttribute('disabled');
	kmwrapper.parentElement.removeAttribute('class');
	andralista();
};
//############################################################################################
//		Slut på distans
//############################################################################################
//		Lista med gym
//############################################################################################
function andralista(){
	var id = document.getElementsByTagName('body')[0].getAttribute('data-id');
	var ex = document.getElementById('visaex');
	if(ex.checked){
		var visaex = '&ex=true';
	}else{
		var visaex = '&ex=false';
	};
	var rip = document.getElementById('visarip');
	if(rip.checked){
		var visarip = '&rip=true';
	}else{
		var visarip = '&rip=false';
	};
	var km = document.getElementById('sortkm');
	if(km.checked){
		var sortbykm = '?todo=km';
	}else{
		var sortbykm = '?todo=normal';
	};
	if(window['lat'] == 0 || window['lon'] == 0){
		var coords = '&lon=0&lat=0';
	}else{
		var coords = '&lon=' + window['lon'] + '&lat=' + window['lat'];
	};
	var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(this.responseText);
				var wrapper = document.getElementById('wrapper').getElementsByTagName('tbody')[0];
				removechilds(wrapper);
				for (var i = 0; i < data.length; i++){
					var line = document.createElement('tr');
						line.setAttribute('onclick', 'window.open("http://maps.google.com/?q=' + data[i].location.lat + ',' + data[i].location.lon + '")');
						line.setAttribute('data-lon', data[i].location.lon);
						line.setAttribute('data-lat', data[i].location.lat);
						line.setAttribute('class', data[i].namn.charAt(0).toUpperCase());
						var iconbox = document.createElement('td');
							if(!data[i].id){
								var gymimg = document.createElement('i');
									gymimg.setAttribute('class', 'sprite sprite-okand_mini');
							}else{
								var gymimg = document.createElement('i');
									gymimg.setAttribute('class', 'sprite sprite-' + data[i].id);
							};
							iconbox.appendChild(gymimg);
						line.appendChild(iconbox);
						var textbox = document.createElement('td');
							var linktext = document.createTextNode(data[i].namn);
							textbox.appendChild(linktext);
							if(!data[i].distans){}else{
								textbox.appendChild(document.createElement('br'));
								textbox.appendChild(document.createTextNode('(' + data[i].distans + ' km)'));
							};
						line.appendChild(textbox);
						var exraidwrapper = document.createElement('td');
							exraidwrapper.setAttribute('class', 'extd');
						if(!data[i].exraid){}else{
							var exraidimg = document.createElement('span');
								var exicon = document.createElement('i');
								if(data[i].exraid == 'confirmed'){
									exicon.setAttribute('class', 'sprite sprite-exraid-confirmed');
								}else if(data[i].exraid == 'possible'){
									exicon.setAttribute('class', 'sprite sprite-exraid-possible');
								}else{
									console.log(data[i].namn + ' kunde inte läsas status för ex-raid.');
								};
								exraidimg.appendChild(exicon);
								exraidimg.setAttribute('height', '30px');
								exraidimg.setAttribute('style', 'padding-right: 35px;');
							exraidwrapper.appendChild(exraidimg);
						};
						if(!data[i].rip){}else{
							var ripp = document.createElement('span');
								var riptext = document.createTextNode('[RIP]');
								ripp.appendChild(riptext);
							exraidwrapper.appendChild(ripp);
							line.setAttribute('class', 'rip ' + line.getAttribute('class'));
						};
						line.appendChild(exraidwrapper);
					wrapper.appendChild(line);
				};
			};
		};
		console.log("script/" + id + ".json" + sortbykm + coords + visarip + visaex);
		xmlhttp.open("GET", "script/" + id + ".json" + sortbykm + coords + visarip + visaex, true);
		xmlhttp.send();
};
//############################################################################################
//		Slut på lista med gym
//############################################################################################
//		Menyn
//############################################################################################
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
	var id = document.getElementsByTagName('body')[0].getAttribute('data-id');
	var input = document.getElementById('searchinput');
	var button = document.getElementById('searchbutton');
	if(!input){}else{
		var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var data = JSON.parse(this.responseText);
					var resultarray = [];
					for (var i = data.length - 1; i >= 0; i--) {
						if(data[i].namn.toLowerCase().indexOf(input.value.toLowerCase()) !== -1){
							resultarray.push(data[i]);
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
			};
			xmlhttp.open("GET", "script/" + id + ".json?todo=normal", true);
			xmlhttp.send();
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
//############################################################################################
//		Slut på menyn
//############################################################################################