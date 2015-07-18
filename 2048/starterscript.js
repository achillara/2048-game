var grid = [];

$(document).ready(function(){
	setUpBoard();
	printBoard();
});

function setUpBoard(){

	grid = [
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
		   ];
}

function printBoard(){
	var board = '<br/>' + "*--------------*" + '<br/>';
	for(var i=0; i<grid.length; i++){
	 	board += "|   ";
		for(var j=0; j<grid[i].length; j++){
			board += grid[i][j] + "   |   ";
	 	}
	 	board += '<br/>';
	 	board += "*--------------*";
	 	board += '<br/>';
	 }

	for(var row=0; row<grid.length; row++){
		for(var col=0; col<grid.length; col++){

		}
	}
 
	
	
	// console.log(board);
	document.getElementById("container").innerHTML = board;



}

function keyHandler(e){
	
	console.log("key was pressed");
	e = e || window.event;

		if (e.keyCode == '38'){
			shiftBoardUp();
		}

		 else if (e.keyCode == '40'){
			shiftBoardDown();
		}

		 else if (e.keyCode == '37'){
			shiftBoardLeft();
		}

		else if (e.keyCode == '39'){
			shiftBoardRight();
		}
	printBoard();
	insertTile();
}
document.onkeydown = keyHandler;

function shiftRowLeft(row){
	 for(var col = 0; col < grid[row].length;col++){
		
	 	if(col === 0) {
	 		continue;
	 	}
	 	else {
	 		if(grid[row][col - 1] === 0) {
	 			grid[row][col-1] = grid[row][col]; //shifts it to the left
	 			grid[row][col] = 0; //makes original 0
	 		}
	 		else { 
	 			if(grid[row][col-1] === grid[row][col]){
	 				grid[row][col-1] = grid[row][col] * 2;
	 				grid[row][col] = 0;
 	 			}
	 		}
	 	}

 	}
 	
	 
}

 

 function shiftBoardLeft(){
 	for(var row=0; row < grid.length; row++){
 		shiftRowLeft(row);
 	}
	
 }



function shiftRowRight(row){

	 for(var col = grid[row].length-1; col >= 0 ;col--){
		if(col === grid[row].length-1) {
	 		continue;
	 	}
	 	else {
	 		if(grid[row][col + 1] === 0) {
	 			grid[row][col+1] = grid[row][col]; //shifts it to the right
	 			grid[row][col] = 0; //makes original 0
	 		}
	 		else { 
	 			if(grid[row][col+1] === grid[row][col]){
	 				grid[row][col+1] = grid[row][col] * 2;
	 				grid[row][col] = 0;
 	 			}
	 		}
	 	}

	}
	//var firstcol = grid[row].[0];
	//grid[row][0] = 0;
	
 }

 function shiftBoardRight(){
 	for(var row=0; row<grid.length; row++){
 		shiftRowRight(row);
 	}
 }


function shiftColDown(col){
 for(var row = grid[col].length - 1; row >= 0;row--){
		if(row === grid[col].length-1) {
	 		continue;
	 	}
	 	else {
	 		if(grid[row +1][col ] === 0) {
	 			grid[row+1][col] = grid[row][col]; //shifts it down
	 			grid[row][col] = 0; //makes original 0
	 		}
	 		else { 
	 			if(grid[row+1][col] === grid[row][col]){
	 				grid[row+1][col] = grid[row][col] * 2;
	 				grid[row][col] = 0;
 	 			}
	 		}
	 	}
	}
	
}


function shiftBoardDown(){
	for(var col = 0; col<grid.length; col++){
		shiftColDown(col);
	}
}

function shiftColUp(col){
	for(var row = 0; row <= grid[col].length-1 ;row++){
		if(row === 0) {
	 		continue;
	 	}
	 	else {
	 		if(grid[row -1][col ] === 0) {
	 			grid[row-1][col] = grid[row][col]; //shifts it down
	 			grid[row][col] = 0; //makes original 0
	 		}
	 		else { 
	 			if(grid[row-1][col] === grid[row][col]){
	 				grid[row-1][col] = grid[row][col] * 2;
	 				grid[row][col] = 0;
 	 			}
	 		}
	 	}
	}
}
 

function shiftBoardUp(){
	for(var col = 0; col<grid.length; col++){
		shiftColUp(col);
	}
}

function insertTile(){ 
	var randRow = Math.floor(Math.random()*3)+0;
	var randCol = Math.floor(Math.random()*3)+0;
	if( grid[randRow][randCol]==0){
		grid[randRow][randCol]=2;

	}
	else{
		insertTile();
	}
	printBoard();
}


