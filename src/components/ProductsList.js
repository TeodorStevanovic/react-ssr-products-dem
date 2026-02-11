import React from "react";

const ProductsList = ({ products = [] }) => {
  return React.createElement(
    "ul",
    null,
    products.map((product) =>
      React.createElement("li", { key: product.id }, product.name)
    )
  );
};

export default ProductsList;
