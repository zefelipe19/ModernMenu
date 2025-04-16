export interface ProductInterface {
  id: string;
  name: string;
  price: number;
  type: string;
  barCode: number;
}

export interface NewProductInterface {
  name: string;
  price: number;
  type: string;
  barCode: number;
}

export interface ProductOrderInterface {
  id: string;
  productId: string;
  name: string;
  price: number;
  type: string;
  qtd: number;
  weight?: number;
  totalPrice?: number;
}

export interface OrderInterface {
  id: number;
  name: string;
  products: ProductOrderInterface[];
  totalValue: number;
  createdAt: string;
}

export interface NewOrderInterface {
  name: string;
  createdAt: string;
}

interface PaymentMethods {
  type: string;
  value: number;
}

export interface ClosedOrderInterface extends OrderInterface {
  closedAt: string;
  payment?: PaymentMethods[];
}
