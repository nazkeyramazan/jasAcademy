import {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UseToDoActions} from "../../hooks/useToDoActions";
import {ToDoList} from "./ToDoList";
import {styled} from "@mui/material";

const ToDoListBlock = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

function ToDoComponent(){
    const {toDos, loading, error, overdue, today, tomorrow} = useTypedSelector((state)=>state.toDo)
    const {fetchToDoList} = UseToDoActions()
    useEffect(()=>{
        fetchToDoList()
    }, [fetchToDoList])

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

                    <ToDoList toDos={toDos}/>
                </div>
                {/*<div>*/}
                {/*    <TopBlock>*/}
                {/*        <Stage>*/}
                {/*            ЗАДАЧИ НА СЕГОДНЯ*/}
                {/*        </Stage>*/}
                {/*        <Len>*/}
                {/*            {today.length}*/}
                {/*        </Len>*/}
                {/*    </TopBlock>*/}
                {/*    <Horizontal/>*/}
                {/*    <ToDoList toDos={today}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <TopBlock>*/}
                {/*        <Stage>*/}
                {/*            ЗАДАЧИ НА ЗАВТРА*/}
                {/*        </Stage>*/}
                {/*        <Len>*/}
                {/*            {tomorrow.length}*/}
                {/*        </Len>*/}
                {/*    </TopBlock>*/}
                {/*    <Horizontal/>*/}
                {/*    <ToDoList toDos={tomorrow}/>*/}
                {/*</div>*/}
            </ToDoListBlock>

        </div>
    )
}
export default ToDoComponent;