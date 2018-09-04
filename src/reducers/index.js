
import {combineReducers} from 'redux';
import {userReducer} from './user';
import {pageReducer} from './page';

/*
export const initialState = {
    user: {
    name: 'Василий',
    surname: 'Реактов',
    age: 27
    }
}

export function rootReducer(state = initialState) {
    return state;
}
*/

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer

})