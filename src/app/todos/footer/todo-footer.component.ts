import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { validFilters, setFilter } from '../../filter/filter.actions';
import { deleteAll } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  
  public selectedFilter: validFilters = 'all';
  public filters: validFilters[] = ['all', 'pendings', 'completed'];

  pendings: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  this.store.subscribe(state => {
    this.selectedFilter = state.filter;
    this.pendings = state.todos.filter( todo => !todo.completed).length
  });

  }

  public changeFilter(filter: validFilters)
  {
    this.store.dispatch(setFilter({filter}))
  }

  public clearCompleted()
  {
    this.store.dispatch(deleteAll())
  }

}
