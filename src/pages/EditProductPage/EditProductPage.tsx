import React, { useContext, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { productContext } from "../../contexts/ProductContext";
import { IProductContextType } from "../../contexts/types";
import { TCategory } from "../../models/product";
import { Description } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
const defaultTheme = createTheme();

const EditProductPage = () => {
  const { product, getOneProduct, editProduct } = useContext(
    productContext
  ) as IProductContextType;
  const { id } = useParams();

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    id: 1,
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    id && getOneProduct(+id);
  }, []);

  useEffect(() => {
    if (product) {
      setFormValue({ ...product, price: product.price.toString() });
    }
  }, [product]);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim() ||
      !formValue.category.trim()
    ) {
      alert("fill all fields");
      return;
    }

    editProduct({
      ...formValue,
      price: +formValue.price,
      category: formValue.category as TCategory,
    });
    navigate(-1);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              value={formValue.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              value={formValue.description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={formValue.price}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
              value={formValue.image}
              onChange={handleChange}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  label="Category"
                  value={formValue.category}
                  onChange={handleChange}
                >
                  <MenuItem value={"t-shirt"}>T-short</MenuItem>
                  <MenuItem value={"pants"}>Pants</MenuItem>
                  <MenuItem value={"shoe"}>Shoe</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditProductPage;
