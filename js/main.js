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
});

// 	function checkIfPlayerWon(symbol){
// 		// x
// 		// o

// 		if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
// 			return true;
// 		} else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
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

// });






