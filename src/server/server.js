import express from "express";
import { renderToString } from "react-dom/server";
import ProductsList from "../components/ProductsList.js";
import React from "react";

const app = express();
const PORT = 3001;

const doc = (content) => `
<!doctype html>
<html>
  <head>
    <title>Product list SSR</title>
  </head>
  <body>
    <div id="app">${content}</div>
  </body>
</html>
`;

const products = [
  { id: 1, name: "Patike" },
  { id: 2, name: "Majica" },
  { id: 3, name: "Pidzama" },
];

app.get("/products", (req, res) => {
  const props = { products };

  const markup = renderToString(React.createElement(ProductsList, props));

  res.send(doc(markup));
});

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
