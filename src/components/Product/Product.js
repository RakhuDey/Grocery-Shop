import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const history = useHistory();
  const handleCheck = (_id) => {
    history.push(`/checkOut/${_id}`);
  };

  return (
    <div class="col-md-3" style={{ textAlign: "center", marginBottom: "10px" }}>
      <img style={{ height: "300px" }} src={product.imageURL} alt="" />
      <h3>{product.name}</h3>
      <button
        onClick={() => handleCheck(product._id)}
        className="btn btn-danger"
      >
        BuyNow
      </button>
    </div>
  );
};

export default Product;
