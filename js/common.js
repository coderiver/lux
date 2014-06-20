head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	// window scroll
	$(window).scroll(function(){
		// chips vegitable
		var chips_vegitable = $('.js-chips-vegitable');
		chips_vegitable.each(function(){
			var scroll_top = $(document).scrollTop(),
					top = $(this).offset().top,
					window_height = $(window).height(),
					wrapper_height = $('.wrapper').height();
			if (scroll_top >= (top - (window_height/2))) {
				$(this).addClass('is-visible');
			};
			if ((scroll_top + window_height) == wrapper_height) {
				if ($(this).hasClass('chips__vegitable_potatos-box')) {
					$(this).addClass('is-visible');
				};
			};
		});
	});
	

});