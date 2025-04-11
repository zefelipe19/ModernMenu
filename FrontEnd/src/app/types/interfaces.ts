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
  name: string;
  price: number;
  type: string;
  qtd: number;
}

export interface OrderInterface {
  id: number;
  name: string;
  products: ProductOrderInterface[];
}

export interface NewOrderInterface {
  name: string;
}
