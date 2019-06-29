import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // think of this as like a life-cycle method eg, component did mount etc. The
  // constructor is basically used to import services.
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 2,
        title: 'Todo Three',
        completed: false
      },
    ]
  }

}
