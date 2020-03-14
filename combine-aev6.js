let domain	= window.location.hostname,
		content = document.getElementById("desc"),
		ua 		  = navigator.userAgent,
		s 		  = document.createElement('script'),
		regex 	= '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i',
		productId   = document.getElementById("productId").value;
		affiliateId = document.getElementById("affiliateId").value;
alert(affiliateId);
if (!ua.match(regex)) {
	if(affiliateId){
		var afflink = "https://s.click.aliexpress.com/deep_link.htm?dl_target_url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F-%2F"+productId+".html&aff_short_key="+affiliateId+"&dp="+domain;
		window.location.replace(afflink);
	} else {
		var afflink = "https://s.click.aliexpress.com/deep_link.htm?dl_target_url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F-%2F"+productId+".html&aff_short_key=bwU7vsvE&dp="+domain;
		window.location.replace(afflink);
	}
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

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeypress = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17){
		return false;
	}
}
document.onmousedown = function (event) {
	event = (event || window.event);
	if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17) {
		return false;
	}
}
document.onkeydown = function (event) {
	event = (event || window.event);
		if (event.keyCode == 123 || event.keyCode == 86 || event.keyCode == 85 || event.keyCode == 67 || event.keyCode === 17) {
		return false;
	}
}
