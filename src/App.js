import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Review from "./components/Review";
import AddRestaurant from "./components/AddRestaurant";
import Order from "./components/Order";
import ErrorNotFound from "./components/ErrorNotFound";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Restaurants} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/restaurants/:restaurantId/reviews"
            component={Review}
          />
          <Route exact path="/addrestaurant" component={AddRestaurant} />
          <Route exact path="/order" component={Order} />
          <Route component={ErrorNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
