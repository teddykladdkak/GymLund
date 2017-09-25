document.getElementsByClassName('icon').length


document.getElementsByClassName('icon')[0].click();

document.getElementsByClassName('label-success')[0].innerText
document.getElementsByClassName('modal-footer')[1].getElementsByTagName('a')[0].getAttribute('href')




javascript:(function(){
window['gymarray'] = [];
var allagym = document.getElementsByClassName('icon');
for (var i = allagym.length - 1; i >= 0; i--) {
	document.getElementsByClassName('icon')[i].click();
	var namn = document.getElementsByClassName('label-success')[0].innerText.replace(/Ã¤/g, 'ä').replace(/Ã¥/g, 'å').replace(/Ã¶/g, 'ö');
	var wrapper = document.getElementsByClassName('modal-footer')[1];
	var lank = wrapper.getElementsByTagName('a')[0].getAttribute('href').split('/');
	var koordinater = lank[lank.length - 1];
	wrapper.getElementsByClassName('btn-default')[0].click();
	window['gymarray'].push(namn + '||||' + koordinater);
};
})();

javascript:(function(){
var body = document.getElementsByTagName('body')[0];
while (body.hasChildNodes()) {body.removeChild(body.firstChild);};
	var textarea = document.createElement('textarea');
		var text = document.createTextNode(window['gymarray'].join('||||'));
		textarea.appendChild(text);
	body.appendChild(textarea);
})();

var person = prompt("Här är alla gymmen", gymarray);

if (person != null) {}