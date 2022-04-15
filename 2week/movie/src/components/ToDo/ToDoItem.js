import React, {useRef, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ToDoItem({onCreate}){
    const dNow = new Date();
    const [todoItem, setTodoItem] = useState("")
    const [obj, setObj] = useState({
        id: 0,
        value: todoItem,
        data: dNow,
        checked: false        
    })
    const myRef = useRef(null);
    function createTodoItem(){
        myRef.current.focus()
        if(todoItem?.length > 3){
            setTodoItem('');
            onCreate(obj);

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
        var localeData = new Date(dNow).toLocaleDateString() + ' ' + new Date(dNow).toLocaleTimeString();
        setTodoItem(e.target.value);
        setObj(prevState=>({
            id: prevState.id+1,
            value: e.target.value,
            data: localeData,
            checked: false
        }))
    }
    return (
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <TextField style={{width:'400px'}} inputRef={myRef} id="outlined-basic" onKeyDown={(e)=>keyDown(e)} value={todoItem} label="Enter a toDo" onChange={(e)=>{setData(e)}} variant="outlined" />
            <Button style={{}} variant="outlined"  
                onClick={() => createTodoItem()
                }> create </Button>
        </div>
    )
}

export default ToDoItem;