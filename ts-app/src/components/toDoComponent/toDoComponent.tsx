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
const TopBlock = styled('div')`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  margin: 12px 8px 0 8px;

`
const Stage = styled('div')`
  height: 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.015em;
  text-transform: uppercase;
  color: #1D1D1F;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const Horizontal = styled('div')`
  width: 228px;
  height: 0;
  margin: 12px auto;
  border: 3px solid #787878;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`
const Len = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 19px;
  height: 18px;
  background: #787878;
  border-radius: 10px;
  order: 1;
  flex-grow: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #E5E5E5;
`
function ToDoComponent(){
    const {loading, error, overdue, today, tomorrow} = useTypedSelector((state)=>state.toDo)
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
            <div>Loading</div>
        )
    }
    return (
        <div style={{background:'#E5E5E5', width:'100%'}}>
            <ToDoListBlock>
                <div>
                    <TopBlock>
                        <Stage>
                            ПРОСРОЧЕННЫЕ
                        </Stage>
                        <Len>
                             {overdue.length}
                        </Len>
                    </TopBlock>
                    <Horizontal/>
                    <ToDoList toDos={overdue}/>
                </div>
                <div>
                    <TopBlock>
                        <Stage>
                            ЗАДАЧИ НА СЕГОДНЯ
                        </Stage>
                        <Len>
                            {today.length}
                        </Len>
                    </TopBlock>
                    <Horizontal/>
                    <ToDoList toDos={today}/>
                </div>
                <div>
                    <TopBlock>
                        <Stage>
                            ЗАДАЧИ НА ЗАВТРА
                        </Stage>
                        <Len>
                            {tomorrow.length}
                        </Len>
                    </TopBlock>
                    <Horizontal/>
                    <ToDoList toDos={tomorrow}/>
                </div>
            </ToDoListBlock>

        </div>
    )
}
export default ToDoComponent;