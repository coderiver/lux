head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$('.js-popup').hide();
	});

	setTimeout(function() {
	  if (location.hash) {
	    window.scrollTo(0, 0);
	  }
	}, 100);

	// slider
	function slider() {
		var el = $('.slider'),
				prev = el.find('.slider__prev'),
				next = el.find('.slider__next'),
				list = el.find('.slider__content'),
				item = el.find('.slider__item'),
				window_hash = window.location.hash;
		next.on('click', function(){
			var act = el.find('.slider__item.is-active');
			item.removeClass('is-active');
			if (act.next().length) {
				var next_id = act.next().attr('id');
				window.location.hash = '#' + next_id;
				act.next().addClass('is-active');
			}
			else{
				var first_id = item.first().attr('id');
				window.location.hash = '#' + first_id;
				item.first().addClass('is-active');
			};
			if (act.next().hasClass('slider__item_dark')) {
				el.addClass('slider_dark');
			}
			else {
				el.removeClass('slider_dark');
			};

			if (act.next().hasClass('slider__item_sir')) {
				el.addClass('slider_sir');
			}
			else {
				el.removeClass('slider_sir');
			};


			if (act.next().hasClass('slider__item_smet')) {
				el.addClass('slider_smet');
			}
			else {
				el.removeClass('slider_smet');
			};

			if (act.next().hasClass('slider__item_cola')) {
				el.addClass('slider_cola');
			}
			else {
				el.removeClass('slider_cola');
			};
		});
		prev.on('click', function(){
			var act = el.find('.slider__item.is-active');
			item.removeClass('is-active');
			if (act.prev().length) {
				var prev_id = act.prev().attr('id');
				window.location.hash = '#' + prev_id;
				act.prev().addClass('is-active');
				el.removeClass('slider_dark');
			}
			else{
				var last_id = item.last().attr('id');
				window.location.hash = '#' + last_id;
				item.last().addClass('is-active');
				if (item.last().hasClass('slider__item_dark')) {
					el.addClass('slider_dark');
				};
			};
			if (act.prev().hasClass('slider__item_dark')) {
				el.addClass('slider_dark');
			};

			if (act.prev().hasClass('slider__item_sir')) {
				el.addClass('slider_sir');
			}
			else {
				el.removeClass('slider_sir');
			};


			if (act.prev().hasClass('slider__item_smet')) {
				el.addClass('slider_smet');
			}
			else {
				el.removeClass('slider_smet');
			};

			if (act.prev().hasClass('slider__item_cola')) {
				el.addClass('slider_cola');
			}
			else {
				el.removeClass('slider_cola');
			};

		});
		if (window_hash) {
			item.removeClass('is-active');
			$(window_hash).addClass('is-active');
			if ($('.slider__item.is-active').hasClass('slider__item_smet')) {
				el.addClass('slider_smet');
			}
			else {
				el.removeClass('slider_smet');
			};

			if ($('.slider__item.is-active').hasClass('slider__item_cola')) {
				el.addClass('slider_cola');
			}
			else {
				el.removeClass('slider_cola');
			};
			if ($('.slider__item.is-active').hasClass('slider__item_sir')) {
				el.addClass('slider_sir');
			}
			else {
				el.removeClass('slider_sir');
			};
		};
	};
	slider();

	// window scroll
	$(window).scroll(function(){
		var scroll_top = $(document).scrollTop();
		// chips vegitable
		$('.js-vegitable-pepper').css('margin-top', (scroll_top*.2)+'px');
		$('.js-vegitable-potatos').css('margin-top', (scroll_top*.5)+'px');
		$('.js-vegitable-onion').css('margin-top', (scroll_top*.18)+'px');

		// chips vegitable
		 var chips_vegitable = $('.js-chips-vegitable');
		 chips_vegitable.each(function(){
		 	var scroll_top = $(document).scrollTop(),
		 			top = $(this).offset().top,
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
		// 1
		item_1.height(item_1_height - scroll_top);
		// 3
		if (scroll_top >= 462) {
			item_3.height(scroll_top - 462);
		}
		else {
			item_3.height(0);
		}
		// 5
		if (scroll_top >= 1492) {
			item_5.height(scroll_top - 1492);
		}
		else {
			item_5.height(0);
		}

		// angry birds
		var angry_birds = $('.js-angry-birds'),
				angry_birds_item_1 = angry_birds.find('.birds__item_green'),
				angry_birds_item_2 = angry_birds.find('.birds__item_footer');
		if (scroll_top >= 740) {
			angry_birds_item_1.height(scroll_top - 740);
		}
		else {
			angry_birds_item_1.height(0);
		};


	});
	

});  