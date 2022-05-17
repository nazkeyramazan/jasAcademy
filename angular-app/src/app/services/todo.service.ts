import {todo} from '../types/index'
import {EventEmitter} from "@angular/core";

const initialData = JSON.stringify([
  {id:1, todo:'Buy milk', done: true},
  {id:2, todo:'Todo item 2', done: false}
])
export class TodoService{

  private todos: todo[] = JSON.parse(localStorage.getItem('todos') || initialData)
  todosChanged = new EventEmitter<todo[]>()
  getTodos(){
    return [...this.todos]
  }
  emitChanges(){
    localStorage.setItem('todos', JSON.stringify(this.getTodos()))
    this.todosChanged.emit(this.getTodos())
  }
  addNewTodo(todo:todo){
    this.todos.push(todo);
    this.emitChanges()
  }

  todoDone(e:boolean, todo:todo){
    for(let i=0; i<this.todos.length; i++){
      if(this.todos[i]==todo){
        this.todos[i].done = e
      }
    }
    this.emitChanges()
  }

  deleteTodo(todo:any){
    this.todos = this.todos.filter(t=>t.id !== todo.id)
    this.emitChanges()

  }
}
