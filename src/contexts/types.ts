import { IProduct, IProductCreate } from "../models/product";

export interface IProductContextType {
  products: IProduct[];
  product: IProduct | null;
  page: number;
  pageTotalCount: number;
  getProducts: () => void;
  addProduct: (newProduct: IProductCreate) => void;
  deleteProduct: (id: number) => void;
  getOneProduct: (id: number) => void;
  editProduct: (newData: IProduct) => void;
  setPage: (num: number) => void;
}

export interface IInitState {
  products: IProduct[];
  product: IProduct | null;

  pageTotalCount: number;
}
interface IProductsAction {
  type: "products";
  payload: IProduct[];
}
interface IProductAction {
  type: "product";
  payload: IProduct;
}

interface IPageTotalCountAction {
  type: "IPageTotalCount";
  payload: number;
}

export type TProductAction =
  | IProductsAction
  | IProductAction
  | IPageTotalCountAction;
