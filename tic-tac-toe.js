console.log(document);
document.addEventListener("DOMContentLoaded", function() {


    let xo = false; //false means X; true means O
    let gameOver = false;
    const squares = document.getElementsByClassName("square");
    const newGame = document.getElementsByClassName("btn");
    const status = document.getElementById("status");

    status.classList.remove("you-won");

    const winningSquares = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    console.log(squares.length);

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(event) {
            if (gameOver) {
                return;
            }
            if (xo && (squares[i].textContent == "")) {
                squares[i].textContent = "O";
                xo = !xo;
            } else if (!xo && (squares[i].textContent == "")) {
                squares[i].textContent = "X";
                xo = !xo;
            }
            checkWinner();
        });
    }

    for (let i = 0; i < newGame.length; i++) {
        newGame[i].addEventListener("click", function(event) {
            for (let j = 0; j < squares.length; j++) {
                squares[j].textContent = "";
            }
            status.classList.remove("you-won");
            status.textContent = "Move your mouse over a square and click to play an X or an O.";
            xo = false;
            gameOver = false;
        });
    }

    function checkWinner() {
        for (let k = 0; k < winningSquares.length; k++) {
            const [a, b, c] = winningSquares[k];
            const first = squares[a].textContent;
            const second = squares[b].textContent;
            const third = squares[c].textContent;
            if ((first === second) && (first === third) && (second === third) && !(first == "")) {
                status.classList.add("you-won");
                status.textContent = "Congratulations! " + first + " is the Winner!";
                gameOver = true;
            }
        }
    }

});