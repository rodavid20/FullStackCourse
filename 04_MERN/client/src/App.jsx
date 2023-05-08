import React, { useState, useEffect } from "react";
import FilterableProductTable from "./component/filterableProductTable";
import Axios from "axios";

const apiUrl = "http://localhost:3001/products";
const App = () => {
  const getProducts = () => {
    Axios.get(apiUrl).then((res) => {
      //console.log(res);
      const products = res.data.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
      setProductList(products);
    });
  };
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <FilterableProductTable
      apiUrl={apiUrl}
      products={productList}
      onProductChanged={getProducts}
    />
  );
};

export default App;
