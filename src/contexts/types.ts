import { IProduct, IProductCreate } from "../models/product";

export interface IProductContextType {
  products: IProduct[];
  product: IProduct | null;
  getProducts: () => void;
  addProduct: (newProduct: IProductCreate) => void;
  deleteProduct: (id: number) => void;
  getOneProduct: (id: number) => void;
  editProduct: (newData: IProduct) => void;
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
