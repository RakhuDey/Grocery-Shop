import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductMange from "./components/ProductMange/ProductMange";
import Login from "./components/Login/Login";
import CheckOut from "./components/CheckOut/CheckOut";
import Orders from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <div className="row">
            <div className="col">
              {" "}
              <h1>Grocery-Shop</h1>
            </div>
            <div className="col">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/addProducts">Add Product</Link>
                </li>

                <li>
                  <Link to="/productMange">Mange</Link>
                </li>
                <li>
                  <Link to="/login">
                    Login{" "}
                    <p>
                      <p>{loggedInUser.name}</p>
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkOut/:_id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/addProducts">
              <AddProducts />
            </PrivateRoute>
            <PrivateRoute path="/productMange">
              <ProductMange />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/productMange">
              <ProductMange></ProductMange>
            </Route>
          </Switch>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
