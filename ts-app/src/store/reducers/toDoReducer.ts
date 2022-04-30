import {Reducer} from "redux";
import {ToDoActions, ToDoReducerInitState, ToDoActionTypes } from "../../types/toDoTypes";

const initState = {
    toDos: [],
    loading: false,
}

export const toDoReducer:Reducer<ToDoReducerInitState, ToDoActions> = (state=initState, action) =>{
    switch (action.type){
        case ToDoActionTypes.TODO_FETCH:
            return {...state, loading: true, error: undefined}
        case ToDoActionTypes.TODO_FETCH_SUCCESS:
            return {...state, toDos: action.payload, loading: false};
        case ToDoActionTypes.TODO_FETCH_ERROR:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
}