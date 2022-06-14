import {Todo} from "../models/Todo";
import {FC, FormEventHandler, useState} from "react";
import {store} from "../App";

export const TodoForm: FC = () => {
    const [value, setValue] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        store.todos.push(new Todo(value));
        setValue("");
    };

    return (
        <form
            style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between"
            }}
            onSubmit={handleSubmit}
        >
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    padding: "8px",
                    fontSize: "20px",
                    width: "350px",
                    boxSizing: "border-box",
                    borderRadius: "4px"
                }}
            />
            <button
                type="submit"
                style={{
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #5dba59",
                    padding: "8px 16px",
                    background: "#7bfc77"
                }}
            >
                +
            </button>
        </form>
    );
};