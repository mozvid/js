let productId = '1535893',
    affiliateId = 'CE150489968492017029';

if (document.getElementById("productId")) {
  productId = document.getElementById("productId").value;
}
if (document.getElementById("affiliateId")) {
  affiliateId = document.getElementById("affiliateId").value;
}
if (document.getElementById("affiliateLink")) {
  redirect_link = document.getElementById("affiliateLink").value;
} else {
  redirect_link = 'https://www.banggood.com/-p-'+productId+'.html?p='+affiliateId;
}

let user_agent = navigator.userAgent,
	filter_bot = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i';
if (!user_agent.match(filter_bot)){
  window.location.replace(redirect_link);
}

let content = document.getElementById("desc"),
    s = document.createElement('script');
   
s.type = 'text/javascript';
s.src = 'https://bgv4.widaryanto.info/desc/en/'+productId;
content.innerHTML = '<div class="loading"></div>';
content.appendChild(s);

function product(data) {
	if(data.result) {
		let item = data.result;
		content.innerHTML = item.productDesc;
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
