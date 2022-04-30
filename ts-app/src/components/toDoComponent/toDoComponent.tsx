import {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {UseToDoActions} from "../../hooks/useToDoActions";


function ToDoComponent(){
    const {toDos, loading, error} = useTypedSelector((state)=>state.toDo)
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
        <div>
            Todo
            <pre>{JSON.stringify(toDos)}</pre>
        </div>
    )
}
export default ToDoComponent;