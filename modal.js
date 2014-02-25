$('document').ready(function(){
	$('.yamp').yamp();

	$('#modal-open').click(function(){
		$('#myModal').yampToggle({
			callback: function(){
				console.log("Callback - Open");
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