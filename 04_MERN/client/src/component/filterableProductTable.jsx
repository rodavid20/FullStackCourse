import React, { useState } from "react";
import AddProduct from "./addProduct";

const FilterableProductTable = ({ apiUrl, products, onProductChanged }) => {
  const [searchText, setSearchText] = useState("");
  const [isStock, setIsStockChecked] = useState(false);
  return (
    <>
      <SearchBar
        searchText={searchText}
        isStock={isStock}
        onSearchTextChange={setSearchText}
        onIsStockChecked={setIsStockChecked}
      ></SearchBar>
      <ProductTable
        products={products}
        searchText={searchText}
        isStock={isStock}
      />
      <AddProduct apiUrl={apiUrl} onProductChanged={onProductChanged} />
    </>
  );
};

const SearchBar = ({
  searchText,
  isStock,
  onSearchTextChange,
  onIsStockChecked,
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="search..."
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isStock}
        onChange={(e) => onIsStockChecked(e.target.checked)}
      />{" "}
      Search for Products with Stock
    </form>
  );
};

const ProductCategory = ({ categoryKey, category }) => {
  return (
    <tr key={categoryKey}>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProductRow = ({ productKey, product }) => {
  const name = product.isStocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr key={productKey}>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({ products, searchText, isStock }) => {
  let rows = [];
  let lastCategory = "";
  products.forEach((p, i) => {
    if (!isStock || p.isStocked) {
      if (
        (searchText === "" ||
          p.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) &&
        p.name !== ""
      ) {
        if (p.category !== lastCategory) {
          rows.push(
            <ProductCategory
              key={"c" + i}
              category={p.category}
            ></ProductCategory>
          );
          lastCategory = p.category;
        }
        rows.push(<ProductRow key={"p" + i} product={p}></ProductRow>);
      }
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
