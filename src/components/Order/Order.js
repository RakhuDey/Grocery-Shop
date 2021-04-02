import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../App";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  useEffect(() => {
    fetch("http://localhost:5000/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h3> You have {orders.length} order</h3>
      {orders.map((order) => (
        <li key={order._id}>
          name:{order.name} From:{" "}
          {new Date(order.checkIn).toDateString("dd/MM/yyyy")} To:
          {new Date(order.checkOut).toDateString("dd/MM/yyyy")}
        </li>
      ))}
    </div>
  );
};

export default Orders;
