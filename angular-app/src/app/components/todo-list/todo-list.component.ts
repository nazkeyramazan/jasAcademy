import { Component, OnInit } from '@angular/core';
import {todo} from '../../types'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todos: todo[] = [
    {id:1, todo:'Buy milk', done: true},
    {id:2, todo:'Todo item 2', done: false}
  ]
  constructor() { }
  todo: string = ''
  id: number = 3
  ngOnInit(): void {
  }
  onButtonClick(e:any){
    this.todos.push({id: this.id, todo: this.todo, done: false});
    this.todo = '';
    this.id++;
  }

  getTodoDone(todo:todo){
    if (todo.done) return 'line-through'
    else return ''
  }

  deleteTodo(todo:any){
    this.todos = this.todos.filter(t=>t.id !== todo.id)
  }
}
