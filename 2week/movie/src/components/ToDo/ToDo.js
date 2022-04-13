import React, {useCallback, useEffect, useState} from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";

function ToDo(){

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')|| '[]'))
    useEffect(()=>{
        localStorage.setItem('todos' ,JSON.stringify(todos))
    }, [todos])

    const createTodoItem = useCallback((todo)=>{
        setTodos(prev=>[...prev, todo])
    })

    function deleteItem(index){
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    function todoDone(index){
        const newTodos = todos.map((item, indexx)=>{
            if(indexx === index){
                item.checked = !item.checked
                return item;
            }
            return item
        }
        )
        setTodos(newTodos)

    }
    return (
        <div style={{margin:'50px', alignItems:'center', width:'500px', backgroundColor:'bisque', padding:'25px'}}>
            <ToDoItem onCreate={createTodoItem}></ToDoItem>
            <ToDoList todos={todos} todoDone={todoDone} deleteItem={deleteItem}></ToDoList>
        </div>
    )
}

export default ToDo;