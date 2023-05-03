import React from "react";
import FilterableProductTable from "./component/filterableProductTable";

const products = [
  {
    category: "fruits",
    name: "apple",
    price: 100,
    isStocked: true,
  },
  {
    category: "vegetable",
    name: "cabbage",
    price: 10,
    isStocked: true,
  },
];

const App = () => {
  return <FilterableProductTable products={products} />;
};

export default App;
