import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, ProductCardComponent],
  standalone: true,
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(productId: number) {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
