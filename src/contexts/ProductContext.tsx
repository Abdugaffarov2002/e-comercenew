import React, { FC, createContext, useReducer, useState } from "react";
import { IProduct, IProductCreate } from "../models/product";
import { IInitState, IProductContextType, TProductAction } from "./types";
import axios from "axios";
import { API, LIMIT } from "../utils/consts";
import { useSearchParams } from "react-router-dom";

export const productContext = createContext<IProductContextType | null>(null);

interface IProductContext {
  children: React.ReactNode;
}

const initState: IInitState = {
  products: [],
  product: null,

  pageTotalCount: 1,
};

function reducer(state: IInitState, action: TProductAction) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "product":
      return { ...state, product: action.payload };

    case "IPageTotalCount":
      return { ...state, pageTotalCount: action.payload };

    default:
      return state;
  }
}

const ProductContext: FC<IProductContext> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, dispatch] = useReducer(reducer, initState);

  const [page, setPage] = useState<number>(
    +(searchParams.get("_page") as string) || 1
  );

  async function getProducts() {
    try {
      const { data, headers } = await axios.get<IProduct[]>(
        `${API}/${window.location.search}`
      );

      const count = Math.ceil(headers["x-total-count"] / LIMIT);

      dispatch({
        type: "IPageTotalCount",
        payload: count,
      });

      dispatch({
        type: "products",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneProduct(id: number) {
    const { data } = await axios.get(`${API}/${id}`);

    dispatch({
      type: "product",
      payload: data,
    });
  }

  async function addProduct(newProduct: IProductCreate) {
    await axios.post(API, newProduct);
  }

  async function deleteProduct(id: number) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function editProduct(newData: IProduct) {
    await axios.put(`${API}/${newData.id}`, newData);
  }

  const value = {
    products: state.products,
    product: state.product,
    page,
    pageTotalCount: state.pageTotalCount,
    getProducts,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    setPage,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
