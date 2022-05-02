import {DragItem, ToDoFetched, ToDoTypes} from "../../types/toDoTypes";
import {ToDoItem} from "./ToDoItem";
import {styled} from "@mui/material";
import {useDrop} from "react-dnd";
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
  align-self: stretch;
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

const List = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
type Props = {
    toDos?: ToDoFetched[],
    onDrop: (dragItem:DragItem) => void
}
export function ToDoList ({toDos, onDrop}:Props) {
    const [{canDrop, isOver }, drop ] = useDrop(()=>({
        accept: 'item',
        drop: (dragItem:DragItem)=>{
            onDrop(dragItem)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))
    return(
        <div ref={drop}
             style={{display: "flex" }}>
            {toDos?.map((item:any, index: number)=>{
                return(
                    <List key={index}>
                        <>
                    <TopBlock>
                        <Stage>
                            {item.stageName}
                        </Stage>
                        <Len>
                            {item.items.length}
                        </Len>
                    </TopBlock>
                    <Horizontal/>
                        </>
                        {item.items.map((todo:ToDoTypes)=>{
                        return(
                            <ToDoItem toDo={todo} key={item.taskId} item={item}/>
                            )
                        })}
                    </List>
                    )
            })}
        </div>
    )
}