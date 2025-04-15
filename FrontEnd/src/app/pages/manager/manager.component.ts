import { Component, OnInit } from '@angular/core';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ProductManagementComponent } from '../../components/product-management/product-management.component';
import { OrderComponent } from '../../components/order/order.component';
import { ProductService } from '../../services/product.service';
import {
  ProductInterface,
  OrderInterface,
  ClosedOrderInterface,
} from '../../types/interfaces';
import { CreateOrderComponent } from '../../components/create-order/create-order.component';
import { OrderService } from '../../services/order.service';
import { ClosedOrderComponent } from '../../components/closed-order/closed-order.component';

@Component({
  selector: 'app-manager',
  imports: [
    CreateProductComponent,
    ProductManagementComponent,
    OrderComponent,
    CreateOrderComponent,
    ClosedOrderComponent,
  ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css',
})
export class ManagerComponent implements OnInit {
  ngOnInit(): void {
    this.allProducts = this.productService.getAllProducts();
    this.orders = this.orderService.getAllOrders();
    this.productService.saveLocalProductMenu();
    this.closedOrders = this.orderService.getClosedOrders();
  }

  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {}

  allProducts: ProductInterface[] = [];
  orders: OrderInterface[] = [];
  closedOrders: ClosedOrderInterface[] = [];

  productsVisible = false;
  ordersVisible = false;
  closedOrdersVisible = false;

  productsVisibleToggler(): void {
    this.productsVisible = !this.productsVisible;
  }

  ordersVisibleToggler() {
    this.ordersVisible = !this.ordersVisible;
  }

  closedOrdersVisibleToggler() {
    this.closedOrdersVisible = !this.closedOrdersVisible;
    this.closedOrders = this.orderService.getClosedOrders();
  }
}
