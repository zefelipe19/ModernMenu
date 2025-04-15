import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-create-order',
  imports: [ReactiveFormsModule],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css',
})
export class CreateOrderComponent {
  constructor(private readonly orderService: OrderService) {}

  orderName = new FormControl<string>('', [Validators.minLength(2)]);

  createOrder = async () => {
    if (this.orderName.value!.length < 2) {
      window.alert('Não foi possível salvar a mesa!');
    } else {
      await this.orderService.createOrder({
        name: this.orderName.value!,
        createdAt: new Date().toISOString(),
      });
      this.orderName.setValue('');
    }
  };
}
