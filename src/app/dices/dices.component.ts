import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.css'],
})
export class DicesComponent implements OnInit {
  constructor() {}
  @Input() dices: number[] = [];

  ngOnInit(): void {}
}
