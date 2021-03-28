import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create todo', props<{text: string}>());

export const toggle = createAction('[TODO] Toggle todo', props<{id: number}>());

export const edit = createAction('[TODO] edit todo', props<{id: number, text: string}>());

export const del = createAction('[TODO] delete todo', props<{id: number}>());

export const toggleAll = createAction('[TODO] toggleAll todo', props<{completed: boolean}>());

export const deleteAll = createAction('[TODO] deleteAll todo');