$(document).ready(function(){

	var player = 1;

	$('.box').on('click', function(event){


		var boxSelected = $(this);

	if (boxSelected.hasClass('red') || boxSelected.hasClass('blue')){

		alert('This square has already been selected! please choose another.');
	}else{

		if (player === 1) {
			boxSelected.addClass('red');
			if(checkIfPlayerWon('red')){
				alert('Conrgats! Player ' + player + 'has won!')
			}else{
				player = 2;
			}

			
		}else {
			boxSelected.addClass('blue');
			if(checkIfPlayerWon('blue')){
				alert('Conrgats! Player ' + player + 'has won!')
			}else{
				player = 1;
			}
		}
		
	}

	});


// function checkIfPlayerWon(symbol){
// 		// x
// 		// o

// 	if($('.bx1').hasClass(symbol) && $('.bx2').hasClass(symbol) && $('.bx3').hasClass(symbol) && $('.bx4').hasClass(symbol)) {
// 	return true;
// 	} else if ($('.bx5').hasClass(symbol) && $('.bx6').hasClass(symbol) && $('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol)){
// 			return true;
// 		} else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
// 			return true;
// 		}else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
// 			return true;
// 		} else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
// 			return true;
// 		} else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
// 			return true;
// 		} else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
// 			return true;
// 		} else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}

var playing = true;

var wins = [];

// Winning vertically
wins[0]  = new Array(0, 7,  14, 21, 28, 35);
wins[1]  = new Array(1, 8,  15, 22, 29, 36);
wins[2]  = new Array(2, 9,  16, 23, 30, 37);
wins[3]  = new Array(3, 10, 17, 24, 31, 38);
wins[4]  = new Array(4, 11, 18, 25, 32, 39);
wins[5]  = new Array(5, 12, 19, 26, 33, 40);
wins[6]  = new Array(6, 13, 20, 27, 34, 41);
// Winning horizontally **done**
wins[7]  = new Array(0, 1,  2,  3,  4);
wins[8]  = new Array(5,  6,  7, 8, 9);
wins[9]  = new Array(10, 11, 12, 13, 14);
wins[10] = new Array(15, 16, 17, 18, 19);
wins[11] = new Array(20, 21, 22, 23, 24);

// Winning diagonally, left to right
wins[13] = new Array(14, 22, 30, 38);
wins[14] = new Array(7, 15, 23, 31, 39);
wins[15] = new Array(0, 8, 16, 24, 32, 40);
wins[16] = new Array(1, 9, 17, 25, 33, 41);
wins[17] = new Array(2, 10, 18, 26, 34);
wins[18] = new Array(3, 11, 19, 27);
//Winning diagonally, right to left
wins[19] = new Array(20, 26, 32, 38);
wins[20] = new Array(13, 19, 25, 31, 37);
wins[21] = new Array(6,  12, 18, 24, 30, 36);
wins[22] = new Array(5,  11, 17, 23, 29, 35);
wins[23] = new Array(4,  10, 16, 22, 28);
wins[24] = new Array(3,   9, 15, 21);

// while (playing) {
// 	var input = prompt('Enter a number: ')
// 	for (i = 0; i < wins.length; i++) {
// 		for (j = 0; j < wins[i].length; j++) {
// 			if (wins[i][j] == input) {
// 				wins[i].splice(j, 1);
// 				console.log(wins[i]);
// 				if (wins[i].length == 0) {
// 					console.log('You win!')
// 					playing = false;
				}
			}
		}
	}
}






});






