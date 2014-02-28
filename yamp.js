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
 *	   Version: 0.3.0
 *	   Created: 2/21/2014
 *	   Updated: 2/28/2014
 *	   License: GPL-3 https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)
 ****************************************************
 *	   Dependencies: jQuery 2.1.0+
 */

$.fn.yamp = function(options){
	console.log("Yamping!");
	var yamped = this;
	var defaults = {
		suppressKeyClose : false,
		closeKeyCode	 : 27,
		addX 			 : true
	};

	options = $.extend(defaults,options);

	this.wrapInner('<div class="yamp-inner" />');
	this.wrap('<div class="yamp-outer" />');
	this.css({
		opacity:0,
		height:0,
		width:0
	});
	this.data('status', 'closed');

	if(options.suppressKeyClose == false){
		$(document).keyup(function(e){
			e.keyCode == options.closeKeyCode && yamped.yampClose();
		});
	}
	if(options.addX == true){
		var xButton = this.append('<span class="yampX">&times;</span>');
		xButton.click(function(){
			yamped.yampClose();
		});
	}
}

$.fn.yampOpen = function(options){
	if(this.data('status') == 'open')
		return 0;
	
	this.css('display', 'block');

	defWidth = this.find('.yamp-inner').width();
	defHeight= this.find('.yamp-inner').height();

	console.log("defWidth: "+defWidth+"\ndefHeight: "+defHeight);

	var defaults = {
		duration : 360,
		width    : defWidth,
		height   : defHeight,
		opacity  : 1,
		easing   : 'swing',
		callback : null
	}

	options = $.extend(defaults, options);

	if(this.css('top')=='auto')
		this.css('top',0);
	if(this.css('left')=='auto')
		this.css('left',0);

	var $top  = parseInt(String(this.css('top')).replace('px',''))-(options.height/2);
	var $left = parseInt(String(this.css('left')).replace('px',''))-(options.width/2);

	console.log("$top: "+$top+"\n$left: "+$left);

	console.log("Top: "+parseInt(String(this.css('top')).replace('px',''))+"-"+(options.height/2)+"="+$top+"\nLeft: "+parseInt(String(this.css('left')).replace('px',''))+"-"+(options.width/2)+"="+$left);

	
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

	this.animate({
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
	var yamped = this;

	var defaults = {
		duration : 360,
		width    : 0,
		height   : 0,
		opacity  : 0,
		easing   : 'swing',
		callback : null	
	}

	options = $.extend(defaults, options);
	var $top  = parseInt(String(this.css('top')).replace('px',''))+(this.height()/2);
	var $left = parseInt(String(this.css('left')).replace('px',''))+(this.width()/2);

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
	
	this.animate({
		top:$top,
		left:$left
	},{
		duration:options.duration,
		easing:options.easing,
		queue:false,
		complete: function(){console.log("CB - Display:none"); yamped.css('display','none');}
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