require(['./servertime'], function(data){
	$("p").text(data.serverTime);
});