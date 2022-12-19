


// Create Board  6 by 7 
// Players Chooses preferred color 
// Needs a alternating  turn function 
// alert function if player pieces reach the top of board 
// Alert is spot is already taken 
// Check for winner function 
// Needs winning combinations list
// check vertically horizontally and diagonality for winner 
// Drop the chips at end of game (for winner)
// Algorithm that accounts  for winner similar to TTT
// Reset game functiin







/*-------------------------------- Constants --------------------------------*/

// 0  1  2  3  4  5  6
// 7  8  9  10 11 12 13
// 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27
// 28 29 30 31 32 33 34
// 35 36 37 38 39 40 41

const winningCombos = [
        // Horizontal 
       [0,1,2,3]
       [7,8,9,10]
       [14,15,16,17]
       [21,22,23,24]
       [28,29,30,31]
       [35,36,37,38]
       [1,2,3,4]
       [8,9,10,11]
       [15,16,17,18]
       [22,23,24,25]
       [29,30,31,32]
       [36,37,38,39]
       [2,3,4,5]
       [9,10,11,12]
       [16,17,18,19]
       [23,24,25,26]
       [30,31,32,33]
       [37,38,39,40]
       [3,4,5,6]
       [10,11,12,13]
       [17,18,19,20]
       [24,25,26,27]
       [31,32,33,34]
       [38,39,40,41]
        // Vertical
        [0,7,14,21]
        [1,8,15,22]
        [2,9,16,23]
        [3,10,17,24]
        [4,11,18,25]
        [5,12,19,26]
        [6,13,20,27]
        [7,14,21,28]
        [14,21,28,35]
        [8,15,22,29]
        [15,22,29,36]
        [9,16,23,30]
        [16,23,30,37]
        [10,17,24,31]
        [17,24,31,38]
        [11,18,25,32]
        [18,25,32,39]
        [12,19,26,33]
        [19,26,33,40] 
        [13,20,27,34]
        [20,27,34,41]
        // Diagonal 
        [14,22,30,38]
        [7,15,23,31]
        [15,23,31,39]
        [0,8,16,24]
        [8,16,24,32]
        [16,24,32,40]
        [1,9,17,25]
        [9,17,25,33]
        [17,25,33,41]
        [2,10,18,26]
        [10,18,26,34]
        [3,11,19,27]
        [3,9,15,21]
        [4,10,16,22]
        [10,16,22,28]
        [5,11,17,23]
        [11,17,23,29]
        [17,23,29,35]
        [6,12,18,24]
        [12,18,24,30]
        [18,24,30,36]
        [13,19,25,31]
        [19,25,31,37]
        [20,26,32,38]
     ]
 




/*---------------------------- Variables (state) ----------------------------*/

let board 
let turn 
let winner 
let tie
 


/*------------------------ Cached Element References ------------------------*/

const circleEls = document.querySelectorAll('.cir')
console.log(circleEls);
// const messageEl = document.getElementById('#message')
// const resetBtn = document.getElementById('#reset')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/


init()

function init() {
    board = [null, null, null, null, null, null, null, null, null, null,
         null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null,
         null, null, null, null, null, null, null, null, null ];
    turn = 1
    winner = false
    tie = false
    // render()
    console.log(init)
}



// function render() {
//     updateBoard()
//     updateMessage()
// }




// function updateBoard() {
    

// }



// function updateMessage() {


// }
// function handleClick() {

// }



// function checkForTie() {

// }


// function checkForWinner() {

// }

// function switchPlayerTurn() {

// }
