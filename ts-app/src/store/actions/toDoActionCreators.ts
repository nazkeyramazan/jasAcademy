import axios from 'axios'
import {Dispatch} from 'redux'
import {ToDoActionTypes, ToDoTypes} from "../../types/toDoTypes";


export const fetchToDoList = () => (dispatch:Dispatch<any>) => {
    dispatch({type: ToDoActionTypes.TODO_FETCH})
    axios.get<ToDoTypes[]>('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
        .then((res)=>{
            dispatch({type:ToDoActionTypes.TODO_FETCH_SUCCESS, payload: res.data})
        })
        .catch((e)=>{
            dispatch({type:ToDoActionTypes.TODO_FETCH_ERROR, payload: e})
        })
}
