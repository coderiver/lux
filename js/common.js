head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$('.js-popup').hide();
	});

	// slider
	function slider() {
		var el = $('.slider'),
				prev = el.find('.slider__prev'),
				next = el.find('.slider__next'),
				list = el.find('.slider__list');
		next.on('click', function(){
			list.each(function(){
				var item = $(this).find('.slider__item'),
						act = $(this).find('.slider__item.is-active');
				item.removeClass('is-active');
				if (act.next().length) {
					act.next().addClass('is-active');
				}
				else{
					item.first().addClass('is-active');
				};
			});
		});
		prev.on('click', function(){
			list.each(function(){
				var item = $(this).find('.slider__item'),
						act = $(this).find('.slider__item.is-active');
				item.removeClass('is-active');
				if (act.prev().length) {
					act.prev().addClass('is-active');
				}
				else{
					item.last().addClass('is-active');
				};
			});
		});
	};
	slider();

	// window scroll
	$(window).scroll(function(){
		var scroll_top = $(document).scrollTop();
		// chips vegitable
		var chips_vegitable = $('.js-chips-vegitable');
		chips_vegitable.each(function(){
			var top = $(this).offset().top,
					window_height = $(window).height(),
					wrapper_height = $('.wrapper').outerHeight();
			if (scroll_top >= (top - (window_height/2))) {
				$(this).addClass('is-visible');
			};
			if ((scroll_top + window_height) == wrapper_height) {
				if ($(this).hasClass('vegitable_potatos-box')) {
					$(this).addClass('is-visible');
				};
			};
		});

		// extreme fixed blocks
		var fixed_blocks = $('.extreme'),
				item_height = 570,
				item_1_height = 640,
				item_1 = fixed_blocks.find('.extreme__item_1'),
				item_3 = fixed_blocks.find('.extreme__item_3 .extreme__item-in'),
				item_5 = fixed_blocks.find('.extreme__item_5');

		console.log(scroll_top);
		// 1
		item_1.height(item_1_height - scroll_top);
		// 3
		if (scroll_top >= 515) {
			item_3.height(scroll_top - 515);
		}
		else {
			item_3.height(0);
		}
		// 5
		if (scroll_top >= 1545) {
			item_5.height(scroll_top - 1545);
		}
		else {
			item_5.height(0);
		}

	});
	

});  