// withProducts.jsx
import React from "react";
import { ourProductsData } from "./ourProductsData";

function withOurProducts(WrappedComponent) {
  return function EnhancedComponent() {
    return <WrappedComponent ourProductsData={ourProductsData} />;
  };
}

export default withOurProducts;