import React, { useContext, useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../contexts/ProductContext";
import { IProductContextType } from "../../../contexts/types";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

  const { setPage } = useContext(productContext) as IProductContextType;

  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }

    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      delete currentParams.category;

      setSearchParams({
        ...currentParams,
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
      });
    }

    setPage(1);
  }, [category]);

  return (
    <ToggleButtonGroup
      color="primary"
      value={category}
      exclusive
      onChange={(_, value) => value && setCategory(value)}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="t-shirt">T-Shirt</ToggleButton>
      <ToggleButton value="pants">Pants</ToggleButton>
      <ToggleButton value="shoe">Shoe</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
