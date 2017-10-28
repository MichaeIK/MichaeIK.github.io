$(function(){
	var examples = { 
			Bootsrap : {title: 'Bootsrap', description: 'Landing page on bootstrap', links: 'link on landing'}, 
			Materialize : {title: 'Materialize', description: 'Online shop on materialize', links: 'link on online shop'}, 
			JavaScript{title: {'JavaScript', description: 'Games on JS', links: ['Game with numbers', 'Game XO', 'Todolist', 'Life slider', 'Sea battle'],
			React: {title: 'React', description: 'Blog on React'}
		};
	$('.bootstrap').click(function(){
		for(let i =0; i<examples.lenght; i++){
			console.log(examples[i]);
		}

		
	})
	$('.JS').click(function(){
		// $(.thirdSlide).append()
		console.log(examples[2])
	})
})