import { Injectable } from '@angular/core';
import { ProductInterface, NewProductInterface } from '../types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      id: 'f24f2193-9406-419a-952b-dd4b819402df',
      name: 'Porção de Baião',
      price: 24.95,
      type: 'UNI',
      barCode: 78936683,
    },
    {
      id: '91744001-ec3d-4be0-8195-8fecd52b5fc5',
      name: 'Frango assado',
      price: 24.5,
      type: 'KG',
      barCode: 558723355,
    },
    {
      id: '0dec1311-8bd3-4dd0-a1e1-8d84e47fe8e0',
      name: 'Jarra de Laranja',
      price: 16.7,
      type: 'UNI',
      barCode: 575367304,
    },
    {
      id: '2515b7ab-1e14-4343-b65f-e4179af67d7a',
      name: 'Executivo de bife',
      price: 29.95,
      type: 'UNI',
      barCode: 341567304,
    },
    {
      id: 'efc37f7d-4299-48da-a01b-2b768bd778ad',
      name: 'Executivo de filé de frango',
      price: 28.5,
      type: 'UNI',
      barCode: 57534156,
    },
    {
      id: '758f3252-1c33-4a1d-ae46-608f63c9678f',
      name: 'Marmita de carne',
      price: 18.8,
      type: 'KG',
      barCode: 534156704,
    },
    {
      id: 'f482fca9-a684-4803-99e2-7600bff419b0',
      name: 'Picanha Argentina',
      price: 100,
      type: 'KG',
      barCode: 534173047,
    },
  ];

  getAllProducts(): ProductInterface[] {
    return this.products;
  }

  createProduct(product: NewProductInterface): void {
    const newProduct = { id: crypto.randomUUID(), ...product };
    this.products.push(newProduct);
  }

  saveProduct(product: ProductInterface) {
    const productIndex = this.products.findIndex((p) => p.id == product.id);
    this.products[productIndex] = product;
  }

  deleteProduct(id: string) {
    const productIndex = this.products.findIndex((p) => p.id == id);
    this.products.splice(productIndex, 1);
  }

  saveLocalProductMenu(): void {
    localStorage.setItem('menu', JSON.stringify(this.getAllProducts()));
  }
}
