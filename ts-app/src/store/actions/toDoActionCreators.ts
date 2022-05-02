import axios from 'axios'
import {Dispatch} from 'redux'
import {DragItem, ToDoActionTypes, ToDoFetched, ToDoTypes} from "../../types/toDoTypes";


export const fetchToDoList = () => (dispatch:Dispatch<any>) => {
    dispatch({type: ToDoActionTypes.TODO_FETCH})
    axios.get<ToDoTypes[]>('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
        .then((res)=>{
            dispatch({type:ToDoActionTypes.TODO_FETCH_SUCCESS, payload: res.data})
            dispatch({type:ToDoActionTypes.TODO_OVERDUE_LIST})
            dispatch({type:ToDoActionTypes.TODO_TODAY_LIST})
            dispatch({type:ToDoActionTypes.TODO_TOMORROW_LIST})
        })
        .catch((e)=>{
            dispatch({type:ToDoActionTypes.TODO_FETCH_ERROR, payload: e})
        })
}

export const onDragAndDrop = ( dragItem: DragItem) => (dispatch:Dispatch<any>) => {
    dispatch({type: ToDoActionTypes.TODO_DRAG_AND_DROP, payload: dragItem})
}

