import React from 'react';
import './App.css';
import HomePage from './containers/HomePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListPage from "./containers/ProductListPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/cart" component={CartPage} /> */}
          {/* <Route path="/checkout" component={CheckoutPage} /> */}
          {/* <Route path="/account/orders" component={OrderPage} /> */}
          {/* <Route path="/order_details/:orderId" component={OrderDetailsPage} /> */}
          {/* <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          /> */}
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
