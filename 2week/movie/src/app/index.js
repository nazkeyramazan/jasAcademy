import { combineReducers, applyMiddleware, createStore } from 'redux'
import { todosReducer } from './reducers/todoReducer'
import { moviesReducer } from './reducers/moviesReducer'
import { rickAndMortyReducer } from './reducers/rickAndMortyReducer';
import { shopReducer } from './reducers/shopReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
    moviesReducer,
    todosReducer,
    rickAndMortyReducer,
    shopReducer,
}), composeWithDevTools(applyMiddleware(thunk)))

export default store;