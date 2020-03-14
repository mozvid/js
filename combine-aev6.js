let url 	  = window.location.href,
	content   = document.getElementById("desc"),
	ua 		  = navigator.userAgent,
	s 		  = document.createElement('script'),
	regex 	  = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i',
	productId = document.getElementById("productId").value;

if (ua.match(regex)) {
  alert(window.location.hostname);
} else {
  alert(window.location.hostname);
}

s.type = 'text/javascript';
s.src = 'https://xgain.se/api/?callback=product&productId='+productId;
content.innerHTML = '<div class="loading"></div>';
content.appendChild(s);
function product(data) {
	if(data.result) {
		let item = data.result;
		content.innerHTML = item.description;
	} else {
		content.innerHTML = 'data not found';
	}
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
