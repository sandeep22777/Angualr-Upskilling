import { Component, OnDestroy } from '@angular/core';
import { IForm } from '../interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [FormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
})
export class AboutComponent implements OnDestroy {
  formData: IForm = {
    name: '',
    email: '',
    password: '',
  };

  saved: boolean = false;

  // I'm taking the data which is already saved by user.
  ngOnInit() {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.formData = JSON.parse(savedData);
      this.saved = true;
    }
  }

  saveData() {
    localStorage.setItem('formData', JSON.stringify(this.formData));
    this.saved = true;
    alert('Data Saved');
    console.log(this.formData);
  }

  ngOnDestroy(): void {
    if (this.saved) {
      alert('Data Saved');
    } else {
      alert(
        'Data is not saved. Are you sure you want to go to other component?'
      );
      this.formData = {
        name: '',
        email: '',
        password: '',
      };
      console.log('onDestroy', this.formData);
    }
  }
}
