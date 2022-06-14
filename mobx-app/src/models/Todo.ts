import { makeAutoObservable } from "mobx";

let idx = 0;
export class Todo {
    id: string;
    text: string;
    created: Date;
    completed: boolean;

    constructor(text: string) {
        this.text = text;
        this.created = new Date();
        this.id = this.created.getTime().toString() + idx++;
        this.completed = false;
        makeAutoObservable(this);
    }
}
