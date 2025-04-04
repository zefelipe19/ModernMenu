import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-management',
  imports: [FormsModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {
  id = "279bca4e-9f02-4a78-a663-cc56e77e087b"
  name = "Produto 01"
  price = 12.40
  type = "UNI"
  editable = false

  edit() {
    this.editable = !this.editable;
  }
}
