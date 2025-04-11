import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-management',
  imports: [FormsModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css',
})
export class ProductManagementComponent {
  productEditable = false;

  @Input({ alias: 'id' }) id: string = '';
  @Input({ alias: 'name' }) name: string = '';
  @Input({ alias: 'price' }) price: number = 0;
  @Input({ alias: 'type' }) type: string = '';
  @Input({ alias: 'barCode' }) barCode: number = 0;

  productEditibaleToggler(): void {
    this.productEditable = !this.productEditable;
  }
}
