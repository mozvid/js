let url = window.location.href,
    ua = navigator.userAgent,
    regex = '/google|bot|bing|yahoo|pinterest|yandex|facebook|webmaster|spider|crawlr/i';
alert(url);
if(!ua.match(regex)){    
  if(url.match('/?m=1')){
    var redirectUrl = url.replace('?m=1','?m=0');
    window.location.replace(redirectUrl);
  }
}
