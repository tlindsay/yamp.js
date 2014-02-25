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
 *	   Updated: 2/24/2014
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
	console.log("Opening!");
	var defaults = {
		duration : 360,
		width    : 400,
		height   : 300,
		opacity  : 1,
		easing   : 'swing',
		callback : null
	}

	options = $.extend(defaults, options);

	console.log(options);

	this.css('display', 'block');

	this.stop().animate({
		height:options.height,
		width:options.width,
		opacity:options.opacity,
	}, options.duration, options.easing);

	if(typeof options.callback === 'function')
		options.callback();

	this.data('status', 'open');
}

$.fn.yampClose = function(options){
	console.log("Closing!");
	var defaults = {
		duration : 360,
		width    : 0,
		height   : 0,
		opacity  : 0,
		easing   : 'swing',
		callback : null	
	}

	options = $.extend(defaults, options);

	console.log(options);

	this.css('display', 'none');

	this.stop().animate({
		height:options.height,
		width:options.width,
		opacity:options.opacity,
	}, options.duration, options.easing);

	if(typeof options.callback === 'function')
		options.callback();

	this.data('status', 'closed');
}

$.fn.yampToggle = function(options){
	console.log("Toggling!");

	console.log("It is "+this.data('status')+".");

	if(this.data('status') == 'closed'){
		this.yampOpen(options);
	}else{
		this.yampClose(options);
	}
}