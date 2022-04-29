//Midterm Project
//For the midterm project, your requirement is simple: create a game!

//This game can be anything in the world that you want, just as long as it is written in JavaScript. You may write this however you want too. Here are the requirements:

//Algorithm and pseudocode (10 points)
//Fully functional game from start to end (10 points)
//Good code comments throughout - documentation (10 points)
//This project is due on Thursday October 20th at 11:59pm. Late submissions will not be allowed whatsoever on this project, not even a minute late.

//Dylan Osborne
//Course: CITPT 106-60 Intro/Computer Program
//Midterm Project
//Objective: Create A Functional Game
//Instructor: Jesse Snyder

//Tic-Tac-Toe
//Research & Citations:
//Simple Tic - Tac - Toe Using HTML5, CSS3 And Javascript - HTML/JavaScript Tutorials | Dream.In.Code. 
//(n.d.). Retrieved October 17, 2016, from http://www.dreamincode.net/forums/topic/247361-simple-tic-tac-toe-using-html5-css3-and-javascript/

//Player vs. computer tic tac toe game code. Retrieved October 17, 2016, from http://stackoverflow.com/questions/34254661/player-vs-computer-tic-tac-toe-game-code

//Java Graphics Tutorial. (n.d.). Retrieved October 17, 2016, from https://www.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html




if (document.all||document.getElementById){
	
document.write('<style>.tictac{')
document.write('width:50px;height:50px;')
document.write('}</style>')
}

//reference page 63 window objects -alert (string)

//alert("Play Against The Computer. Tic-Tac-Toe.")


//Variables reference page 71
var square1
var square2
var square3
var square4
var square5
var square6
var square7
var square8
var square9

// note from page 71: = assigns the result of the expression to the variable.

var square1T = 0
var square2T = 0
var square3T = 0
var square4T = 0
var square5T = 0
var square6T = 0
var square7T = 0
var square8T = 0
var square9T = 0
var moveCount = 0
var turn = 0
var mode = 1

function vari()
{
square1 = document.tic.square1.value
square2 = document.tic.square2.value
square3 = document.tic.square3.value
square4 = document.tic.square4.value
square5 = document.tic.square5.value
square6 = document.tic.square6.value
square7 = document.tic.square7.value
square8 = document.tic.square8.value
square9 = document.tic.square9.value
}
function check()
//page 201 reference textbook
{
	//page 235 reference logical operators
  if(square1 == " X " && square2 == " X " && square3 == " X ")
  {
    alert("You Win!")
    reset()
  } 
  else if(square4 == " X " && square5 == " X " && square6 == " X ")
  {
    alert("You Win!")
    reset()
  } 
  else if(square7 == " X " && square8 == " X " && square9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(square1 == " X " && square5 == " X " && square9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(square1 == " X " && square4 == " X " && square7 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(square2 == " X " && square5 == " X " && square8 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(square3 == " X " && square6 == " X " && square9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(square1 == " X " && square5 == " X " && square9 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else if(square3 == " X " && square5 == " X " && square7 == " X ")
  {
    alert("You Win!")
    reset()
  }
  else
  {
    winCheck()
    check2()
    drawCheck()  
  } 
}

function check2()
{
  vari()
  drawCheck()
   
//page 235 reference logical operators

  if(square1 == " O " && square2 == " O " && square3 == " O ")
  {
    alert("You Lose!")
    reset()
  } 
  else if(square4 == " O " && square5 == " O " && square6 == " O ")
  {
    alert("You Lose!")
    reset()
  } 
  else if(square7 == " O " && square8 == " O " && square9 == " O ")
  {
    alert("You Lose!")
    reset()
  }
  else if(square1 == " O " && square5 == " O " && square9 == " O ")
  {
    alert("You Lose!")
    reset()
  }
  else if(square1 == " O " && square4 == " O " && square7 == " O ")
  {
    alert("You Lose!")
    reset()
  }
  else if(square2 == " O " && square5 == " O " && square8 == " O ")
  {
    alert("You Lose!")
    reset()
  }
  else if(square3 == " O " && square6 == " O " && square9 == " O ")
  {
    alert("You Lose!")
    reset()
  }
  else if(square1 == " O " && square5 == " O " && square9 == " O ")
  {
    alert("You Lose!")
    reset()
  }
  else if(square3 == " O " && square5 == " O " && square7 == " O ")
  {
    alert("You Lose!")
    reset()
  }
}

function player1Check()

//page 235 reference logical operators
{
  if(square1 == " X " && square2 == " X " && square3 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  } 
  else if(square4 == " X " && square5 == " X " && square6 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  } 
  else if(square7 == " X " && square8 == " X " && square9 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else if(square1 == " X " && square5 == " X " && square9 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else if(square1 == " X " && square4 == " X " && square7 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else if(square2 == " X " && square5 == " X " && square8 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else if(square3 == " X " && square6 == " X " && square9 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else if(square1 == " X " && square5 == " X " && square9 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else if(square3 == " X " && square5 == " X " && square7 == " X ")
  {
    alert("Player 1 wins!")
    reset()
  }
  else
  {
    player2Check()
    drawCheck()  
  } 
}

function player2Check()

//page 235 reference logical operators
{
  vari()
  drawCheck()
  if(square1 == " O " && square2 == " O " && square3 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  } 
  else if(square4 == " O " && square5 == " O " && square6 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  } 
  else if(square7 == " O " && square8 == " O " && square9 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
  else if(square1 == " O " && square5 == " O " && square9 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
  else if(square1 == " O " && square4 == " O " && square7 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
  else if(square2 == " O " && square5 == " O " && square8 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
  else if(square3 == " O " && square6 == " O " && square9 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
  else if(square1 == " O " && square5 == " O " && square9 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
  else if(square3 == " O " && square5 == " O " && square7 == " O ")
  {
    alert("Player 2 wins!")
    reset()
  }
}

function drawCheck()
{
  vari()
  moveCount = square1T + square2T + square3T + square4T + square5T + square6T + square7T + square8T + square9T 
  if(moveCount == 9)
  {
    reset()
    alert("Draw") 
  }
}



function winCheck()
{
  check2()
  
  //If statements & if else stetements: pg 237 
  if(square1 == " O " && square2 == " O " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O "
    square3T = 1;
    turn = 0;
  }
  else if(square2 == " O " && square3 == " O " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O "
    square1T = 1;
    turn = 0;
  }
  else if(square4 == " O " && square5 == " O " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O "
    square6T = 1;
    turn = 0;
  }
  else if(square5 == " O " && square6 == " O " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O "
    square4T = 1;
    turn = 0;
  }
  else if(square7 == " O " && square8 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square8 == " O " && square9 == " O " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O "
    square7T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square5 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square5 == " O " && square9 == " O " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O "
    square1T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square5 == " O " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O "
    square7T = 1;
    turn = 0;
  }
  else if(square7 == " O " && square5 == " O " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O "
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square3 == " O " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O "
    square2T = 1;
    turn = 0;
  }
  else if(square4 == " O " && square6 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else if(square7 == " O " && square9 == " O " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O "
    square8T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square7 == " O " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O "
    square4T = 1;
    turn = 0;
  }
  else if(square2 == " O " && square8 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square9 == " O " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O "
    square6T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square5 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square4 == " O " && square7 == " O " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O "
    square1T = 1;
    turn = 0;
  }
  else if(square5 == " O " && square8 == " O " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O "
   square2T = 1;
    turn = 0;
  }
  else if(square6 == " O " && square9 == " O " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O "
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square4 == " O " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O "
    square7T = 1;
    turn = 0;
  }
  else if(square2 == " O " && square5 == " O " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O "
    square8T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square6 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square9 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square7 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else
  {
    computer()
  }
  check2()
}
function computer()
{
  check2()
  if(square1 == " X " && square2 == " X " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O "
    square3T = 1;
    turn = 0;
  }
  else if(square2 == " X " && square3 == " X " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O "
    square1T = 1;
    turn = 0;
  }
  else if(square4 == " X " && square5 == " X " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O "
    square6T = 1;
    turn = 0;
  }
  else if(square5 == " X " && square6 == " X " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O "
    square4T = 1;
    turn = 0;
  }
  else if(square7 == " X " && square8 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square8 == " X " && square9 == " X " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O "
    square7T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square5 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square5 == " X " && square9 == " X " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O "
    square1T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square5 == " X " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O "
    square7T = 1;
    turn = 0;
  }
  else if(square7 == " X " && square5 == " X " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O "
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square3 == " X " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O "
    square2T = 1;
    turn = 0;
  }
  else if(square4 == " X " && square6 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else if(square7 == " X " && square9 == " X " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O "
    square8T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square7 == " X " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O "
    square4T = 1;
    turn = 0;
  }
  else if(square2 == " X " && square8 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square9 == " X " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O "
    square6T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square5 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square4 == " X " &&square7 == " X " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O "
    square1T = 1;
    turn = 0;
  }
  else if(square5 == " X " && square8 == " X " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O "
    square2T = 1;
    turn = 0;
  }
  else if(square6 == " X " && square9 == " X " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O "
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square4 == " X " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O "
    square7T = 1;
    turn = 0;
  }
  else if(square2 == " X " && square5 == " X " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O "
    square8T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square6 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O "
    square9T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square9 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square7 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O "
    square5T = 1;
    turn = 0;
  }
  else
  {
    AI()
  }
  check2()
}

//Computer calculations. AI =  Artificial Intelligence

function AI()
{
  vari()
  if(document.tic.square5.value == "     " && turn == 1)
  {
    document.tic.square5.value = " O "
    turn = 0
    square5T = 1
  }
  else if(document.tic.square1.value == "     " && turn == 1)
  {
    document.tic.square1.value = " O "
    turn = 0
    square1T = 1
  }
  else if(document.tic.square9.value == "     " && turn == 1)
  {
    document.tic.square9.value = " O "
    turn = 0
    square9T = 1
  }
  else if(document.tic.square6.value == "     " && turn == 1)
  {
    document.tic.square6.value = " O "
    turn = 0
    square6T = 1
  }
  else if(document.tic.square2.value == "     " && turn == 1)
  {
    document.tic.square2.value = " O "
    turn = 0
    square2T = 1
  }
  else if(document.tic.square8.value == "     " && turn == 1)
  {
    document.tic.square8.value = " O "
    turn = 0
    square8T = 1
  }
  else if(document.tic.square3.value == "     " && turn == 1)
  {
    document.tic.square3.value = " O "
    turn = 0
    square3T = 1
  }
  else if(document.tic.square7.value == "     " && turn == 1)
  {
    document.tic.square7.value = " O "
    turn = 0
    square7T = 1
  }
  else if(document.tic.square4.value == "     " && turn == 1)
  {
    document.tic.square4.value = " O "
    turn = 0
    square4T = 1
  }
  check2()
}


//Reset

function reset()
{
  document.tic.square1.value = "   "
  document.tic.square2.value = "   "
  document.tic.square3.value = "   "
  document.tic.square4.value = "   "
  document.tic.square5.value = "   "
  document.tic.square6.value = "   "
  document.tic.square7.value = "   "
  document.tic.square8.value = "   "
  document.tic.square9.value = "   "
  square1T = 0
  square2T = 0
  square3T = 0
  square4T = 0
  square5T = 0
  square6T = 0
  square7T = 0
  square8T = 0
  square9T = 0
  vari()
  turn = 0
  moveCount = 0
}

function resetter()
{
  reset()
}