import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../types/interfaces';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  count = Array(5);
  ngOnInit() {
    this.allProducts = this.productService.getAllProducts();
    this.productService.saveLocalProductMenu();
  }
  constructor(private readonly productService: ProductService) {}

  allProducts: ProductInterface[] = [];
}
