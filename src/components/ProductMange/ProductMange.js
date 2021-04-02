import React, { useState, useEffect } from "react";

import "./ProductMange.css";

const ProductMange = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const deleteProduct = (_id) => {
    console.log("this id:", _id);
    fetch(`http://localhost:5000/deleteProduct/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          {" "}
          <strong> Name:</strong>
        </div>
        <div className="col">
          <strong> Price:</strong>
        </div>
        <div class="col">
          <strong> Weight:</strong>
        </div>
        <div class="col">
          <strong> Action:</strong>
        </div>
      </div>
      {product.map((pd) => (
        <div class="row">
          <div class="col">{pd.name}</div>
          <div class="col">{pd.price}</div>
          <div class="col">{pd.weight}</div>
          <div class="col">
            <button>
              <i class="fas fa-edit"></i>
            </button>
            <button onClick={() => deleteProduct(pd._id)}>
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductMange;
