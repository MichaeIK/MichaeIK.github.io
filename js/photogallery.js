for (var i = 1; i<21; i++){	
	$('.slides').append('<li class="slide"><img class ="imgSmall" src="image/cat'+i+'.jpg"></li>');
};

$(function(){
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var currentSlide = 1;
	var interval;

	/// big image for gallery
	$('.imgSmall').click(function(){
		$('.imgBig').remove();
		$(this).clone().appendTo(".col-sm-9").attr('class','imgBig');
	});

	/// slider
	function startSlider(){
		interval = setInterval(function(){
			$slideContainer.animate({'top':'-=280px'}, 1000, function(){
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('top', 0)
				}
			});
		}, 1500);
	}
	function pouseSlider (){
		clearInterval(interval);
	}
	function pauseSlider() {
        clearInterval(interval);
    }
    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
    startSlider();

	///avatarka
	$(document).on('click', '.imgCat', function(){
		for (var i = 1; i<21; i++){	
		$('.forCat').append('<div class = "avatar" data-name="'+i+'" style ="background-image: url(image/cat'+i+'.jpg)"></div>');
		$('.imgCat').attr('class', 'imgCat1')
		};
	});
	$(document).on('click', '.avatar', function(){
		$('.imgCat1').css('background-image', 'url(image/cat'+$(this).data('name')+'.jpg)');
		$('.imgCat1').attr('class','imgCat');
		$('.avatar').remove();
		
	})
})
