import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./components/home";
import Price from "./components/price";
import Features from "./components/features"
import Section from "./components/section";
export const AppRouter=()=>
<Router>

          <Route exact path="/home" component={Home}>
           
          </Route>
          <Route exact path="/prices" component={Price}>
           
          </Route>
          <Route exact path="/features" component={Features}>
          
          </Route>
          <Route exact path="/" component={Section}>
          
          </Route>
</Router>