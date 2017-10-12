$(function() {
	var arrWinComb = [];
	var arrGame = ['','','','','','','','',''];

	for(var i=0;i<9;i++){
		var fild = '<div class="box" data-box-id="'+i+'"></div>';
		$('#wrap').append(fild);
	}

	$(document).on('click', '.box', function() {
		arrGame[$(this).data('box-id')] = '1';
		$(this).addClass('boxX');
		randomMove();
		check();
	})

	function check() {
		var x = 0;
		var o = 0;
		if (arrGame[0] != '' && arrGame[0] == arrGame[1] && arrGame[1] == arrGame[2]){
		} else if (arrGame[3] != '' && arrGame[3] == arrGame[4] && arrGame[4] == arrGame[5]){
			if (arrGame[3] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		} else if (arrGame[6] != '' && arrGame[6] == arrGame[7] && arrGame[7] == arrGame[8]){
			if (arrGame[7] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		} else if (arrGame[3] != '' && arrGame[0] == arrGame[3] && arrGame[3] == arrGame[6]){
			if (arrGame[3] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		} else if (arrGame[4] != '' && arrGame[1] == arrGame[4] && arrGame[4] == arrGame[7]){
			if (arrGame[4] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		} else if (arrGame[5] != '' && arrGame[2] == arrGame[5] && arrGame[5] == arrGame[8]){
			if (arrGame[5] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		} else if (arrGame[0] != '' && arrGame[0] == arrGame[4] && arrGame[4] == arrGame[8]){
			if (arrGame[4] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		} else if (arrGame[2] != '' && arrGame[2] == arrGame[4] && arrGame[4] == arrGame[6]){
			if (arrGame[4] === 1) {
				var x = 1;
			} else {
				var o = 1;
			}
		}
		if (x==1){
			alert('X - Win')
		} else if (o==1) {
			alert('0 - Win')
		}
	}

	function randomMove() {
		var arrRand = [];
		for (var i = 0; i < arrGame.length; i++) {
			if (arrGame[i] === '') {
				arrRand.push(i);
			}
		}

		if (arrRand.length === 0) {
			return false;
		}

		var randIndex = Math.floor(Math.random() * arrRand.length);
		arrGame[arrRand[randIndex]] = '0';

		$("#wrap").find("[data-box-id='"+arrRand[randIndex]+"']").addClass('box0');
	}
});