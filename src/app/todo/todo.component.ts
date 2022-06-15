import {Component, Input} from '@angular/core';
import {Todo} from "../Todo.model";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todoItem!: Todo;

  newTodo: Todo = {
    todo: "",
    priority: 0,
  };

  mode: boolean = false;

  constructor(
    private todoService: TodoService,
  ) {
  }

  async deleteTodo() {
    await this.todoService.deleteTodo(this.todoItem.todo)
  }

  changeMode() {
    if (!this.mode) {
      this.mode = true;
    } else {
      this.mode = false;
    }
  }

  async updateTodo() {
    if (!this.newTodo.priority) {
      return;
    }

    await this.todoService.updateTodo(this.newTodo);
    this.todoItem.priority = this.newTodo.priority;
    this.changeMode();
  }
}
