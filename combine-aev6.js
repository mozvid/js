let domain	= window.location.hostname,
		content = document.getElementById("desc"),
		ua 		  = navigator.userAgent,
		s 		  = document.createElement('script'),
		regex 	  = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i',
		productId = document.getElementById("productId").value;

if (!ua.match(regex)) {
	var afflink = "https://s.click.aliexpress.com/deep_link.htm?dl_target_url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F-%2F"+productId+".html&aff_short_key=bwU7vsvE&dp="+domain;
	//window.location.replace(afflink);
	alert(afflink);
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
