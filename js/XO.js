$(function() {
	var arrWinComb = [];
	var arrGame = ['','','','','','','','',''];
	var moveCount = 0;
	startGame ();
	var gameStatus = 0;
	function startGame (){
		for(var i=0;i<9;i++){
			var fild = '<div class="box" data-box-id="'+i+'"></div>';
			$('#wrap').append(fild);
		}
	}

	$(document).on('click', '.box', function() {
		moveCount++
		arrGame[$(this).data('box-id')] = '1';
		$(this).addClass('boxX');
		setTimeout(randomMove, 300);
		check();
	})

	function check() {
		if (arrGame[0] != '' && arrGame[0] == arrGame[1] && arrGame[1] == arrGame[2]){
			gameStatus++
			if(arrGame[1] == 1){
				alert('X win')
			} else if (arrGame[1] == 0){
				alert('0 win')
			}
		} else if (arrGame[3] != '' && arrGame[3] == arrGame[4] && arrGame[4] == arrGame[5]){
			gameStatus++
			if(arrGame[4] == 1){
				alert('X win')
			} else if (arrGame[4] == 0){
				alert('0 win')
			}
		} else if (arrGame[6] != '' && arrGame[6] == arrGame[7] && arrGame[7] == arrGame[8]){
			gameStatus++
			if(arrGame[7] == 1){
				alert('X win')
			} else if (arrGame[7] == 0){
				alert('0 win')
			}	
		} else if (arrGame[3] != '' && arrGame[0] == arrGame[3] && arrGame[3] == arrGame[6]){
			gameStatus++
			if(arrGame[3] == 1){
				alert('X win')
			} else if (arrGame[3] == 0){
				alert('0 win')
			}
		} else if (arrGame[4] != '' && arrGame[1] == arrGame[4] && arrGame[4] == arrGame[7]){
			gameStatus++
			if(arrGame[4] == 1){
				alert('X win')
			} else if (arrGame[4] == 0){
				alert('0 win')
			}
		} else if (arrGame[5] != '' && arrGame[2] == arrGame[5] && arrGame[5] == arrGame[8]){
			gameStatus++
			if(arrGame[5] == 1){
				alert('X win')
			} else if (arrGame[5] == 0){
				alert('0 win')
			}
		} else if (arrGame[0] != '' && arrGame[0] == arrGame[4] && arrGame[4] == arrGame[8]){
			gameStatus++
			if(arrGame[4] == 1){
				alert('X win')
			} else if (arrGame[4] == 0){
				alert('0 win')
			}
		} else if (arrGame[2] != '' && arrGame[2] == arrGame[4] && arrGame[4] == arrGame[6]){
			gameStatus++
			if(arrGame[4] == 1){
				alert('X win')
			} else if (arrGame[4] == 0){
				alert('0 win')
			}
		}
		if (gameStatus == 0 && moveCount === 9){
			alert('Game over')
		}
	}

	function randomMove() {
		var arrRand = [];
		moveCount++
		for (var i = 0; i < arrGame.length; i++) {
			if (gameStatus == 0 && arrGame[i] === '') {
				arrRand.push(i);
			}
		}
		if (arrRand.length === 0) {
			return false;
		}
		var randIndex = Math.floor(Math.random() * arrRand.length);
		arrGame[arrRand[randIndex]] = '0';
		$("#wrap").find("[data-box-id='"+arrRand[randIndex]+"']").addClass('box0');
		check();
	}
});
