import React from "react";
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from "@mui/material";

function ToDoList({todos, deleteItem}){
    return (
        todos ? (
            todos.map((item, index)=>(
                    <div key={index} style={{display:'flex', flexDirection:'row', justifyContent: 'flex-start', alignItems:'flex-start'}}>
                        <ListItem>
                            <ListItemText primary={item.value} secondary={item.data} />
                        </ListItem>
                        <Button
                            variant="outlined" 
                            onClick={() => deleteItem(index)}
                            > Delete </Button>
                    </div>
                ))
            ) : (
                <div>
                    enter notes
                </div>
            )
            
    )
}

export default ToDoList;