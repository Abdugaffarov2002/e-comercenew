import { Pagination as MuiPagination } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext";
import { IProductContextType } from "../../contexts/types";

import { LIMIT } from "../../utils/consts";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const { page, setPage, pageTotalCount } = useContext(
    productContext
  ) as IProductContextType;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);

    setSearchParams({
      ...currentParams,
      _page: page.toString(),
      _limit: LIMIT.toString(),
    });
  }, [page]);

  console.log(page);

  return (
    <MuiPagination
      count={pageTotalCount}
      page={page}
      color="primary"
      onChange={(e, value) => setPage(value)}
    />
  );
};

export default Pagination;
