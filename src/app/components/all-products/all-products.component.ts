import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { IProductDetail, IProductRequestBody } from '../../interface';
import { ProductService } from '../../product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TextColourDirective } from '../../text-colour.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    TextColourDirective,
    RouterModule,
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
  providers: [ProductService],
  standalone: true,
})
export class AllProductsComponent {
  @ViewChild('modalContainer', { static: false }) modalContainer!: ElementRef;
  @ViewChild('closeButton', { static: false }) closeButton!: ElementRef;
  @ViewChild('firstFocusable', { static: false }) firstFocusable!: ElementRef;
  products: IProductDetail[] | null = null;

  showModal = false;
  isEditMode = false;
  isLoading = true;
  productFormData: IProductRequestBody = {
    ProductId: 0,
    ProductSku: '',
    ProductName: '',
    ProductPrice: 0,
    ProductShortName: '',
    ProductDescription: '',
    CreatedDate: new Date().toISOString(),
    DeliveryTimeSpan: '',
    CategoryId: 0,
    ProductImageUrl: '',
  };

  openEditModal(product: any): void {
    this.isEditMode = true;
    this.productFormData = {
      ProductId: product.productId,
      ProductSku: product.productSku,
      ProductName: product.productName,
      ProductPrice: product.productPrice,
      ProductShortName: product.productShortName,
      ProductDescription: product.productDescription,
      CreatedDate: product.createdDate,
      DeliveryTimeSpan: product.deliveryTimeSpan,
      CategoryId: product.categoryId,
      ProductImageUrl: product.productImageUrl,
    };
    this.showModal = true;
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const url =
      'https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts';
    this.productService.fetchData(url).subscribe({
      next: (data) => ((this.products = data), (this.isLoading = false)),
      error: (error) => console.error('Error fetching products:', error),
    });
  }

  openModal() {
    this.showModal = true;
    setTimeout(() => {
      this.firstFocusable?.nativeElement.focus(); // Focus the first input field in modal
    });
  }

  closeModal() {
    this.showModal = false;
    setTimeout(() => {
      document.getElementById('addProductButton')?.focus(); // Return focus to button
    });
    this.productFormData = {};
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.showModal) {
      this.closeModal(); // Close modal on Escape key
    }

    if (event.key === 'Tab' && this.showModal) {
      this.trapFocus(event);
    }
  }

  trapFocus(event: KeyboardEvent) {
    const focusableElements =
      this.modalContainer.nativeElement.querySelectorAll(
        'input, button, textarea, select, a[href]'
      );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.productService.editProduct(this.productFormData).subscribe(
        (response) => {
          if (response) {
            this.closeModal();
            this.loadProducts();
          }
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      this.productService.addProduct(this.productFormData).subscribe(
        (response) => {
          if (response) {
            this.closeModal();
            this.loadProducts();
          }
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    }

    this.loadProducts();
  }

  deleteProduct(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        (response) => {
          if (response.result̀) {
            alert('Product deleted successfully!');
            this.loadProducts();
          } else {
            alert('Failed to delete the product. Please try again.');
          }
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }

  resetForm() {
    this.productFormData = {
      ProductId: 0,
      ProductSku: '',
      ProductName: '',
      ProductPrice: 0,
      ProductShortName: '',
      ProductDescription: '',
      CreatedDate: new Date().toISOString(),
      DeliveryTimeSpan: '',
      CategoryId: 0,
      ProductImageUrl: '',
    };
  }

  constructor(private productService: ProductService) {}
}
