import { combineReducers, applyMiddleware, createStore } from 'redux'
import { todosReducer } from './reducers/todoReducer'
import { moviesReducer } from './reducers/moviesReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(combineReducers({
    moviesReducer,
    todosReducer,
}), composeWithDevTools(applyMiddleware(thunk)))

export default store;