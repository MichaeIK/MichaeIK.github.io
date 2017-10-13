$(function() {
	var arrWinComb = [];
	var arrGame = ['','','','','','','','',''];
	var moveCount = 0;

	for(var i=0;i<9;i++){
		var fild = '<div class="box" data-box-id="'+i+'"></div>';
		$('#wrap').append(fild);
	}

	$(document).on('click', '.box', function() {
		moveCount++
		arrGame[$(this).data('box-id')] = '1';
		$(this).addClass('boxX');
		setTimeout(randomMove, 300);
		check();
	})

	function check() {
		var x = 0;
		var o = 0;
		if (arrGame[0] != '' && arrGame[0] == arrGame[1] && arrGame[1] == arrGame[2]){
		} else if (arrGame[3] != '' && arrGame[3] == arrGame[4] && arrGame[4] == arrGame[5]){
		} else if (arrGame[6] != '' && arrGame[6] == arrGame[7] && arrGame[7] == arrGame[8]){	
		} else if (arrGame[3] != '' && arrGame[0] == arrGame[3] && arrGame[3] == arrGame[6]){
		} else if (arrGame[4] != '' && arrGame[1] == arrGame[4] && arrGame[4] == arrGame[7]){
		} else if (arrGame[5] != '' && arrGame[2] == arrGame[5] && arrGame[5] == arrGame[8]){
		} else if (arrGame[0] != '' && arrGame[0] == arrGame[4] && arrGame[4] == arrGame[8]){
		} else if (arrGame[2] != '' && arrGame[2] == arrGame[4] && arrGame[4] == arrGame[6]){
		}
		if (moveCount === 9){
			alert('Game over')
		}
	}
	function randomMove() {
		moveCount++
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