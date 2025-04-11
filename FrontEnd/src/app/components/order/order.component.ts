import { Component, OnInit, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import {
  ProductInterface,
  ProductOrderInterface,
} from '../../types/interfaces';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  ngOnInit() {
    this.calculateTotalValue();
    this.productsHistory = JSON.stringify(this.products);
    this.getProductsMenu();
  }

  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {}

  @Input({ alias: 'id' }) orderId: number = 0;
  @Input({ alias: 'name' }) name = '';
  @Input({ alias: 'products' }) products: ProductOrderInterface[] = [];

  orderEditable = false;
  totalValue = 0;
  productsHistory: string = '';

  productsMenu: ProductInterface[] = [];

  formProductId = new FormControl<string>('0');
  formProductQtd = new FormControl<number>(1);

  calculateTotalValue(): number {
    let total = 0;

    for (let product of this.products) {
      total += product.price * product.qtd;
    }
    return (this.totalValue = Number(total.toFixed(2)));
  }

  orderEditableToggler(): void {
    this.orderEditable = !this.orderEditable;
  }

  reduceProductQuantity(id: string): void {
    let productIndex = this.products.findIndex((product) => product.id == id);
    this.products[productIndex].qtd--;
    if (this.products[productIndex].qtd <= 0) {
      this.products.splice(productIndex, 1);
    }
    this.calculateTotalValue();
  }

  removeProduct(id: string) {
    let productIndex = this.products.findIndex((product) => product.id == id);
    this.products.splice(productIndex, 1);
    this.calculateTotalValue();
  }

  addProduct(): void {
    if (this.formProductId.value != '0') {
      const productMenuIndex = this.productsMenu.findIndex(
        (product) => product.id == this.formProductId.value
      );
      const data = {
        ...this.productsMenu[productMenuIndex],
        qtd: this.formProductQtd.value ?? 1,
      };
      const { barCode, ...product } = data;
      const productIndex = this.products.findIndex(
        (product) => product.id == this.formProductId.value
      );

      if (productIndex < 0) {
        this.products.push(product);
      } else {
        this.products[productIndex].qtd += product.qtd;
      }

      this.calculateTotalValue();
      this.formProductId.setValue('0');
      this.formProductQtd.setValue(1);
    }
  }

  returnHistory(): void {
    this.products = JSON.parse(this.productsHistory);
    this.calculateTotalValue();
  }

  getProductsMenu(): void {
    const productsMenu = localStorage.getItem('menu');
    if (!productsMenu) {
      console.log(productsMenu);
      this.productsMenu = this.productService.getAllProducts();
    } else {
      this.productsMenu = JSON.parse(productsMenu);
    }
  }

  saveProductOrder(): void {
    const order = {
      id: this.orderId,
      name: this.name,
      products: this.products,
      totalValue: this.totalValue,
    };

    this.orderService.saveOrder(order);
    this.productsHistory = JSON.stringify(this.products);
  }
}
