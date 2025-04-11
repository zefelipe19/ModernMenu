import { Component, OnInit } from '@angular/core';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ProductManagementComponent } from '../../components/product-management/product-management.component';
import { OrderComponent } from '../../components/order/order.component';
import { ProductService } from '../../services/product.service';
import { ProductInterface, OrderInterface } from '../../types/interfaces';
import { CreateOrderComponent } from '../../components/create-order/create-order.component';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-manager',
  imports: [
    CreateProductComponent,
    ProductManagementComponent,
    OrderComponent,
    CreateOrderComponent,
  ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css',
})
export class ManagerComponent implements OnInit {
  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();
    this.orders = this.orderService.getAllOrders();
  }

  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {}

  productsVisible = false;
  newProductVisible = false;
  ordersVisible = false;

  allProducts: ProductInterface[] = [];
  orders: OrderInterface[] = [];

  productsVisibleToggler(): void {
    this.productsVisible = !this.productsVisible;
  }

  newProductToggler(): void {
    this.newProductVisible = !this.newProductVisible;
  }

  ordersVisibleToggler() {
    this.ordersVisible = !this.ordersVisible;
  }
}
