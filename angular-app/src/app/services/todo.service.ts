import {todo} from '../types/index'
import {EventEmitter} from "@angular/core";
export class TodoService{

  private todos: todo[] = [
    {id:1, todo:'Buy milk', done: true},
    {id:2, todo:'Todo item 2', done: false}
  ]
  todosChanged = new EventEmitter<todo[]>()
  getTodos(){
    return [...this.todos]
  }
  addNewTodo(todo:todo){
    this.todos.push(todo);
    this.todosChanged.emit(this.getTodos())
  }

  todoDone(todo:todo){
    if (todo.done) return 'line-through'
    else return ''
  }

  deleteTodo(todo:any){
    this.todos = this.todos.filter(t=>t.id !== todo.id)
    this.todosChanged.emit(this.getTodos())

  }
}
