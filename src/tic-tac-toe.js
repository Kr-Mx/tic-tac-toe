class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.marksStorage = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.currentPlayerSymbol === "x" && this.marksStorage[rowIndex][columnIndex] === null) {
            this.marksStorage[rowIndex][columnIndex] = "x";
            return this.currentPlayerSymbol = "o";
        } else if (this.currentPlayerSymbol === "o" && this.marksStorage[rowIndex][columnIndex] === null) {
            this.marksStorage[rowIndex][columnIndex] = "o";
            return this.currentPlayerSymbol = "x";
        } else if (this.marksStorage[rowIndex][columnIndex] !== null) return this.currentPlayerSymbol
    }


    isFinished() {
        return !!this.getWinner() || this.isDraw()
    }

    getWinner() {
        let winner = [null];
        if (this.marksStorage[0][0] === this.marksStorage[0][1] &&
            this.marksStorage[0][1] === this.marksStorage[0][2] &&
            this.marksStorage[0][2] !== null) {
            winner.push(this.marksStorage[0][0])
        } else if (this.marksStorage[1][0] === this.marksStorage[1][1] &&
            this.marksStorage[1][1] === this.marksStorage[1][2] &&
            this.marksStorage[1][2] !== null) {
            winner.push(this.marksStorage[1][0])
        } else if (this.marksStorage[2][0] === this.marksStorage[2][1] &&
            this.marksStorage[2][1] === this.marksStorage[2][2] &&
            this.marksStorage[2][2] !== null) {
            winner.push(this.marksStorage[2][0])
        } else if (this.marksStorage[0][0] === this.marksStorage[1][0] &&
            this.marksStorage[1][0] === this.marksStorage[2][0] &&
            this.marksStorage[2][0] !== null) {
            winner.push(this.marksStorage[0][0])
        } else if (this.marksStorage[0][1] === this.marksStorage[1][1] &&
            this.marksStorage[1][1] === this.marksStorage[2][1] &&
            this.marksStorage[2][1] !== null) {
            winner.push(this.marksStorage[0][1])
        } else if (this.marksStorage[0][2] === this.marksStorage[1][2] &&
            this.marksStorage[1][2] === this.marksStorage[2][2] &&
            this.marksStorage[2][2] !== null) {
            winner.push(this.marksStorage[0][2])
        } else if (this.marksStorage[0][0] === this.marksStorage[1][1] &&
            this.marksStorage[1][1] === this.marksStorage[2][2] &&
            this.marksStorage[2][2] !== null) {
            winner.push(this.marksStorage[0][0])
        } else if (this.marksStorage[0][2] === this.marksStorage[1][1] &&
            this.marksStorage[1][1] === this.marksStorage[2][0] &&
            this.marksStorage[2][0] !== null) {
            winner.push(this.marksStorage[0][2])
        }
        return winner[winner.length - 1]
    }


    noMoreTurns() {
        let result = [];
        for (let i = 0; i < this.marksStorage.length; i++) {
            for (let j = 0; j < this.marksStorage[i].length; j++) {
                if (this.marksStorage[i][j] === null) {
                    result.push("turn")
                }
            }
        }
        return result.length === 0;

    }

    isDraw() {
        return (!(!this.noMoreTurns() || this.getWinner() !== null))
    }

    getFieldValue(rowIndex, colIndex) {
        return this.marksStorage[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;