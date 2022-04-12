import React, {useEffect, useState} from "react";
import ToDoItem from "./ToDoItem";
import ToDoList from "./ToDoList";

function ToDo(){

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')|| '[]'))
    useEffect(()=>{
        localStorage.setItem('todos' ,JSON.stringify(todos))
    }, [todos])
    function createTodoItem(todo){
        setTodos(prev=>[...prev, todo])
    }
    function deleteItem(index){
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div style={{margin:'50px', alignItems:'center', width:'500px'}}>
            <ToDoItem onCreate={createTodoItem}></ToDoItem>
            <ToDoList todos={todos} deleteItem={deleteItem}></ToDoList>
        </div>
    )
}

export default ToDo;