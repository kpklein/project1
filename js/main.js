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
			boxSelected.addClass('yellow');
			if(checkIfPlayerWon('yellow')){
				alert('Conrgats! Player ' + player + 'has won!')
			}else{
				player = 1;
			}
		}
		
	}

	var $boxes = $("td");
	//shows each of the player turn
	var $turnText = $('.playerTurn');
	//counters for red and yellow choices
	var counter = 0;
	var winCounter = 0;
	//winning combinations array 
	var winningPossibilities = [[0,1,2,3],[1,2,3,4],[5,6,7,8],[6,7,8,9],[10,11,12,13],[11,12,13,14],[15,16,17,18],[16,17,18,19],[20,21,22,23],[21,22,23,24],[0,5,10,15],[5,10,15,20],[1,6,11,16],[6,11,16,21],[2,7,12,17],[7,12,17,22],[3,8,13,18],[8,13,18,23],[4,9,14,19],[9,14,19,24],[5,11,17,23],[0,6,12,18],[6,12,18,24],[1,7,13,19],[15,11,7,3],[21,17,13,9],[20,16,12,8],[16,12,8,4]]
	//arrays to track the moves of players
	var redMoves = [];
	var yellowMoves = [];
	
	// function gameStartSwitch() {
	// 	$('#startButton').click(function () {
	// 		audio.play();
	//     $('#startScreen').hide();
	//     $('#gameScreen').show();
	// 	});
	// }


	
	











































// // //Winning diagonally, right to left
// // wins[19] = new Array(9, 13, 17, 21);
// // wins[20] = new Array(4, 8, 12, 16, 20);
// // wins[21] = new Array(3,  7, 11, 15);




// 	});





// // function checkIfPlayerWon(symbol){


// // 	if($('.bx1').hasClass(symbol) && $('.bx6').hasClass(symbol) && $('.bx11').hasClass(symbol) && $('.bx16').hasClass(symbol) && $('.bx21').hasClass(symbol)) {
// // 	return true;
// // 	// } else if ($('.bx5').hasClass(symbol) && $('.bx6').hasClass(symbol) && $('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol)){
// // 	// 		return true;
// // 	// 	} else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){
// // 	// 		return true;
// // 	// 	}else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
// // 	// 		return true;
// // 	// 	} else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){
// // 	// 		return true;
// // 	// 	} else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){
// // 	// 		return true;
// // 	// 	} else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){
// // 	// 		return true;
// // 	// 	} else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)){
// // 	// 		return true;
// // 		} else {
// // 			return false;
// // 		}
// // 	}





// // // function checkIfPlayerWon(symbol){

// // // $(".box").click(function() {
// // //    var myClasses = this.classList;
// // //    alert(myClasses.length + " " + myClasses[0]);
// // // });



// // // }

// // // var playing = true;

// // // var wins = [];

// // // Winning vertically **done**
// // wins[0]  = new Array 	[[7,  12, 17, 22][0, 5,  10, 15, 20],[1, 6,  11, 16, 21]];
// // wins[1]  = new Array();
// // wins[2]  = new Array(2, );
// // wins[3]  = new Array(3, 8, 13, 18, 23);
// // wins[4]  = new Array(4, 9, 14, 19, 24);

// // // Winning horizontally **done**
// // wins[5]  = new Array(0, 1,  2,  3,  4);
// // wins[6]  = new Array(5,  6,  7, 8, 9);
// // wins[7]  = new Array(10, 11, 12, 13, 14);
// // wins[8] = new Array(15, 16, 17, 18, 19);
// // wins[9] = new Array(20, 21, 22, 23, 24);

// // // Winning diagonally, left to right
// // wins[13] = new Array(5, 11, 17, 23);
// // wins[14] = new Array(0, 6, 12, 18, 24);
// // wins[15] = new Array(1, 7, 13, 19);

// // //Winning diagonally, right to left
// // wins[19] = new Array(9, 13, 17, 21);
// // wins[20] = new Array(4, 8, 12, 16, 20);
// // wins[21] = new Array(3,  7, 11, 15);





// // // while (playing) {
// // // 	var input = prompt('Enter a number: ')
// // // 	for (i = 0; i < wins.length; i++) {
// // // 		for (j = 0; j < wins[i].length; j++) {
// // // 			if (wins[i][j] == input) {
// // // 				wins[i].splice(j, 1);
// // // 				console.log(wins[i]);
// // // 				if (wins[i].length == 0) {
// // // 					console.log('You win!')
// // // 					playing = false;
// // // 				}
// // // 			}
// // // 		}
// // // 	}
// // // }







// // });

});
