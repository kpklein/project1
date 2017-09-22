Game Link: https://kpklein.github.io/project1/

Connect 4 Game

The main objective for this project was to design a browser based games using the following programming languages HTML, CSS and Java Script. HTML was used to create the base structure of the webpage. To style the webpage I used CSS because it allows you to style all the elements within the HTML in many different ways. The core function of the game was created using Javascript and Jquery. Jquery is basically a framework which simplifies alot of the keys features.

Connect 4 is a two player based game. The aim of the game for each player is to connect four of their assigned colour counter in a row either vertically,horizontally or diagonally in order for them to win. Each player has a turn to drop a counter where they would like in the 5x5 grid, 

Development stage:

Planning stage 1

* Wire Frame (Drawings)
* Basic grid 3x3 (test)
* Final grid 5x5

Planning stage 2

Once the design of the grid was completed on the HTML using a table. I then followed that up by adding event listeners to the buttons. I console logged and checked that all the buttons were functioning correctly and I then made each button switch colours from red and yellow. This was done by creating a class for each of the counter (red) and (yellow). The example below shows how I implemented this function to add either a red or a yellow counter to the gameboard and also how it switched between the two players.

* function setBoxRedOrYellow

	($box) {
		if(counter % 2 === 0){
				redMoves.push(parseInt($box.attr('box-num')));
				$box.attr('class', 'red');
				$turnText.html("Player 2 Turn 	YELLOW");
				checkWin(redMoves, 'red')
				counter++;
	


To make the counter drop down from the bottom row first,  I had to create a coloumn header and then compare the column header with the index with the bottom row, followed by a function with an if statement which would only allow the next available slots to be played. Below is an example...

* var $box1 = $($boxes[index+20]);
		var $box2 = $($boxes[index+15]);
		var $box3 = $($boxes[index+10]);
		var $box4 = $($boxes[index+5]);
		var $box5 = $($boxes[index+0]);


and finally I used an IF statement to take over the next avaliable slot. This was done by adding in an array which would help me compare the all the wins that was available for each of the players moves and this was also followed by a loop which was used to compare the arrays

* function checkWin(movesArray, name){
		
		for(var i = 0; i < winningPossibilities.length; i++){
		  winCounter = 0;
		  for(var j = 0; j < winningPossibilities[i].length; j++){
		    if(movesArray.indexOf(winningPossibilities[i][j]) !== -1){
		      winCounter++
		    }
		    if(winCounter === 4) {
			      $turnText.html('Game Over, ' + name + ' wins!');
			      removeRedandYellowListeners();
			      bell.play();
		    }




