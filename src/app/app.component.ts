import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'BestBuy';
  check: string = 'checkbox';
  data1: number = 0;
  temp: number = 0;

  twoWay: string = '';

  count: number = 0;

  increment() {
    this.temp = this.data1;
    this.count += this.temp;
  }

  increaseTemp(event: any) {
    this.data1 = +event.target.value;
  }

  increaseOne() {
    this.count += 1;
  }

  decrementOne() {
    this.count -= 1;
  }

  todos: ITodo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        this.todos = data;
      });
  }
}
