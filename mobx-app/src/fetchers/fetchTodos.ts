import axios from "axios";
import { Todo } from "../models/Todo";

export const fetchTodos = () => {
    return axios
        .get(
            "https://jasacademy-dfdc6-default-rtdb.europe-west1.firebasedatabase.app/todos.json?api_key=AIzaSyCztXsvQrH4cYdjvUVYiOA9npTQ1mDG2d8"
        )
        .then((res) => res.data);
};

export const putTodos = (data: Todo[]) => {
    return axios
        .put(
            "https://jasacademy-dfdc6-default-rtdb.europe-west1.firebasedatabase.app/todos.json?api_key=AIzaSyCztXsvQrH4cYdjvUVYiOA9npTQ1mDG2d8",
            data
        )
        .then((res) => res.data);
};
