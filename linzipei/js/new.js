$(window).scroll(function() {
				
				if($(window).scrollTop() > 190) {
					$('.navigation').addClass("sticky");
				} else {
					$('.navigation').removeClass("sticky");
				}
			
				if($(window).scrollTop() > 200) {
					$('.navigation').addClass("offset");
				} else {
					$('.navigation').removeClass("offset");
				}
			
				if($(window).scrollTop() > 500) {
					$('.navigation').addClass("scrolling");
				} else {
					$('.navigation').removeClass("scrolling");
				}
			
			});

