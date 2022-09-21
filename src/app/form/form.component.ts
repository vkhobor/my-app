import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}
  input: number = 0;
  @Output() formValueEvent = new EventEmitter<number>();
  ngOnInit(): void {}

  onSubmit() {
    this.formValueEvent.emit(this.input);
  }
}
