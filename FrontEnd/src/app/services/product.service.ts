import { Injectable } from '@angular/core';
import {
  ProductInterface,
  ProductOrderInterface,
} from '../types/productInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      id: 'f24f2193-9406-419a-952b-dd4b819402df',
      name: 'Produto 01',
      price: 24.95,
      type: 'UNI',
      barCode: 78936683,
    },
    {
      id: '91744001-ec3d-4be0-8195-8fecd52b5fc5',
      name: 'Produto 02',
      price: 4.5,
      type: 'KG',
      barCode: 558723355,
    },
    {
      id: '0dec1311-8bd3-4dd0-a1e1-8d84e47fe8e0',
      name: 'Produto 03',
      price: 20.8,
      type: 'KG',
      barCode: 575367304,
    },
    {
      id: '2515b7ab-1e14-4343-b65f-e4179af67d7a',
      name: 'Produto 04',
      price: 27.95,
      type: 'UNI',
      barCode: 341567304,
    },
    {
      id: 'efc37f7d-4299-48da-a01b-2b768bd778ad',
      name: 'Produto 05',
      price: 58.25,
      type: 'UNI',
      barCode: 57534156,
    },
    {
      id: '758f3252-1c33-4a1d-ae46-608f63c9678f',
      name: 'Produto 06',
      price: 10.95,
      type: 'KG',
      barCode: 534156704,
    },
    {
      id: 'f482fca9-a684-4803-99e2-7600bff419b0',
      name: 'Produto 07',
      price: 100,
      type: 'UNI',
      barCode: 534173047,
    },
  ];

  getAllProducts(): ProductInterface[] {
    return this.products;
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
    let orders = [
      { id: 1, name: 'Mesa 01', products: this.getProductsOrder() },
      { id: 2, name: 'Mesa 02', products: this.getProductsOrder() },
    ];
    return orders;
  }
}
