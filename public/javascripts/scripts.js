$(document).ready(function(){

$('.button').on('click', function(){
	if ($('.status:checked').length === 0) {
			for (var i = 0; i < $('.status').length; i++) {
			$('.status').eq(i).prop('checked', true);
			$('.status').eq(i).parent().parent().addClass('yellow');
		}	
	}
	else {
		for (var i = 0; i < $('.status').length; i++) {
			$('.status').eq(i).prop('checked', false);
			$('.status').eq(i).parent().parent().removeClass('yellow')
		}
	}
});



if ($('.status:checked').length == 0) {
		$('.buttonrow').prop('disabled', true);
	};


$('body').on('change', function() {
	if ($('.status:checked').length > 0) {
		$('.buttonrow').prop('disabled', false);
	}
	if ($('.status:checked').length == 0) {
		$('.buttonrow').prop('disabled', true);
	} 
});	

$('i').on('click', function(){
	$(this).toggleClass('fa-star-o fa-star');
})

$('#read').on('click', function(){
	$('.status:checked').parent().parent().addClass('read');
	$('.status:checked').parent().parent().removeClass('unread');
});

$('#unread').on('click', function(){
	$('.status:checked').parent().parent().addClass('unread');
	$('.status:checked').parent().parent().removeClass('read');
});
	
//if .status is checked those checked ones have 
//background of light yellow
$('.status').on('click', function(){
	$(this).parent().parent().toggleClass('yellow');
});

$('#trash').on('click', function(){
	$('.status:checked').parent().parent().remove('.email');
})

$('#devlabel').on('click', function(){
	for (var i = 0; i < $('.status:checked').length; i++) {
		if ($('.status:checked').eq(i).parent().parent().hasClass('devlabel') === false) {
	$('.status:checked').parent().append('<button class= "btn-danger label dev">Dev</button>');
	$('.status:checked').parent().parent().addClass('devlabel');
		}
	}
})

$('#personallabel').on('click', function(){
	for (var i = 0; i < $('.status:checked').length; i++) {
		if ($('.status:checked').eq(i).parent().parent().hasClass('personallabel') === false) {
	$('.status:checked').parent().append('<button class= "btn-danger label personal">Personal</button>');
	$('.status:checked').parent().parent().addClass('personallabel');
		}
	}
})
 

$('#removedev').on('click', function(){
		for (var i = 0; i < $('.status:checked').length; i++) {
		if ($('.status:checked').eq(i).parent().parent().hasClass('devlabel')) {
			$('.status:checked').next().next().remove();
			$('.status:checked').parent().parent().removeClass('devlabel');
		}
	}
})

$('#removepersonal').on('click', function(){
		for (var i = 0; i < $('.status:checked').length; i++) {
		if ($('.status:checked').eq(i).parent().parent().hasClass('personallabel')) {
			$('.status:checked').next().next().remove();
			$('.status:checked').parent().parent().removeClass('personallabel');
		}
	}
})









})