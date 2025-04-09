export interface ProductInterface {
  id: string;
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
