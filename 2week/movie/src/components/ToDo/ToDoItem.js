import React, {useRef, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function ToDoItem({onCreate}){
    const dNow = new Date();

    const [todoItem, setTodoItem] = useState('')
    const myRef = useRef(null);
    function createTodoItem(){
        myRef.current.focus()
        setTodoItem({
            value: ''}
        );
        onCreate(todoItem);
       
    }
    function keyDown(e){
        if (e.keyCode === 13) {
            createTodoItem()
        }
    }               
    function setData(e){
        var localeData = dNow.getDate() + '.'+(dNow.getMonth()+1) + '.'+ dNow.getFullYear() + ' '+ dNow.getHours() + ':'+ dNow.getMinutes();
        setTodoItem({
            value: e.target.value,
            data: localeData
        })
    }
    return (
        <>
            <TextField inputRef={myRef} id="outlined-basic" onKeyDown={(e)=>keyDown(e)} value={todoItem?.value} label="Enter a toDo" onChange={(e)=>{setData(e)}} variant="outlined" />
            <Button style={{height:'70px'}} variant="outlined" size="large" 
                onClick={() => createTodoItem()
                }> create ToDo item </Button>
        </>
    )
}

export default ToDoItem;