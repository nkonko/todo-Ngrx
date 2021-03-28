import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store:Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
   }

  ngOnInit(): void {
  }

  add() : void
  {
    if(this.txtInput.invalid)
    {
      return;
    }

    this.store.dispatch( actions.create({text: this.txtInput.value}));

    this.txtInput.reset();
  }

}
