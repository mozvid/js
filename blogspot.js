let content = document.getElementById("desc"),
s = document.createElement('script');
s.type = 'text/javascript';
productId = document.getElementById("productId").value;
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
