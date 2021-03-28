import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
public todos: Todo[] = [];
public actualFilter: validFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos').subscribe(todos => this.todos = todos)

    this.store.subscribe(store => {
      this.todos = store.todos;
      this.actualFilter = store.filter;
    })
  }

}
