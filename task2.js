var board = document.getElementById('board');
var cells = document.querySelectorAll('.cell');
var turn = document.getElementById('turn');
var currentPlayer = 'X';
var winner = null;

function handleCellClick(event) {
    var cell = event.target;
    if (cell.textContent === '' && winner === null) {
        cell.textContent = currentPlayer;
        cell.classList.add('disabled');
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        turn.textContent = `Player ${currentPlayer}'s turn`;
        checkWinner();
    }
}
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleCellClick);
}
function checkWinner() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        var a = combination[0];
        var b = combination[1];
        var c = combination[2];
        if (cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            winner = cells[a].textContent;
            turn.textContent = `Player ${winner} wins!`;
        }
    }
    // for (var combination of winningCombinations) {
    //     const [a, b, c] = combination;
    //     if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
    //         cells[a].style.backgroundColor = 'lightgreen';
    //         cells[b].style.backgroundColor = 'lightgreen';
    //         cells[c].style.backgroundColor = 'lightgreen';
    //         winner = cells[a].textContent;
    //         status.textContent = `Player ${winner} wins!`;
    //     }
    // }
}
