import { type } from "os";
export type TCategory = "t-shirt" | "pants" | "shoe";
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: TCategory;
}

export type IProductCreate = Omit<IProduct, "id">;
