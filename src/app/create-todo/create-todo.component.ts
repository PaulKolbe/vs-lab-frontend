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
    if (this.toDoName === "" || this.todoPriority === 0) {
      return;
    }

    await this.todoService.createTodo({
      todo: this.toDoName,
      priority: this.todoPriority
    });
  }

}
