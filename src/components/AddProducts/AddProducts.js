import React, { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      imageURL: imageURL,
    };
    const url = `https://quiet-scrubland-05398.herokuapp.com/addProduct`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "4295ac4d47b569312bea67b440cdbdbb");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add Your Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="Product name" ref={register} />
        <br />
        <input
          name="price"
          defaultValue="Product price"
          type="text"
          ref={register({ required: true })}
        />
        <br />
        <input
          name="weight"
          defaultValue="Product weight"
          type="text"
          ref={register({ required: true })}
        />
        <br />
        <input name="imageURL" type="file" onChange={handleImageUpload} />
        <br />
        <input
          style={{
            border: "1px solid indigo",
            margin: "20px",
            padding: "10px",
            borderRadius: "10px",
          }}
          type="Submit"
        />
      </form>
    </div>
  );
};
export default AddProducts;
