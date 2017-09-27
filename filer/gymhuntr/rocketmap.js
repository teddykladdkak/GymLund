var allimg = document.getElementById('map').getElementsByTagName('img');
for (var i = allimg.length - 1; i >= 0; i--) {
	allimg[i].click();
};
var allboxes = document.getElementsByClassName('gm-style-iw');
var array = [];
for (var i = allboxes.length - 1; i >= 0; i--) {
	array.push(allboxes[i].innerHTML);
};
array.join('|||||||');