$('document').ready(function(){
	$('.yamp').yamp();

	$('#modal-open').click(function(){
		$('#myModal').yampToggle({
			callback: function(){
				console.log("Callback - Toggle(open)");
			}
		},{
			callback: function(){
				console.log("Callback - Toggle(close)");
			}
		});
	});
	$('#modal-close').click(function(){
		$('#myModal').yampClose({
			callback: function(){
				console.log("Callback - Close");
			}
		});
	});
});