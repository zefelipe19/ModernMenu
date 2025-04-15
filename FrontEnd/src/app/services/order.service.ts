import { Injectable } from '@angular/core';
import {
  ClosedOrderInterface,
  NewOrderInterface,
  OrderInterface,
  ProductOrderInterface,
} from '../types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  orders = [
    {
      id: 1,
      name: 'Mesa 01',
      products: this.getProductsOrder(),
      totalValue: 0,
      createdAt: '2025-04-14T15:15:48.687Z',
    },
    {
      id: 2,
      name: 'Mesa 02',
      products: this.getProductsOrder(),
      totalValue: 0,
      createdAt: '2025-04-15T15:15:48.687Z',
    },
  ];

  createOrder(order: NewOrderInterface) {
    let idOrder = this.orders.length + 1;
    const newOrder = { ...order, products: [], id: idOrder, totalValue: 0 };
    this.orders.push(newOrder);
  }

  getProductsOrder(): ProductOrderInterface[] {
    let productOrders: ProductOrderInterface[] = [];
    return productOrders;
  }

  getAllOrders() {
    return this.orders;
  }

  saveOrder(order: OrderInterface) {
    const orderIndex = this.orders.findIndex((o) => o.id == order.id);
    this.orders[orderIndex] = order;
  }

  closeOrder(order: ClosedOrderInterface) {
    if (!localStorage.getItem('closedOrders')) {
      localStorage.setItem('closedOrders', JSON.stringify([]));
    }
    const closedOrders = JSON.parse(localStorage.getItem('closedOrders')!);

    closedOrders.push(order);
    localStorage.setItem('closedOrders', JSON.stringify(closedOrders));
    const orderIndex = this.orders.findIndex((o) => o.id == order.id);
    this.orders.splice(orderIndex, 1);
    console.log(localStorage.getItem('closedOrders'));
  }

  getClosedOrders(): ClosedOrderInterface[] {
    if (localStorage.getItem('closedOrders')) {
      const closedOrders = JSON.parse(localStorage.getItem('closedOrders')!);
      console.log(closedOrders);
      return closedOrders;
    }
    return [];
  }
}
