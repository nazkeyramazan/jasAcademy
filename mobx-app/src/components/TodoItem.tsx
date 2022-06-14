import {Todo} from "../models/Todo";
import {observer} from "mobx-react-lite";
import {FC} from "react";
import {store} from "../App";


export const TodoItem: FC<{ todo: Todo }> = observer(({ todo }) => {
    const removeItem = (todo: Todo) => {
        store.todos.splice(
            store.todos.findIndex((item) => item === todo),
            1
        );
    };

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "4px",
                display: "flex",
                borderRadius: "4px",
                margin: "10px 0",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <input
                value={todo.text}
                onChange={(e) => {
                    todo.text = e.target.value;
                }}
                style={{
                    fontSize: "16px",
                    padding: "4px",
                    width: "340px",
                    boxSizing: "border-box",
                    border: "none"
                }}
            />
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                    todo.completed = !todo.completed;
                }}
            />
            <button
                type="submit"
                style={{
                    fontSize: "20px",
                    borderRadius: "4px",
                    border: "1px solid #ba5959",
                    padding: "0 8px",
                    background: "#fc7777"
                }}
                onClick={() => {
                    removeItem(todo);
                }}
            >
                -
            </button>
        </div>
    );
});