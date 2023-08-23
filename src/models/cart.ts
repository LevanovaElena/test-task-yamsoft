import { IProduct } from "./products";

export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: ICartProduct[];
}

export interface ICartProduct {
  productId: number;
  quantity: number;
  product: IProduct;
}
