import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private cells: string[] = [];
  private turn = 'x';
  private gameover = false;
  private winner = null;

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
  }

  reset() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = null;
    }
    this.turn = 'x';
    this.gameover = false;
    this.winner = null;
  }

  clickHandler(idx: number) {
    if (!this.gameover) {
      if (this.cells[idx] === null) {
        this.cells[idx] = this.turn;
        this.checkWinner();
        this.changeTurn();
      }
    }
  }

  changeTurn() {
    if (this.turn === 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }
  }

  checkWinner() {
    for (let i = 0; i < 9; i++) {
      if (i >= 0 && i < 3) {
        if (this.cells[0] === 'o') {
          if (this.cells[1] === 'o' && this.cells[2] === 'o') {
            this.winner = 'o';
          }
        } else {
          if (this.cells[0] === 'x') {
            if (this.cells[1] === 'x' && this.cells[2] === 'x') {
              this.winner = 'x';
            }
          }
        }
      }
    }
  }
}
