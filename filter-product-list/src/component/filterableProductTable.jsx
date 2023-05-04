import React, { useState } from "react";

const FilterableProductTable = ({ products }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <SearchBar
        searchText={searchText}
        handleSearchChange={setSearchText}
      ></SearchBar>
      <ProductTable products={products} searchText={searchText} />;
    </>
  );
};

const SearchBar = ({ searchText, onFilterTextChange }) => {
  return (
    <input
      type="text"
      placeholder="search..."
      value={searchText}
      onChange={(e) => onFilterTextChange(e.target.value)}
    />
  );
};

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
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({ products, searchText }) => {
  let rows = [];
  let lastCategory = "";
  products.forEach((p) => {
    if (
      (searchText === "" ||
      p.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) && 
      (p.name !== "")
    ) {
      if (p.category !== lastCategory) {
        rows.push(<ProductCategory category={p.category}></ProductCategory>);
        lastCategory = p.category;
      }
      rows.push(<ProductRow product={p}></ProductRow>);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default FilterableProductTable;
