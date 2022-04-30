import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import * as toDoActionCreators from '../store/actions/toDoActionCreators'
export const UseToDoActions = () =>{
    const dispatch = useDispatch();

    return useMemo(()=>{
        return bindActionCreators(toDoActionCreators, dispatch)
    }, [dispatch])
}