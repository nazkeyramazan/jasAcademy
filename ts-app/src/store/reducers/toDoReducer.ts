import {Reducer} from "redux";
import {ToDoActions, ToDoActionTypes, ToDoReducerInitState} from "../../types/toDoTypes";

const initState: ToDoReducerInitState = {
    toDos: [],
    loading: false,
    overdue: [],
    today: [],
    tomorrow: []
}

export const toDoReducer:Reducer<ToDoReducerInitState, ToDoActions> = (state=initState, action): ToDoReducerInitState =>{
    switch (action.type){
        case ToDoActionTypes.TODO_FETCH:
            return {...state, loading: true, error: undefined}
        case ToDoActionTypes.TODO_FETCH_SUCCESS:
            return {...state, toDos: action.payload, loading: false};
        case ToDoActionTypes.TODO_FETCH_ERROR:
            return {...state, error: action.payload, loading: false};
        case ToDoActionTypes.TODO_OVERDUE_LIST:
            const overdueList = state.toDos.find((toDo) => toDo.stage === "OVERDUE")?.items
            return {...state, overdue: overdueList ?? []}
        case ToDoActionTypes.TODO_TODAY_LIST:
            const todayList = state.toDos.find((toDo) => toDo.stage === "TODAY")?.items
            return {...state, today: todayList ?? []}
        case ToDoActionTypes.TODO_TOMORROW_LIST:
            const tomorrowList = state.toDos.find((toDo) => toDo.stage === "TOMORROW")?.items
            return {...state, tomorrow: tomorrowList ?? []}
        default:
            return state;
    }
}