import {useCallback, useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UseToDoActions} from "../../hooks/useToDoActions";
import {ToDoList} from "./ToDoList";
import {styled} from "@mui/material";
import {DragItem, ToDoFetched, ToDoTypes} from "../../types/toDoTypes";

const ToDoListBlock = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

function ToDoComponent(){
    const {toDos, loading, error, overdue, today, tomorrow} = useTypedSelector((state)=>state.toDo)
    const {fetchToDoList, onDragAndDrop} = UseToDoActions()
    useEffect(()=>{
        fetchToDoList()
    }, [fetchToDoList])
    const handleDrop = useCallback((dragItem:DragItem)=>{
        onDragAndDrop(dragItem)
    }, [onDragAndDrop])
    if(error){
        return(
            <div>
                Error
            </div>
        )
    }
    if(loading){
        return (
            <div className="loading">
                <div className="lds-spinner">
                    <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
                </div>
            </div>
        )
    }
    return (
        <div style={{background:'#E5E5E5', width:'100%'}}>
            <ToDoListBlock>
                <div>
                    <ToDoList toDos={toDos} onDrop={(dragItem)=>handleDrop(dragItem)}/>
                </div>
            </ToDoListBlock>

        </div>
    )
}
export default ToDoComponent;