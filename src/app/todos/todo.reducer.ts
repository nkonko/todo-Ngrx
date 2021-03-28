import { Action, createReducer, on } from '@ngrx/store';
import { create, toggle, edit, del, toggleAll, deleteAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [ new Todo('1'),new Todo('2'),new Todo('3')];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)] ),
  on(toggle, (state, { id }) => {
    return state.map(todo =>{
      
      if(todo.id === id)
      {
        
        return {
        ...todo,
        completed: !todo.completed
        }

      }else
      {
        return todo;
      }

    });
  } ),
  on(edit, (state, { id, text }) => {
    return state.map(todo =>{
      
      if(todo.id === id)
      {
        
        return {
        ...todo,
        text: text
        }

      }else
      {
        return todo;
      }

    });
  } ),
  on(del, (state, { id }) =>  state.filter( todo => todo.id !== id) ),
  on(toggleAll, (state, { completed }) =>  state.map(todo => {
    return {
      ...todo,
      completed: completed
    }
  }) ),
  on(deleteAll, (state) => state.filter(todo => !todo.completed) ),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}