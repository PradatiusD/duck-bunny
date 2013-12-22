jQuery(document).ready(function($) {

	var respButton = $('#responsive-menu-button').parent();

    respButton.sidr({
		name: 'sidr-main',
		source: 'http://theduck.wpengine.com/wp-content/themes/the-duck-v3/responsive-menu.html'
    });

	$('#head, .site-container').click(function(){

		$.sidr('close', 'sidr-main');

	});


});