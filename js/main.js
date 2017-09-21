$(function (event){

	var $boxes = $("td");
	// This shows each of the player turn
	var $turnText = $('.playerTurn');
	//counters for red and yellow choices
	var counter = 0;
	var winCounter = 0;
	// This is all the possible winning combinations array 
	var winningPossibilities = [[0,1,2,3],[1,2,3,4],[5,6,7,8],[6,7,8,9],[10,11,12,13],[11,12,13,14],[15,16,17,18],[16,17,18,19],[20,21,22,23],[21,22,23,24],[0,5,10,15],[5,10,15,20],[1,6,11,16],[6,11,16,21],[2,7,12,17],[7,12,17,22],[3,8,13,18],[8,13,18,23],[4,9,14,19],[9,14,19,24],[5,11,17,23],[0,6,12,18],[6,12,18,24],[1,7,13,19],[15,11,7,3],[21,17,13,9],[20,16,12,8],[16,12,8,4]]
	//Created arrays to track the moves of players
	var redMoves = [];
	var yellowMoves = [];
	var play = $(".game-container").hide();
	var hide = $(".startInstructions").show();
	var startbuttonhide = $("startButton").show();

	$("#startButton").on("click", function(){
		$(".game-container").show();
		$(".startInstructions").hide();
		$("startButton").hide();


	})




	

	// function to run  when page loads
	function start() {
		removeClear();
		addRedandYellowListeners();
		addResetListener();

		// gameStartSwitch()
	}

	//Remove clears
	function removeClear(){
		for (var i = $boxes.length -1; i>= 0; i--) {
				var $box = $($boxes[i]);
				$box.removeClass("clear");
			}
	}	

	//FUNCTION TO SET UP DROP BOX LISTENERS
	function addDropListeners() {
		for (var i=$boxes.length-1; i>=0;i--) {
			var $box = $($boxes[i]);
			$box.on('click', addRedorYellow);
		}
	} 

	//this function to set up red and yellow Listeners (adds red or yellow counter to the table)
	function addRedandYellowListeners(){
		console.log('setting listeners')
		for (var i = $boxes.length-1; i>=0; i--){
			var $box = $($boxes[i]);
			$box.on('click', addRedorYellow)
		}
	}

	// function to remove all event listeners 
	function removeRedandYellowListeners(){
		for (var i = $boxes.length -1; i>=0;i--){
			var $box = $($boxes[i]);
			$box.off('click', addRedorYellow);
		}
	}

	// function to set up reset function listeners
	function addResetListener() {
		$('#reset').on('click', resetBoard)
		// audio.play();
	}

	function setBoxRedOrYellow($box) {
		if(counter % 2 === 0){
				redMoves.push(parseInt($box.attr('box-num')));
				$box.attr('class', 'red');
				$turnText.html("Player 2 Turn YELLOW");
				checkWin(redMoves, 'red')
				counter++;
		} else {
				yellowMoves.push(parseInt($box.attr('box-num')));
				$box.attr('class', 'yellow');
				$turnText.html(" Player 1 Turn RED");
				checkWin(yellowMoves, 'yellow')
				counter++;
		} if (counter >= 25) {
				$turnText.html('Game Over, Its a draw')
		}

	}

	// function to add red or yellow for choices
	function addRedorYellow() {
		var $dropCell = $(this);
		var $boxes = $('td');
		var $colHead = $('th');
		var index = $dropCell[0].cellIndex;
		var $box1 = $($boxes[index+20]);
		var $box2 = $($boxes[index+15]);
		var $box3 = $($boxes[index+10]);
		var $box4 = $($boxes[index+5]);
		var $box5 = $($boxes[index+0]);

		if ($box1.hasClass("")) {
			setBoxRedOrYellow($box1);
			// audio.play();
			} else if ($box2.hasClass("")) {
				// audio.play();
				setBoxRedOrYellow($box2)
			} else if ($box3.hasClass("")) {
				// audio.play();
				setBoxRedOrYellow($box3)
			} else if ($box4.hasClass("")) {
				// audio.play();
				setBoxRedOrYellow($box4)
			} else if ($box5.hasClass("")) {
				// audio.play();
				setBoxRedOrYellow($box5)
			}
		}

	// function to check the player has won
	function checkWin(movesArray, name){
		
		for(var i = 0; i < winningPossibilities.length; i++){
		  winCounter = 0;
		  for(var j = 0; j < winningPossibilities[i].length; j++){
		    if(movesArray.indexOf(winningPossibilities[i][j]) !== -1){
		      winCounter++
		    }
		    if(winCounter === 4) {
			      $turnText.html('Game Over, ' + name + ' wins!');
			      removeRedandYellowListeners();
		    }
		  }
		}
	}
	// function to do reset board
	function resetBoard() {
		for (var i = $boxes.length -1; i>= 0; i--) {
			var $box = $($boxes[i]);
			$box.attr('class', 'clear');
		}
		redMoves = [];
		yellowMoves = [];
		winCounter = 0;
		counter = 0;
		console.log('resetBoard')
		addRedandYellowListeners()
		$turnText.html("It's Player 1 turn RED")
		removeRedandYellowListeners();
		start();
	
	}

	start();

});










































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


