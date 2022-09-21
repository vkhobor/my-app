import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  dices: number[] = [1, 2, 3, 4, 5, 6];

  rollDice(numberOfDices: number): void {
    this.dices = [...Array(numberOfDices).keys()].map((_) =>
      generateDiceResult()
    );
  }
}

function generateDiceResult(): number {
  return 1 + Math.floor(Math.random() * 6);
}
