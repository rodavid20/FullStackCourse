import React from "react";
import FilterableProductTable from "./component/filterableProductTable";

const productList = [
  { category: "fruits", name: "banana", price: 80, isStocked: true },
  { category: "fruits", name: "orange", price: 70, isStocked: true },
  { category: "fruits", name: "pineapple", price: 200, isStocked: false },
  { category: "vegetable", name: "carrot", price: 15, isStocked: false },
  { category: "vegetable", name: "spinach", price: 20, isStocked: true },
  { category: "vegetable", name: "broccoli", price: 25, isStocked: true },
];

const App = () => {
  return <FilterableProductTable products={productList} />;
};

export default App;
