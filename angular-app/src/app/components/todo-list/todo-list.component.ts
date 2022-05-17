import { Component, OnInit } from '@angular/core';
import {todo} from '../../types'
import {TodoService} from "../../services/todo.service";
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})

export class TodoListComponent implements OnInit {

  todos: todo[] = []
  constructor(private todoService: TodoService) { }
  todo: string = ''
  id: number = 3
  data: Date = new Date()
  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
    this.todoService.todosChanged.subscribe((event) => {
      this.todos = event
    })
  }
  onButtonClick(todo:string){
    this.data = new Date()
    this.todoService.addNewTodo({id: this.id, todo:todo, done:false, created:this.data})
    this.todo = '';
    this.id++
    return
  }
  changeDone(e:boolean, todo:todo){
    this.todoService.todoDone(e , todo)
  }
  getTodoDone(todo:todo){
    if (todo.done) return 'line-through'
    else return ''
  }

  deleteTodo(todo:any){
    this.todoService.deleteTodo(todo)
  }
}
