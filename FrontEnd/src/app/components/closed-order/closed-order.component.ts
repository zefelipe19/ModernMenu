import { Component, OnInit, Input } from '@angular/core';
import { ProductOrderInterface } from '../../types/interfaces';

@Component({
  selector: 'app-closed-order',
  imports: [],
  templateUrl: './closed-order.component.html',
  styleUrl: './closed-order.component.css',
})
export class ClosedOrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input({ alias: 'id' }) id: number = 0;
  @Input({ alias: 'name' }) name: string = '';
  @Input({ alias: 'products' }) products: ProductOrderInterface[] = [];
  @Input({ alias: 'totalValue' }) totalValue: number = 0;
  @Input({ alias: 'createdAt' }) createdAt: string = '';
  @Input({ alias: 'closedAt' }) closedAt: string = '';

  getClosedAt(): string {
    const closedAt = new Date(this.closedAt);
    return `${closedAt.toLocaleDateString()} às ${closedAt.toLocaleTimeString()}`;
  }
}
