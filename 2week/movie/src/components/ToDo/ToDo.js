import React, {useCallback, useMemo} from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";
import { useSelector, useDispatch  } from 'react-redux'
function ToDo(){

    const todos = useSelector((state)=>(state.todosReducer.todos))
    const dispatch = useDispatch()
    
    const todoList = useMemo(() => {
        return todos.sort((a , b)=>{return a.data.localeCompare(b.data)})
                    .filter((todo)=>{return todo.checked === false})
    }, [todos])

    const todoListDone = useMemo(() => {
        return todos.sort((a , b)=>{return a.data.localeCompare(b.data)})
                    .filter((todo)=>{return todo.checked === true})
    }, [todos])

    const createTodoItem = useCallback((todo)=>{
        dispatch({type: 'todos/add', payload: todo})
    }, [dispatch])

    const deleteItem = useCallback((id)=>{
        dispatch({type: 'todos/delete', payload: id})
    }, [dispatch])


    const todoDone = useCallback((id)=>{
        dispatch({
            type: 'todos/doneChange', payload: id
        })
    }, [dispatch])
    return (
        <div>
            <div style={{margin:'50px', alignItems:'center', width:'500px', backgroundColor:'bisque', padding:'25px'}}>
                <ToDoItem onCreate={createTodoItem}></ToDoItem>
            </div>

            <div style={{display: "flex", flexDirection: 'row', justifyContent:'space-around', alignItems: 'flex-start'}}>
                <div>
                    <ToDoList  todos={todoList} todoDone={todoDone} deleteItem={deleteItem}></ToDoList>
                </div>
                <div>
                    <ToDoList  todos={todoListDone} todoDone={todoDone} deleteItem={deleteItem}></ToDoList>
                </div>
            </div>           
        </div>           
    )
}

export default ToDo;