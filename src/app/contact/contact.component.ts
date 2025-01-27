import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  standalone: true,
})
export class ContactComponent {
  contact(form: any) {
    console.log(form);
  }

  productForm!: FormGroup;
  showModal = false;
  isEditMode = false;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.productForm = this.fb.group({
      ProductSku: ['', [Validators.required, Validators.minLength(3)]],
      ProductName: ['', Validators.required],
      ProductPrice: [null, [Validators.required, Validators.min(1)]],
      ProductShortName: ['', Validators.maxLength(20)],
      ProductDescription: ['', Validators.maxLength(200)],
      ProductImageUrl: [
        '',
        [Validators.required, Validators.pattern('https?://.+')],
      ],
    });
  }

  showModalPopup() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.resetForm();
      const productData = this.productForm.value;
      console.log('Form Submitted:', productData);
      this.closeModal();
    }
  }
  resetForm() {
    this.productForm.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '800px',
      data: null,
    });
  }
}
