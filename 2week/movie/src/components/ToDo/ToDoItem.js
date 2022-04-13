import React, {useRef, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function ToDoItem({onCreate}){
    const dNow = new Date();

    const [todoItem, setTodoItem] = useState('')
    const myRef = useRef(null);
    
    function createTodoItem(){
        myRef.current.focus()
        if(todoItem?.value.length > 3){
            setTodoItem({
                value: ''}
            );
            onCreate(todoItem);
        } else{
            alert("ToDo length must be more than 3")
        }
       
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
            data: localeData,
            checked: false
        })
    }
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <TextField style={{width:'400px'}} inputRef={myRef} id="outlined-basic" onKeyDown={(e)=>keyDown(e)} value={todoItem?.value} label="Enter a toDo" onChange={(e)=>{setData(e)}} variant="outlined" />
            <Button style={{}} variant="outlined"  
                onClick={() => createTodoItem()
                }> create </Button>
        </div>
    )
}

export default ToDoItem;