import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  categories: Category[] = [];
  selectedProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedProducts = this.productService.getProductsByCategory(categoryId);
  }
}
