#YAMP.js
Yet Another Modal Plugin

##Overview
YAMP is a simple modal plugin for jQuery. It has been tested with jQuery v2.1.0, though it is probably stable with much earlier versions. YAMP is still under heavy development, so use at your own risk.


##Usage
To use YAMP, just put your modal in your markup like so:
```html
...

<button id="open">Open</button>

<div class="yamp-wrapper">
  <div class="yamp" id="myYamp">
    <h1>Hello, YAMP!</h1>
    <button id="close">Close</button>
  </div>
</div>

...
```
Then initialize everything in your `$('document').ready()`:
```js
$('document').ready(function(){
	$('.yamp').yamp();

	$('#open').click(function(){
		$('#myYamp').yampOpen();
	});
	$('#close').click(function(){
		$('#myYamp').yampClose();
	});
});
```

---

##Functions
####`yamp()`
`$('.yamp').yamp();` initializes all YAMP boxes in the document.  As YAMP grows, yamp() will do more of the housekeeping for you (i.e. automating click handling, etc.).

---

####`yampOpen(options)`
`$('#myYamp').yampOpen();` opens the YAMP box with ID "myYamp".
#####Arguments
- _options_ - Object
  - _duration_ - Integer
    - The duration of the opening animation in milliseconds
    - Default Value: 360
  - _width_ - Integer
    - The width to which the YAMP box will grow
    - Default Value: 400
  - _height_ - Integer
    - The height to which the YAMP box will grow
    - Default Value: 300
  - _opacity_ - Float
    - The YAMP boxes final opacity
    - Default Value: 1
  - _easing_ - String
    - The name of the jQuery easing effect you would like to use.
    - Default Value: 'swing'
    - **This has not been tested with anything other than the default. Status of jQuery UI Easing Effects is unknown.**
  - _callback_ - function
    - A callback function, if you wish to use one.
    - Default Value: null

---

####`yampClose(options)`
`$('#myYamp').yampClose()` closes the YAMP box with ID "myYamp".

#####Arguments
- _options_ - Object
  - _duration_ - Integer
    - The duration of the closing animation in milliseconds
    - Default Value: 360
  - _width_ - Integer
    - The width to which the YAMP box will shrink
    - Default Value: 0
  - _height_ - Integer
    - The height to which the YAMP box will shrink
    - Default Value: 0
  - _opacity_ - Float
    - The YAMP boxes final opacity
    - Default Value: 0
  - _easing_ - String
    - The name of the jQuery easing effect you would like to use.
    - Default Value: 'swing'
    - **This has not been tested with anything other than the default. Status of jQuery UI Easing Effects is unknown.**
  - _callback_ - function
    - A callback function, if you wish to use one.
    - Default Value: null

---

####`yampToggle(openOptions, closeOptions)`
`$('#myYamp').yampToggle()` reads `$('#myYamp').data('status')` to determine whether the YAMP box with id "myYamp" is open or closed, and toggles accordingly.

#####Arguments
- _openOptions_ - Object
  - See [yampOpen](#yampopenoptions)
- _closeOptions_ - Object
  - See [yampClose](#yampcloseoptions)