import { Component, OnDestroy } from '@angular/core';
import { IForm, IPost } from '../interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [FormsModule, CommonModule, HttpClientModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
})
export class AboutComponent {
  constructor(private http: HttpClient) {}
  posts: IPost[] = [];
  saved: boolean = false;

  formData: IPost = {
    userId: 1,
    title: '',
    body: '',
  };

  showModal = false;
  isEditMode = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.formData = {
      userId: 1,
      title: '',
      body: '',
    };
  }

  onSubmit() {
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', this.formData)
      .subscribe((response) => {
        if (response) {
          this.closeModal();
          this.loadPosts();
        }
      });

    this.loadPosts();
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = data;
      });
  }
}
