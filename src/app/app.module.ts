import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiceComponent } from './dice/dice.component';
import { FormComponent } from './form/form.component';
import { DicesComponent } from './dices/dices.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DiceComponent, FormComponent, DicesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
