$(function(){
	$("body").data("index", 0);

	// mousewheel
	$(document).on("mousewheel DOMMouseScroll", function(e){
		// Chrome
		if(e.wheelDelte < 0 || e.detail > 0){
			// 向下
			
		}else{
			// 向上

		}
	});
});

// page change function
function pageStep(direction, step){
	var _length = $("section").length;
	var _current = $("body").data("index");
	var _sectionHeight = $("section").height();

	
}