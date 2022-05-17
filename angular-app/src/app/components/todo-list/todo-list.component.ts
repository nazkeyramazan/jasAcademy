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

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()

    this.todoService.todosChanged.subscribe((event) => {
      this.todos = event
    })
  }
  onButtonClick(todo:string){
    this.todoService.addNewTodo({id: this.id, todo:todo, done:false})
    this.todo = '';
    this.id++
    return
  }

  getTodoDone(todo:todo){
    this.todoService.todoDone(todo)
  }

  deleteTodo(todo:any){
    this.todoService.deleteTodo(todo)
  }
}
