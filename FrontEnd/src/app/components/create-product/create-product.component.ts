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

  newProductVisible = false;

  productForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    price: new FormControl<number>(0, { nonNullable: true }),
    type: new FormControl<string>('', { nonNullable: true }),
    barCode: new FormControl<number>(0, { nonNullable: true }),
  });

  newProductToggler(): void {
    this.newProductVisible = !this.newProductVisible;
  }

  async createProduct(): Promise<void> {
    const product: NewProductInterface = this.productForm.value;
    if (!product.name || !product.type || !product.price) {
      window.alert('Existem campos que não foram preenchidos.');
    } else {
      await this.productService.createProduct(product);
      this.productService.saveLocalProductMenu();
      window.alert('Produto criado com sucesso.');
      this.productForm.reset();
      this.newProductToggler();
    }
  }
}
