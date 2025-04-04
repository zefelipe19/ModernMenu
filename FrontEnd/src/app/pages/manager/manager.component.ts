import { Component } from '@angular/core';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { ProductManagementComponent } from '../../components/product-management/product-management.component';
import { OrderComponent } from '../../components/order/order.component';

@Component({
  selector: 'app-manager',
  imports: [CreateProductComponent, ProductManagementComponent, OrderComponent],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css',
})
export class ManagerComponent {
  productsVisible = false;
  newProductVisible = false;
  ordersVisible = false;

  products = Array(5);
  orders = Array(5);

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
