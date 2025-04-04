import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  ngOnInit() {
    this.calculateTotalValue();
  }

  name = 'mesa 01';
  products = [
    { id: 1, name: 'produto 01', price: 12.5 },
    { id: 2, name: 'produto 02', price: 5 },
    { id: 3, name: 'produto 03', price: 27.8 },
  ];
  totalValue = 0;

  calculateTotalValue(): number {
    let total = 0;

    for (let product of this.products) {
      total += product.price;
    }
    return (this.totalValue = total);
  }
}
