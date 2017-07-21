//Mobile nav
$(document).ready(function() {
	$(".item-menu").on("click", function(){
		$("nav ul").toggleClass("item-showing");
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100){
			$("nav ul").removeClass("item-showing");
		}
	});
//Scroll
	var documentElem = $(document),
		nav = $('.b-hold'),
		lastScrollTop = 0;
		documentElem.on('scroll',function(){
			var currentScrollTop = $(this).scrollTop();
			if(currentScrollTop > lastScrollTop) nav.addClass('item-hide');
			else nav.removeClass('item-hide');
			lastScrollTop = currentScrollTop;
		});
});



