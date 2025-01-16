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
  temp: number = 0;
  twoWay: string = '';

  count: number = 0;

  increment() {
    this.count += this.temp;
  }

  increaseTemp(event: any) {
    this.temp = +event.target.value;
  }
}
