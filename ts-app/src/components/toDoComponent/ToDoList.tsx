import {ToDoTypes} from "../../types/toDoTypes";
import {ToDoItem} from "./ToDoItem";

type Props = {
    toDos: ToDoTypes[]
}
export function ToDoList ({toDos}:Props) {
    return(
        <div>
            {toDos.map((item:any)=>{
                return(
                        <ToDoItem toDo={item} key={item.taskId}/>
                    )
            })}
        </div>
    )
}