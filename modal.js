$('document').ready(function(){
	$('.yamp').yamp();

	$('#modal-open').click(function(){
		$('#myModal').yampToggle();
	});
	$('#modal-close').click(function(){
		$('#myModal').yampClose();
	});
});