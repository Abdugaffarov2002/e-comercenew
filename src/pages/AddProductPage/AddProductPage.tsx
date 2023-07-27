import * as React from "react";

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

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddProductPage() {
  const { addProduct } = React.useContext(
    productContext
  ) as IProductContextType;
  const [formValue, setFormValue] = React.useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    addProduct({
      ...formValue,
      price: +formValue.price,
      category: formValue.category as TCategory,
    });

    setFormValue({
      title: "",
      description: "",
      price: "",
      image: "",
      category: "",
    });
  };

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
            Add New Product
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
              New Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
