/***
 *                                                 
 *     _|      _|    _|_|    _|      _|  _|_|_|    
 *       _|  _|    _|    _|  _|_|  _|_|  _|    _|  
 *         _|      _|_|_|_|  _|  _|  _|  _|_|_|    
 *         _|      _|    _|  _|      _|  _|        
 *         _|      _|    _|  _|      _|  _|        
 *                                                 
 *                                                 
 *     Yet Another Modal Plugin
 ***************************************************
 *	   Author : Patrick Lindsay
 *	   Version: 0.2.0
 *	   Created: 2/21/2014
 *	   Updated: 2/25/2014
 *	   License: GPL-3 https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)
 ****************************************************
 *	   Dependencies: jQuery 2.1.0+
 */

$.fn.yamp = function(){
	console.log("Yamping!");
	this.css({
		display:'none',
		height:0,
		width:0
	});
	this.data('status', 'closed');
}

$.fn.yampOpen = function(options){
	var defaults = {
		duration : 360,
		width    : 400,
		height   : 300,
		opacity  : 1,
		easing   : 'swing',
		callback : null
	}
	var parent = this.parent();

	options = $.extend(defaults, options);

	var $top  = parseInt(String(parent.css('top')).replace('px',''))-(options.height/2);
	var $left = parseInt(String(parent.css('left')).replace('px',''))-(options.width/2);

	this.css('display', 'block');
	
	this.animate({
		height:options.height,
		width:options.width,
		opacity:options.opacity
	},{
		duration:options.duration,
		easing:options.easing,
		queue:false,
		complete:options.callback
	});

	parent.animate({
		top:$top,
		left:$left
	},{
		duration:options.duration,
		easing:options.easing,
		queue:false
	});

	this.data('status', 'open');
}

$.fn.yampClose = function(options){
	var defaults = {
		duration : 360,
		width    : 0,
		height   : 0,
		opacity  : 0,
		easing   : 'swing',
		callback : null	
	}
	var parent = this.parent();

	options = $.extend(defaults, options);
	var $top  = parseInt(String(parent.css('top')).replace('px',''))+(this.height()/2);
	var $left = parseInt(String(parent.css('left')).replace('px',''))+(this.width()/2);

	this.animate({
		height:options.height,
		width:options.width,
		opacity:options.opacity
	},{
		duration:options.duration,
		easing:options.easing,
		queue:false,
		complete:options.callback
	});
	
	parent.animate({
		top:$top,
		left:$left
	},{
		duration:options.duration,
		easing:options.easing,
		queue:false,
		complete:function(){
			this.css('display', 'none');
		}
	});

	this.data('status', 'closed');
}

$.fn.yampToggle = function(openOptions, closeOptions){
	console.log("Toggling!");

	if(this.data('status') == 'closed'){
		this.yampOpen(openOptions);
	}else{
		this.yampClose(closeOptions);
	}
}