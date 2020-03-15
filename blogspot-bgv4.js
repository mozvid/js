let content = document.getElementById("desc"),
s = document.createElement('script');
s.type = 'text/javascript';
productId = document.getElementById("productId").value;
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
