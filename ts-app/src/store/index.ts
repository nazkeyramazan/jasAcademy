import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import {productReducer} from "./reducers/productReducer";
import {toDoReducer} from "./reducers/toDoReducer";

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    toDo: toDoReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type IState = ReturnType<typeof rootReducer>