import React from "react";

function withProducts (WrappedComponent, productsData) {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} products={productsData} />;
  };
};

export default withProducts;