import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { userContext } from "../../App";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import Order from "../Order/Order";

const CheckOut = () => {
  const { _id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleCheckInDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };
  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };

  const handleOrder = () => {
    const newOrder = { ...loggedInUser, ...selectedDate };
    fetch(`http://localhost:5000/addOrder/${_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Hello, {loggedInUser.name} Let's order a {_id} product.
      </h1>
      <p>
        Want a <Link to="/home">different Product?</Link>{" "}
      </p>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="CheckOut Date "
            value={selectedDate.checkIn}
            onChange={handleCheckInDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="CheckIn Date"
            format="dd/MM/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckOutDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Button onClick={handleOrder} variant="contained" color="primary">
          Order Now
        </Button>
      </MuiPickersUtilsProvider>
      <Order></Order>
    </div>
  );
};

export default CheckOut;
