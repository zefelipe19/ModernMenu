import { Injectable } from '@angular/core';
import {
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
    { id: 1, name: 'Mesa 01', products: this.getProductsOrder() },
    { id: 2, name: 'Mesa 02', products: this.getProductsOrder() },
  ];

  createOrder(order: NewOrderInterface) {
    let idOrder = this.orders.length + 1;
    const newOrder = { ...order, products: [], id: idOrder };
    console.log(newOrder);
    this.orders.push(newOrder);
    console.log(this.orders);
  }

  getProductsOrder(): ProductOrderInterface[] {
    let productOrders = [
      {
        id: 'efc37f7d-4299-48da-a01b-2b768bd778ad',
        name: 'Produto 05',
        price: 58.25,
        type: 'UNI',
        qtd: 5,
      },
      {
        id: '758f3252-1c33-4a1d-ae46-608f63c9678f',
        name: 'Produto 06',
        price: 10.95,
        type: 'KG',
        qtd: 2,
      },
      {
        id: 'f482fca9-a684-4803-99e2-7600bff419b0',
        name: 'Produto 07',
        price: 100,
        type: 'UNI',
        qtd: 4,
      },
    ];
    return productOrders;
  }

  getAllOrders() {
    return this.orders;
  }

  saveOrder(order: OrderInterface) {
    const orderIndex = this.orders.findIndex((o) => o.id == order.id);
    this.orders[orderIndex] = order;
  }
}
