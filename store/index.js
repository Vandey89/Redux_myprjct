import { createStore, combineReducers } from 'redux' ;

import { todoStore } from './reducer';

const rootReducer = combineReducers({todoStore}) ;  //sozdali dlya ob'edeneniya vsex reducero(no u nas v rabote tolko 1)

export const store =  createStore(rootReducer) ; //sozdali Хранилище (store): хранит состояние приложения