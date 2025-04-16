import { Component, Input } from '@angular/core';
import { ProductOrderInterface } from '../../types/interfaces';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-close-order',
  imports: [ReactiveFormsModule],
  templateUrl: './close-order.component.html',
  styleUrl: './close-order.component.css',
})
export class CloseOrderComponent {
  @Input({ alias: 'id' }) id: number = 0;
  @Input({ alias: 'name' }) name: string = '';
  @Input({ alias: 'products' }) products: ProductOrderInterface[] = [];
  @Input({ alias: 'totalValue' }) totalValue: number = 0;
  @Input({ alias: 'createdAt' }) createdAt: string = '';
  @Input({ alias: 'closedAt' }) closedAt: string = '';

  formCloseOrder: FormGroup = new FormGroup({
    formPayment: new FormGroup({
      method: new FormControl<string>('0', { nonNullable: true }),
      value: new FormControl<number>(0, { nonNullable: true }),
    }),
  });
}
