import {Reducer} from "redux";
import {ToDoActions, ToDoActionTypes, ToDoReducerInitState} from "../../types/toDoTypes";
import {Product} from "../../types/productTypes";

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
        case ToDoActionTypes.TODO_DRAG_AND_DROP:
            const newStage = action.payload.newStage
            const currentStage = action.payload.currentStage
            const toDo = action.payload.toDo
            state.toDos.map((column)=>{
                if(column.stage === newStage) {
                    column.items = [...column.items, toDo]
                }
                if(column.stage === currentStage) {
                    column.items =  column.items.filter((item:any) =>
                        item.taskId !== toDo.taskId
                    )
                }
            })
            // console.log(newTodos)
            // const newState = {...newState, toDos: toDos.}
            return {...state}

        default:
            return state;
    }
}