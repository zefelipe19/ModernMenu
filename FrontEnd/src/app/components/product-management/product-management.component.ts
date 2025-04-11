import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../types/interfaces';

@Component({
  selector: 'app-product-management',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css',
})
export class ProductManagementComponent implements OnInit {
  constructor(private readonly productService: ProductService) {}

  productEditable = false;

  @Input({ alias: 'id' }) id: string = '';
  @Input({ alias: 'name' }) name: string = '';
  @Input({ alias: 'price' }) price: number = 0;
  @Input({ alias: 'type' }) type: string = '';
  @Input({ alias: 'barCode' }) barCode: number = 0;

  saveProductForm!: FormGroup;
  setProductForm() {
    this.saveProductForm = new FormGroup({
      name: new FormControl<string>(this.name),
      price: new FormControl<number>(this.price),
      type: new FormControl<string>(this.type),
      barCode: new FormControl<number>(this.barCode),
    });
  }

  ngOnInit(): void {
    this.setProductForm();
  }

  productEditibaleToggler(): void {
    this.productEditable = !this.productEditable;
    this.setProductForm();
  }

  saveProduct(id: string): void {
    const saveProduct: ProductInterface = {
      id: this.id,
      ...this.saveProductForm.value,
    };
    this.productService.saveProduct(saveProduct);
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id);
    window.alert('O produto foi deletado.');
  }
}
