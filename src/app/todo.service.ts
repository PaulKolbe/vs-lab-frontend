import { Injectable } from '@angular/core';
import {Todo} from "./Todo.model";
import {firstValueFrom, Observable, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  changed$ = new Subject<void>();
  url = "https://henning-weise-todo.herokuapp.com/todo/";

  constructor(
    private http: HttpClient,
  ) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodo(name: string): Observable<Todo> {
    return this.http.get<Todo>(this.url + name);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(name: string): Observable<Todo> {
    return this.http.delete<Todo>(this.url + name)
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.url, todo)
  }
}
