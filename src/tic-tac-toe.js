class TicTacToe {
    constructor() {
      this.CurrentPlayerSymbol = 'x';
      this.fieldArray = [[null,null,null], [null,null,null],[null,null,null]];
      this.rowIndex;
      this.columnIndex;
      this.draw = 9;
      this.winner = false;
      this.winnerPlayer = null;
    }
  
    getCurrentPlayerSymbol() {
      return this.CurrentPlayerSymbol
    }
  
    nextTurn(rowIndex, columnIndex) {
      this.rowIndex = rowIndex;
      this.columnIndex = columnIndex;
      
  
      if (this.fieldArray[ this.rowIndex][this.columnIndex] !== null) {
        
      }
      else {
        
        this.fieldArray[ this.rowIndex][this.columnIndex] = this.CurrentPlayerSymbol;
        let rowWin;
        for( let i = 0; i <=2; i++){
          if (this.fieldArray[i].some(row => row == 'null' || row !== this.CurrentPlayerSymbol)){
            rowWin = false;
          }
          else {
            rowWin = true; 
            break;
          }
        }
        let columnWin = [true,true,true];
        for( let j = 0; j <=2; j++){
            for (let i = 0; i <=2; i++){
              if (this.fieldArray[i][j] == 'null' || this.fieldArray[i][j] !== this.CurrentPlayerSymbol) {
                columnWin[j] = false;
              }
            }
          }
          if(this.fieldArray[0][0] == this.CurrentPlayerSymbol && this.fieldArray[1][1] == this.CurrentPlayerSymbol && this.fieldArray[2][2]== this.CurrentPlayerSymbol){
            this.winner = true;
          }
          if(this.fieldArray[0][2] == this.CurrentPlayerSymbol && this.fieldArray[1][1] == this.CurrentPlayerSymbol && this.fieldArray[2][0]== this.CurrentPlayerSymbol){
            this.winner = true;
          }
        this.winner = this.winner || columnWin.some(col => col == true) || rowWin;
        if (this.winner) {this.winnerPlayer = this.CurrentPlayerSymbol};
        if (this.CurrentPlayerSymbol === 'x') {
          this.CurrentPlayerSymbol = 'o'
        }
        else {
          this.CurrentPlayerSymbol = 'x'
        }
        --this.draw;
      }
    }
  
    isFinished() {
      if (this.winner || this.draw == 0){
        return true;
      }
      else {return false}
    }
  
    getWinner() {
      return this.winnerPlayer;
    }
  
    noMoreTurns() {
      if (this.draw == 0) {
        return true
      }
      else {
        return false }
    }
  
    isDraw() {
      if (this.draw == 0 && this.winner == false) {
        return true
      }
      else {
        return false }
    }
  
    getFieldValue(rowIndex, colIndex) {
      this.rowIndex = rowIndex;
      this.colIndex = colIndex;
      return this.fieldArray[this.rowIndex][this.colIndex]
    }
  }
  
  module.exports = TicTacToe;