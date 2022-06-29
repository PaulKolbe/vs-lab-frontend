import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent {

  toDoName: string = "";
  todoPriority: number = 0;

  constructor(
    private todoService: TodoService,
  ) { }

  async createTodo() {
    console.log("Henning ist kein hs")

    if (this.toDoName === "" || this.todoPriority === 0) {
      console.log("Henning ist ein hs")

      return;
    }

    this.todoService.createTodo({
      todo: this.toDoName,
      priority: this.todoPriority
    });
  }

}
