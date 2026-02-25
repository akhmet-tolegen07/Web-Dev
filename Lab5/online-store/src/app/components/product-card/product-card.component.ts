import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImage!: string;
  notSelectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product.id);
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${this.product.link}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${this.product.link}`;
    window.open(url, '_blank');
  }
  getStars(): number[] {
    return Array(Math.round(this.product.rating)).fill(0);
  }
}
