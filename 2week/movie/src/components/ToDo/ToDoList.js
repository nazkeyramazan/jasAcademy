import React, {useMemo} from "react";
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import { ListItem } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

function ToDoList({todos, deleteItem, todoDone}){
    
    
    return (
        
    todos
        .map((item, index)=>(
            <div key={index} className={item.checked ? 'listItemDefault' : 'listItemDone'} style={{}}>
                <ListItem>
                    <ListItemButton role={undefined} onClick={()=>todoDone(item.id)} dense>

                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={item.checked}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText className={item.checked?'lined':'none'} primary={item.value} secondary={item.data} />
                    </ListItemButton>

                </ListItem>
                <Button
                    variant="outlined"
                    style={{marginRight:'15px'}} 
                    onClick={() => deleteItem(item.id)}
                    > Delete </Button>
            </div>
            )
        )
            
    )
}

export default ToDoList;