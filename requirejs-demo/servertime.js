define(function(){
	$.ajax({
		url: 'http://zby.ly.com/zizhuyou/ajax/zhuantiajaxcall.aspx?action=GetClientIpAndServerTime',
		type: 'GET',
		dataType: 'jsonp',
		success: function(data){
			return {
				"serverTime": data.serverTime
			}
		}
	})
	
});