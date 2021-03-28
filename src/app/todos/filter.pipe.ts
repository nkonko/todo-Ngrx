import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    
    if(filter === 'completed')
    {
      return todos.filter(todo => todo.completed);
    }

    if(filter === 'pendings')
    {
      return todos.filter(todo => !todo.completed)
    }

    return todos;
  }

}
