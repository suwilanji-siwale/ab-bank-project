$(document).ready(function() {
	$('.chat_icon').click(function() {
		console.log("Hello suwi");
         $('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});

