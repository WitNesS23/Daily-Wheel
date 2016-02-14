function mask($this, options){
	var defaultConfig = {
		"dialogActive": "active",
		"maskActive": "hover",
		"hasMask": true,
		"preventScroll": true,
		"callback": null
	};

	this.settings = $.extend({}, defaultConfig, options);
	this.settings.dialog = $this;

	this.init();
}

mask.prototype.init = function(){
	var _this = this.settings;
	if(_this.hasMask){
		_this.mask = _this.dialog.parent();
	}
};

mask.prototype.show = function(){
	var _this = this.settings;

	_this.dialog.addClass(_this.dialogActive);
	_this.mask.addClass(_this.maskActive);

	if(_this.preventScroll){
		$("body").on("touchmove", function(e){
			if($(e.target).closest(_this.mask).length > 0){
				return false;
			}
		})
	}
}

mask.prototype.hide = function(){
	var _this = this.settings;

	_this.dialog.removeClass(_this.dialogActive);
	_this.mask.removeClass(_this.maskActive);
}

$.fn.mask = function(settings){
	this.each(function(index){
		var dialog = new mask($(".dialog").eq(index), settings);
		$(this).data("bind-mask", dialog);

		$(this).on("click", function(event){
			dialog.show();
		});

		return this;
	});
}