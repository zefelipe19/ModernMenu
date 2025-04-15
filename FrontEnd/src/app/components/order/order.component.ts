import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import {
  ClosedOrderInterface,
  OrderInterface,
  ProductInterface,
  ProductOrderInterface,
} from '../../types/interfaces';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  ngOnInit() {
    this.calculateTotalOrderPrice();
    this.getProductsMenu();
  }

  constructor(
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {}

  @Input({ alias: 'id' }) orderId: number = 0;
  @Input({ alias: 'name' }) name = '';
  @Input({ alias: 'products' }) products: ProductOrderInterface[] = [];
  @Input({ alias: 'createdAt' }) createdAt: string = '';

  orderEditable = false;
  totalValue = 0;
  productsHistory: string = '';

  productsMenu: ProductInterface[] = [];

  formProductGroup: FormGroup = new FormGroup({
    formProductId: new FormControl<string>('0', { nonNullable: true }),
    formProductQtd: new FormControl<number>(1, { nonNullable: true }),
  });

  getCreatedAt() {
    return new Date(this.createdAt).toLocaleString();
  }

  orderEditableToggler(): void {
    this.orderEditable = !this.orderEditable;
  }

  verifyProductType() {
    const productId = this.formProductGroup.get('formProductId')?.value;
    const productIndex = this.productsMenu.findIndex(
      (product) => product.id == productId
    );
    const product = this.productsMenu[productIndex];
    if (product.type == 'KG') {
      if (!this.formProductGroup.get('formProductWeight')) {
        this.formProductGroup.addControl(
          'formProductWeight',
          new FormControl(1000)
        );
      }
    } else {
      this.formProductGroup.removeControl('formProductWeight');
    }
  }

  calculateTotalOrderPrice(): number {
    let total = 0;
    for (let product of this.products) {
      total += product.totalPrice!;
    }
    return (this.totalValue = Number(total.toFixed(2)));
  }

  calculateTotalProductPrice(product: ProductOrderInterface): number {
    let totalValue = 0;
    if (product.weight) {
      totalValue = ((product.weight * product.price) / 1000) * product.qtd;
    } else {
      totalValue = product.price * product.qtd;
    }
    return totalValue;
  }

  reduceProductQuantity(id: string): void {
    let productIndex = this.products.findIndex((product) => product.id == id);
    this.products[productIndex].qtd--;
    this.products[productIndex].totalPrice = this.calculateTotalProductPrice(
      this.products[productIndex]
    );
    if (this.products[productIndex].qtd <= 0) {
      this.products.splice(productIndex, 1);
    }
    this.calculateTotalOrderPrice();
  }

  removeProduct(id: string) {
    let productIndex = this.products.findIndex((product) => product.id == id);
    this.products.splice(productIndex, 1);
    this.calculateTotalOrderPrice();
  }

  addProduct() {
    const formProductId = this.formProductGroup.get('formProductId')?.value;
    if (formProductId == '0') {
      window.alert('É necessário selecionar um produto.');
    } else {
      // buscando o index do produto no menu.
      const productMenuIndex = this.productsMenu.findIndex(
        (p) => p.id == formProductId
      );
      const product = this.productsMenu[productMenuIndex]; // instanciando o produto
      const data = this.formProductGroup.value; // buscando os dados do fromulário
      // criando o produto para adicionar ao pedido
      const productOrder: ProductOrderInterface = {
        id: crypto.randomUUID(),
        productId: product.id,
        name: product.name,
        price: product.price,
        qtd: data.formProductQtd,
        type: product.type,
      };
      productOrder.totalPrice = productOrder.price * productOrder.qtd;
      // adicionando o atributo de peso, caso seja necessário
      if (data.formProductWeight) {
        productOrder.weight = data.formProductWeight;
        productOrder.totalPrice = this.calculateTotalProductPrice(productOrder);
      }
      // adicionando o pedido do produto ao 'carrinho'
      // vefificando se já nao existe um produto igual no carrinho e se caso tiver peso, o peso seja ou não igual.
      const orderIndex = this.products.findIndex(
        (p) =>
          (p.productId == productOrder.productId &&
            !p.weight &&
            !productOrder.weight) ||
          (p.weight && productOrder.weight && p.weight == productOrder.weight)
      );
      if (orderIndex < 0) {
        this.products.push(productOrder);
      } else {
        this.products[orderIndex].qtd += productOrder.qtd;
        this.products[orderIndex].totalPrice! += productOrder.totalPrice;
      }
      this.calculateTotalOrderPrice();
    }
  }

  returnHistory(): void {
    this.getProductsMenu();
    this.calculateTotalOrderPrice();
  }

  getProductsMenu(): void {
    this.productsMenu = JSON.parse(localStorage.getItem('menu')!);
  }

  saveProductOrder(): void {
    const order: OrderInterface = {
      id: this.orderId,
      name: this.name,
      products: this.products,
      totalValue: this.totalValue,
      createdAt: new Date().toISOString(),
    };
    this.orderService.saveOrder(order);
    this.productsHistory = JSON.stringify(this.products);
  }

  clearFromProductGoup() {
    if (this.formProductGroup.get('formProductWeight')) {
      this.formProductGroup.removeControl('formProductWeight');
    }
    this.formProductGroup.reset();
  }

  closeOder(): void {
    const order: ClosedOrderInterface = {
      id: this.orderId,
      name: this.name,
      products: this.products,
      totalValue: this.totalValue,
      createdAt: this.createdAt,
      closedAt: new Date().toISOString(),
    };
    this.orderService.closeOrder(order);
    window.alert('Mesa fechada com sucesso.');
  }
}
