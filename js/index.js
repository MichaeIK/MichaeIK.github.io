$(function(){
	var click = 0;
	var examples = { 
			Bootstrap : {title: 'Bootstrap', description: 'Landing page on bootstrap', links: [{name:'link on landing', link:'mylanding'}]}, 
			Materialize : {title: 'Materialize', description: 'Online shop on materialize', links: [{name:'link on online shop', link:'dogshop'}]}, 
			JavaScript: {title: 'JavaScript', description: 'Games on JS', links: [{name:'Game with numbers',link:'numbers'}, {name:'Game XO',link:'XO'}, {name:'Todolist',link:'todo'}, {name:'Life slider',link:'slider'}, {name:'Sea battle', link:'battle'}]}
			// React: {title: 'React', description: 'Blog on React'}
		};
	var block = $('<div class="examplBlock"></div>')

	$('.onClick').click(function(){
		

		if(click == 0){
			$(this).css('position', 'relative');
			$(this).append(block);
			$('.examplBlock').animate({
			'left':'100px',
			'width':'300px',
			'height':'300px'})
			// $('.examplBlock').animate({left:'250px'})
			click++

			for(let key in examples){
				if (examples[key]['title'] == $(this)[0].id){
					$('.examplBlock').append('<p class="tmp" >'+examples[key]['title']+'</p>')
					$('.examplBlock').append('<p class="tmp" >'+examples[key]['description']+'</p>')
					for(let keyLinks in examples[key]['links']){
						$('.examplBlock').append('<div class="tmp" ><p class="tmp" >'+examples[key]['links'][keyLinks]['name']+'</p><p class="tmp" >'+examples[key]['links'][keyLinks]['link']+'</p></div>')
					}
				}
			}

		} else {
			// $(this).css('position', 'relative');
			$('.examplBlock').animate({
				'top':'120px',
				'left':'30px',
				'width':'0px',
				'height':'0px'})
			$('.tmp').remove();
			$('block').remove();
			
			click = 0;
		}

		
	})

	$(document).scroll(function() {
		if($(document).scrollTop() > 40){
			$('.navDiv').css('position','fixed')
			if($(document).scrollTop() > $('.header').height() && $(document).scrollTop() < $('.header').height() + $('.secondSlide').height()+100){
				$('a').css('color','black')
			}else {
				$('a').css('color','white')
			}
			if ($(document).scrollTop() > $('.header').height() + $('.secondSlide').height()+100){
				$('.navDiv').css('background-color', '#252525')
			} else {
				$('.navDiv').css('background-color', 'transparent')
			}
		}
	})
})