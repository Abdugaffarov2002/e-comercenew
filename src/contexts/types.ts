import { IProduct } from "../models/product";

export interface IProductContextType {
  products: IProduct[];
  product: IProduct | null;
  getProducts: () => void;
}

export interface IInitState {
  products: IProduct[];
  product: IProduct | null;
}
interface IProductsAction {
  type: "products";
  payload: IProduct[];
}
interface IProductAction {
  type: "product";
  payload: IProduct;
}

export type TProductAction = IProductsAction | IProductAction;
