import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() todo: Todo;
  @ViewChild('editInput') txtEditInput: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;

  isEdit: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe( value => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  edit()
  {
    this.isEdit = true;
    this.txtInput.setValue(this.todo.text);
    
    setTimeout(()=>{
      this.txtEditInput.nativeElement.select();
    });
  }

  update()
  {
    this.isEdit = false;

    if(this.txtInput.value !== this.todo.text && !this.txtInput.invalid)
    {
      this.store.dispatch( actions.edit({id: this.todo.id, text: this.txtInput.value}) );
    }

    return;
  }

  del()
  {
    this.store.dispatch(actions.del({id: this.todo.id}));
  }

}
