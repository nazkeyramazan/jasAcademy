import {Simulate} from "react-dom/test-utils";

export enum ToDoActionTypes {
    TODO_FETCH = 'TODO_FETCH',
    TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS',
    TODO_FETCH_ERROR = 'TODO_FETCH_ERROR'
}

export type ToDoTypes = any
export type ToDoReducerInitState = {
    toDos: ToDoTypes[]
    loading:boolean
    error?: string
}
export type ToDoFetch = {
    type: ToDoActionTypes.TODO_FETCH
}
export type ToDoFetchSuccess = {
    type: ToDoActionTypes.TODO_FETCH_SUCCESS,
    payload: ToDoTypes[]
}
export type ToDoFetchError = {
    type: ToDoActionTypes.TODO_FETCH_ERROR,
    payload: string
}
export type ToDoActions = ToDoFetch | ToDoFetchSuccess | ToDoFetchError