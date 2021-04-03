import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import "./ProductMange.css";

const ProductMange = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://quiet-scrubland-05398.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const deleteProduct = (_id) => {
    console.log("this id:", _id);
    fetch(`https://quiet-scrubland-05398.herokuapp.com/deleteProduct/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("deleted successfully");
      });
  };

  return (
    <div style={{}}>
      <div class="row" style={{ float: "left" }}>
        <Nav
          className="col-md-12 d-none d-md-block bg-light sidebar"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <div className="sidebar-sticky"></div>
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div style={{ marginLeft: "100px" }}>
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
    </div>
  );
};

export default ProductMange;
