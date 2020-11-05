
//Light box
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
});

//Sliding line under služby

function checkBtn(button){
	let width = button.innerWidth();
	let position = button.position().left;
	$('.underline').css('transform', 'translateX(' + position + 'px)');
	$('.underline').css('width', width + 'px');
}

$('#sluzby .nav-link').on('click', function(){
	checkBtn($(this));
});

$(window).resize(function(){
	checkBtn($('#sluzby .nav-link.active'));
});

checkBtn($('#sluzby .nav-link.active'));


