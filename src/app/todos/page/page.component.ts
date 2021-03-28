import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  allCompleted: boolean = true;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  markAll()
  {
    this.allCompleted = !this.allCompleted;

    this.store.dispatch(actions.toggleAll({completed:this.allCompleted}));
  }

}
