import './App.css';
import { observer } from 'mobx-react-lite';
import {TodoForm} from "./components/TodoForm";
import {Store} from "./models/Store";
import {useEffect} from "react";
import {TodoItem} from './components/TodoItem';

export const store = new Store([]);

export const App = observer(() => {
    useEffect(() => {
        store.loadTodos();
    }, []);

    return (
        <div style={{ width: "400px" }}>
            <TodoForm />
            {store.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
            <button onClick={() => store.saveTodos()}>save todos</button>
            <button onClick={() => store.loadTodos()}>update todos</button>
        </div>
    );
});
