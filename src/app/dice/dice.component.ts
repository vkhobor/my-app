import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css'],
})
export class DiceComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  _diceNumber: number = 0;
  @Input() set diceNumber(value: number) {
    this._diceNumber = value;
    this.dots = this.calcDots(value);
  }

  dots: string[] = [];

  public calcDots(value: number): string[] {
    return [...Array(value).keys()].map((dot) => this.dotClass(dot));
  }

  public isEven(): boolean {
    return this._diceNumber % 2 === 0;
  }

  /**
   * returns a class that starts with even|odd based on the value of diceNumber, and the actual dot index after
   * @param  {number} dotIndex
   * @returns string
   */
  public dotClass(dotIndex: number): string {
    return `${this.isEven() ? 'even' : 'odd'}-${dotIndex + 1}`;
  }

  // Example:
  // Dice rolled 2:
  // then dots in dice get even-1 even-2
  //
  // Dice rolled 3:
  // then dots in dice get odd-1 odd-2 odd-3
  //
  // Dice rolled 4:
  // even-1 even-2 even-3 even-4
}
