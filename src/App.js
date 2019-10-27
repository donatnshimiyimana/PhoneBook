import React from 'react';
import {Component} from 'react';
import { Switch, Route } from "react-router-dom";

import {HomePage} from './HomePage/HomePage';
import {Add} from './Add/Add';
import {Details} from './Details/Details';
import {Edit} from './Edit/Edit';

import './App.css';



class App extends Component {
render() {
  return (
    <div>
      {/* This the route link to the pages */}
      <div>
        <Switch>
          <Route exact path="/" component ={HomePage}/>
          <Route exact path="/Add" component={Add}/>
          <Route exact path="/Details/:id" component={Details}/>
          <Route exact path="/Edit/:id" component={Edit}/>
        </Switch>
      </div>
    </div>
  );
 }
}

export default App;
