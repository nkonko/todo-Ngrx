import { createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all';

const _filterReducer = createReducer(initialState,
    on(setFilter, (state: validFilters, {filter}) => filter),
);

export function filterReducer(state, action) {
    return _filterReducer(state, action);
}