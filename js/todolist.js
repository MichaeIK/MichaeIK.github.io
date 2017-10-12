$(function(){
	var arrData = {};
	var toStor = [];
	var addFromLoc = '';
	var arrLi=$('li');

	//забераем данние с local storage если они есть
	if(localStorage.getItem('lockStor') != null){
	 toStor=JSON.parse(localStorage.getItem('lockStor'));
	 //перебираем получений масив
	 for( var i =0; i<toStor.length; i++){
	 	addFromLoc += "<span data='"+toStor[i].id+"'>"+toStor[i].data+"<li class='task'>&nbsp;<p class='content'>"+toStor[i].content+"</p></li><div class='delete'></div><div class='edit'></div><div class='checkbox'></div><hr></span>";
	 	//виводим на страницу
	 	$("ul").html(addFromLoc);
	 }
	 console.log(toStor);
	}


	$("#button").click(function(){
		// Берем дату
		var d = new Date();
		var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
		// Создаем блок 
	    var add = "<span data='"+d.getTime()+"'>"+strDate+"<li class='task'>&nbsp;<p class='content'>"+$('#inpToList').val()+"</p></li><div class='delete'></div><div class='edit'></div><div class='checkbox'></div><hr></span>";

	    // Добавляем в список
	    $("ul").append(add);

	    // Добавляем переменние в обєкт.масив с ключами
	    arrData.data = strDate;
	    arrData.content = $('#inpToList').val();
	    arrData.id = d.getTime();
	    // $("#totalToDo").html('Кількісь справ: '+arrLi.length+'');

		// Добавляем обєкт.масив в масив
	    toStor.push(arrData);

	    // Преобразовиваем масив в json
	    var myJSON = JSON.stringify(toStor);

	    // Загружаем в локалсторадж
	    localStorage.setItem('lockStor', myJSON);


	    // Чистим поле ввода
	    $('#inpToList').val('');
	});

	$(document).on('click', '.checkbox', function () {
			$(this).attr('class','checkboxDone');
			$(this).parent().css({'text-decoration':'line-through', 'color':'green'});
    		// $("#totalDone").html('Кількісь зроблених справ: "'+arrLi.length+'"');
	});
	$(document).on('click', '.delete', function () {
    	$(this).closest('span').remove();
    	
    	var idRemove = $(this).parent().attr('data');
    	toStor=JSON.parse(localStorage.getItem('lockStor'));
	 	for( var i =0; i<toStor.length; i++){
	 		if (toStor[i].id == idRemove){
	 			toStor.splice(i,1);
	 		}
	 	}
	 	var myJSON = JSON.stringify(toStor);
	 	localStorage.setItem('lockStor', myJSON);

    	// $("#totalToDo").html('Кількісь справ: '+countToDo);
	});
	$(document).on('click', '.edit', function () {
    	$(this).prev().prev().attr("contentEditable", true);
    	$(this).attr('class','save');
    	$(this).siblings('.checkboxDone').attr('class','checkbox');
    	$(this).parent().css({'text-decoration':'none', 'color':'black'});
	});
	$(document).on('click', '.save', function () {
    	$(this).prev().prev().attr("contentEditable", false);
    	$(this).attr('class','edit');
	});
})