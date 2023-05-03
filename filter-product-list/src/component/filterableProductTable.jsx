import React from "react";

const ProductCategory = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  const name = product.isStocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>product.name</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({ products }) => {
  let rows = [];
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {rows}
    </table>
  );
};

const FilterableProductTable = ({ products }) => {
  return <ProductTable products={products} />;
};

export default FilterableProductTable;
