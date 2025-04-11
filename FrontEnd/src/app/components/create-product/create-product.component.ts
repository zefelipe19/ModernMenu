import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NewProductInterface } from '../../types/interfaces';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  constructor(private readonly productService: ProductService) {}

  productForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
    type: new FormControl<string>(''),
    barCode: new FormControl<number>(0),
  });

  createProduct() {
    const product: NewProductInterface = this.productForm.value;
    if (!product.name || !product.type || !product.price) {
      window.alert('Existem campos que não foram preenchidos.');
    } else {
      this.productService.createProduct(product);
    }
  }
}
