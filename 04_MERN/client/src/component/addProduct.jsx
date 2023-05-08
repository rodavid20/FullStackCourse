import React from "react";
import Axios from "axios";

const AddProduct = ({ apiUrl, onProductChanged }) => {
  const onSaveProduct = (e) => {
    const form = e.target.form;
    Axios.post(apiUrl, {
      name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      isStocked: form.isStocked.checked,
    })
      .then(function (response) {
        onProductChanged();
        form.name.value = "";
        form.category.value = "";
        form.price.value = "";
      })
      .catch(function (error) {
        console.log(error);
      });

    //onProductChanged();
  };
  return (
    <form action={apiUrl} method="POST">
      Name: <input type="text" name="name" />
      Category: <input type="text" name="category" />
      Price: <input type="number" name="price" />
      isStocked: <input type="checkbox" name="isStocked" />
      <input type="button" value="Save Product" onClick={onSaveProduct} />
    </form>
  );
};

export default AddProduct;
