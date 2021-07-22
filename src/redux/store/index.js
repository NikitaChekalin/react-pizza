import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { filtersReducer } from '../reducers/filtersReducer';
import { pizzaReducer } from '../reducers/pizzaReducer';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({ filter: filtersReducer, pizza: pizzaReducer });

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
